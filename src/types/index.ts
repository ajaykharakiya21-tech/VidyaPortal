/**
 * Core Type Definitions for VidyaPortal
 */

// User Types
export type UserRole = 'student' | 'admin' | 'moderator';

export interface User {
  id: string;
  email: string;
  phone?: string;
  full_name: string;
  role: UserRole;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_login?: string;
}

// Student Types
export type EducationLevel = 
  | '10th_pass'
  | '12th_pass'
  | 'diploma'
  | 'bachelors'
  | 'masters'
  | 'other';

export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';

export interface Student extends User {
  role: 'student';
  date_of_birth?: string;
  gender?: Gender;
  current_education_level?: EducationLevel;
  current_institution?: string;
  annual_family_income: number;
  disability_status?: string;
  state: string;
  district: string;
  address?: string;
  pincode?: string;
  guardian_name?: string;
  guardian_phone?: string;
  statement_of_purpose?: string;
  profile_image_url?: string;
}

// Application Types
export type ApplicationStatus = 
  | 'pending'
  | 'under_review'
  | 'approved'
  | 'rejected'
  | 'completed';

export interface Application {
  id: string;
  student_id: string;
  status: ApplicationStatus;
  priority_score: number;
  remarks?: string;
  reviewed_by?: string;
  reviewed_at?: string;
  created_at: string;
  updated_at: string;
}

// Document Types
export type DocumentType = 'aadhaar' | 'student_id' | 'income_certificate' | 'other';

export interface Document {
  id: string;
  application_id: string;
  document_type: DocumentType;
  file_name: string;
  file_size: number;
  file_path: string;
  file_hash: string;
  is_encrypted: boolean;
  encryption_algorithm: string;
  iv?: string;
  created_at: string;
  verified_at?: string;
  verified_by?: string;
}

// OTP Session
export interface OTPSession {
  id: string;
  email_or_phone: string;
  otp_hash: string;
  attempts: number;
  max_attempts: number;
  is_verified: boolean;
  expires_at: string;
  created_at: string;
  verified_at?: string;
}

// Auth Types
export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  session_id?: string;
}

export interface OTPResponse {
  success: boolean;
  message: string;
  session_id: string;
  expires_in: number; // in seconds
}

export interface VerifyOTPResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

// API Request/Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
  timestamp: string;
  path: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Admin Types
export interface AdminStats {
  total_applications: number;
  approved_count: number;
  rejected_count: number;
  pending_count: number;
  total_students: number;
  total_documents_uploaded: number;
  average_processing_time: number; // in hours
}

export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  entity_type?: string;
  entity_id?: string;
  changes?: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

// Notification Types
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  type: NotificationType;
  is_read: boolean;
  action_url?: string;
  created_at: string;
  read_at?: string;
}

// Form Types
export interface LoginFormData {
  email_or_phone: string;
}

export interface OTPVerificationFormData {
  otp: string;
  session_id: string;
}

export interface StudentRegistrationFormData {
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: Gender;
  current_education_level: EducationLevel;
  current_institution: string;
  annual_family_income: number;
  disability_status?: string;
  state: string;
  district: string;
  address: string;
  pincode: string;
  guardian_name: string;
  guardian_phone: string;
  statement_of_purpose: string;
}

export interface DocumentUploadData {
  document_type: DocumentType;
  file: File;
  application_id: string;
}

// Error Types
export interface ValidationError {
  field: string;
  message: string;
}

export class APIError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errors?: ValidationError[]
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Rate Limit Types
export interface RateLimitConfig {
  window_ms: number;
  max_requests: number;
  message?: string;
}

export interface RateLimitStatus {
  remaining: number;
  reset: number;
  limit: number;
}
