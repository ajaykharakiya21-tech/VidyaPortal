/**
 * Format currency in Indian Rupees
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date: string | Date, locale: string = 'en-IN'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format time
 */
export function formatTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format date and time
 */
export function formatDateTime(date: string | Date): string {
  return `${formatDate(date)} ${formatTime(date)}`;
}

/**
 * Check if email is already taken (client-side debounce helper)
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0]?.toUpperCase() || '')
    .join('')
    .slice(0, 2);
}

/**
 * Generate random color for avatar
 */
export function getAvatarColor(name: string): string {
  const colors = [
    'bg-saffron-500',
    'bg-india-green-500',
    'bg-india-blue',
    'bg-orange-500',
    'bg-red-500',
  ];
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

/**
 * Mask email
 */
export function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  const maskedUser = user.slice(0, 2) + '*'.repeat(Math.max(1, user.length - 4)) + user.slice(-2);
  return `${maskedUser}@${domain}`;
}

/**
 * Mask phone number
 */
export function maskPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const last4 = cleaned.slice(-4);
  return `****${last4}`;
}

/**
 * Calculate priority score for application
 */
export function calculatePriorityScore(
  income: number,
  educationLevel: string,
  statementLength: number
): number {
  let score = 0;

  // Income-based scoring (lower income = higher priority)
  if (income < 100000) score += 40;
  else if (income < 200000) score += 30;
  else if (income < 300000) score += 20;
  else if (income < 500000) score += 10;

  // Education level scoring
  const eduScores: Record<string, number> = {
    '10th_pass': 30,
    '12th_pass': 25,
    diploma: 20,
    bachelors: 15,
    masters: 10,
  };
  score += eduScores[educationLevel] || 5;

  // Statement quality scoring
  if (statementLength > 300) score += 30;
  else if (statementLength > 200) score += 20;
  else if (statementLength > 100) score += 10;

  return Math.min(score, 100);
}

/**
 * Get reading time for text
 */
export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Get file extension
 */
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

/**
 * Get file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}
