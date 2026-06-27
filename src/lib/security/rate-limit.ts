import { SECURITY } from '@/constants';

const rateLimitStore = new Map<
  string,
  { count: number; resetTime: number }
>();

/**
 * Check and enforce rate limit
 */
export function checkRateLimit(
  identifier: string,
  limit: number = SECURITY.RATE_LIMIT_MAX_REQUESTS,
  windowMs: number = SECURITY.RATE_LIMIT_WINDOW_MS
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const key = identifier;
  
  const record = rateLimitStore.get(key);
  
  // If no record or window expired, create new one
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return {
      allowed: true,
      remaining: limit - 1,
      resetTime: now + windowMs,
    };
  }
  
  // Increment count
  record.count++;
  
  const allowed = record.count <= limit;
  const remaining = Math.max(0, limit - record.count);
  
  return {
    allowed,
    remaining,
    resetTime: record.resetTime,
  };
}

/**
 * Reset rate limit for an identifier
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

/**
 * Clean up expired rate limit records (call periodically)
 */
export function cleanupExpiredRateLimits(): void {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}
