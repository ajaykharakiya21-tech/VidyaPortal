import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const ENCODING = 'hex';
const AUTH_TAG_LENGTH = 16;
const IV_LENGTH = 16;

/**
 * Encrypt data using AES-256-GCM
 */
export function encryptData(data: string, key: string): { encrypted: string; iv: string; authTag: string } {
  const encryptionKey = Buffer.from(key, ENCODING);
  const iv = crypto.randomBytes(IV_LENGTH);
  
  const cipher = crypto.createCipheriv(ALGORITHM, encryptionKey, iv);
  let encrypted = cipher.update(data, 'utf8', ENCODING);
  encrypted += cipher.final(ENCODING);
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted,
    iv: iv.toString(ENCODING),
    authTag: authTag.toString(ENCODING),
  };
}

/**
 * Decrypt data using AES-256-GCM
 */
export function decryptData(
  encrypted: string,
  key: string,
  iv: string,
  authTag: string
): string {
  const encryptionKey = Buffer.from(key, ENCODING);
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    encryptionKey,
    Buffer.from(iv, ENCODING)
  );
  
  decipher.setAuthTag(Buffer.from(authTag, ENCODING));
  
  let decrypted = decipher.update(encrypted, ENCODING, 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

/**
 * Hash a string using SHA-256
 */
export function hashString(str: string): string {
  return crypto.createHash('sha256').update(str).digest(ENCODING);
}

/**
 * Generate a random token
 */
export function generateToken(length: number = 32): string {
  return crypto.randomBytes(length).toString(ENCODING);
}

/**
 * Generate OTP
 */
export function generateOTP(length: number = 6): string {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

/**
 * Hash OTP (for secure storage)
 */
export function hashOTP(otp: string): string {
  return crypto.createHash('sha256').update(otp).digest(ENCODING);
}

/**
 * Verify OTP
 */
export function verifyOTP(otp: string, hashedOTP: string): boolean {
  return hashOTP(otp) === hashedOTP;
}

/**
 * Generate file hash
 */
export function generateFileHash(fileBuffer: Buffer): string {
  return crypto.createHash('sha256').update(fileBuffer).digest(ENCODING);
}
