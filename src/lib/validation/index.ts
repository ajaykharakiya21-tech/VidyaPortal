import { VALIDATION_RULES, ERROR_MESSAGES } from '@/constants';

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  return VALIDATION_RULES.EMAIL_REGEX.test(email);
}

/**
 * Validate Indian phone number
 */
export function validatePhone(phone: string): boolean {
  // Remove spaces and dashes
  const cleaned = phone.replace(/[\s-]/g, '');
  return VALIDATION_RULES.PHONE_REGEX.test(cleaned);
}

/**
 * Validate OTP format
 */
export function validateOTP(otp: string): boolean {
  return /^\d{6}$/.test(otp);
}

/**
 * Validate Aadhaar number
 */
export function validateAadhaar(aadhaar: string): boolean {
  return VALIDATION_RULES.AADHAAR_REGEX.test(aadhaar);
}

/**
 * Validate Pincode
 */
export function validatePincode(pincode: string): boolean {
  return VALIDATION_RULES.PINCODE_REGEX.test(pincode);
}

/**
 * Validate statement of purpose
 */
export function validateStatement(statement: string): boolean {
  const length = statement.trim().length;
  return (
    length >= VALIDATION_RULES.STATEMENT_MIN_LENGTH &&
    length <= VALIDATION_RULES.STATEMENT_MAX_LENGTH
  );
}

/**
 * Validate file
 */
export function validateFile(
  file: File,
  maxSize: number = 10 * 1024 * 1024,
  allowedTypes: string[] = []
): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > maxSize) {
    return {
      valid: false,
      error: ERROR_MESSAGES.INVALID_FILE_SIZE,
    };
  }

  // Check file type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: ERROR_MESSAGES.INVALID_FILE_FORMAT,
    };
  }

  return { valid: true };
}

/**
 * Sanitize input string
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>"'%]/g, '') // Remove potentially dangerous characters
    .slice(0, 255); // Limit length
}

/**
 * Validate income value
 */
export function validateIncome(income: number): boolean {
  return income > 0 && income <= 10000000; // 0 to 1 Cr
}

/**
 * Validate date of birth
 */
export function validateDateOfBirth(dateStr: string): boolean {
  const date = new Date(dateStr);
  const now = new Date();
  const age = now.getFullYear() - date.getFullYear();
  
  // Must be at least 18 years old
  return age >= 18 && age <= 100;
}

/**
 * Validate all registration form data
 */
export function validateRegistrationForm(data: any): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.full_name || data.full_name.trim().length < 3) {
    errors.full_name = 'Full name must be at least 3 characters';
  }

  if (!validateEmail(data.email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL;
  }

  if (!validatePhone(data.phone)) {
    errors.phone = ERROR_MESSAGES.INVALID_PHONE;
  }

  if (!validateDateOfBirth(data.date_of_birth)) {
    errors.date_of_birth = 'You must be at least 18 years old';
  }

  if (!data.current_education_level) {
    errors.current_education_level = 'Please select your education level';
  }

  if (!validateIncome(data.annual_family_income)) {
    errors.annual_family_income = 'Please enter a valid income';
  }

  if (!data.state) {
    errors.state = 'Please select a state';
  }

  if (!data.district) {
    errors.district = 'Please enter a district';
  }

  if (!validateStatement(data.statement_of_purpose)) {
    errors.statement_of_purpose = `Statement must be between ${VALIDATION_RULES.STATEMENT_MIN_LENGTH} and ${VALIDATION_RULES.STATEMENT_MAX_LENGTH} characters`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
