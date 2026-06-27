/**
 * Application-wide Constants
 */

// App Configuration
export const APP_NAME = 'VidyaPortal';
export const APP_TAGLINE = 'Empowering Indian Youth Through Technology';
export const APP_DESCRIPTION =
  'Secure laptop distribution portal for underprivileged Indian students, aligned with Digital India initiative.';

// URLs
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  VERIFY_OTP: '/auth/verify-otp',
  STUDENT_DASHBOARD: '/dashboard',
  STUDENT_APPLICATION: '/application',
  APPLICATION_TRACKER: '/application-tracker',
  ADMIN: '/admin',
  ADMIN_APPLICATIONS: '/admin/applications',
  ADMIN_ANALYTICS: '/admin/analytics',
  ABOUT: '/#about',
  INSPIRATION: '/#inspiration',
  FAQ: '/#faq',
} as const;

// Indian States
export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Puducherry',
  'Lakshadweep',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Ladakh',
  'Jammu and Kashmir',
] as const;

// Education Levels
export const EDUCATION_LEVELS = [
  { value: '10th_pass', label: '10th Pass' },
  { value: '12th_pass', label: '12th Pass' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'bachelors', label: "Bachelor's Degree" },
  { value: 'masters', label: "Master's Degree" },
  { value: 'other', label: 'Other' },
] as const;

// Gender Options
export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer Not to Say' },
] as const;

// Document Types
export const DOCUMENT_TYPES = [
  { value: 'aadhaar', label: 'Aadhaar Card (आधार कार्ड)' },
  { value: 'student_id', label: 'Student ID / Enrollment Certificate' },
  { value: 'income_certificate', label: 'Income Certificate (आय प्रमाण पत्र)' },
  { value: 'other', label: 'Other Document' },
] as const;

// Application Statuses
export const APPLICATION_STATUSES = [
  {
    value: 'pending',
    label: 'Pending',
    color: 'bg-yellow-100 text-yellow-800',
    icon: 'Clock',
  },
  {
    value: 'under_review',
    label: 'Under Review',
    color: 'bg-blue-100 text-blue-800',
    icon: 'Eye',
  },
  {
    value: 'approved',
    label: 'Approved',
    color: 'bg-green-100 text-green-800',
    icon: 'CheckCircle',
  },
  {
    value: 'rejected',
    label: 'Rejected',
    color: 'bg-red-100 text-red-800',
    icon: 'XCircle',
  },
  {
    value: 'completed',
    label: 'Completed',
    color: 'bg-purple-100 text-purple-800',
    icon: 'Award',
  },
] as const;

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+91)?[6-9]\d{9}$/,
  AADHAAR_REGEX: /^\d{12}$/,
  PINCODE_REGEX: /^\d{6}$/,
  PASSWORD_MIN_LENGTH: 8,
  OTP_LENGTH: 6,
  STATEMENT_MIN_LENGTH: 50,
  STATEMENT_MAX_LENGTH: 1000,
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_FORMATS: ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_EXTENSIONS: ['.pdf', '.jpg', '.jpeg', '.png', '.webp'],
} as const;

// Security
export const SECURITY = {
  OTP_EXPIRY_MINUTES: parseInt(process.env.OTP_EXPIRY_MINUTES || '10'),
  OTP_LENGTH: parseInt(process.env.OTP_LENGTH || '6'),
  MAX_OTP_ATTEMPTS: 5,
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  SESSION_TIMEOUT_MS: 30 * 60 * 1000, // 30 minutes
  ADMIN_SESSION_TIMEOUT_MS: 60 * 60 * 1000, // 60 minutes
} as const;

// Language Options
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
] as const;

// Colors - Indian Tricolor
export const COLORS = {
  SAFFRON: '#ff6b35',
  WHITE: '#f5f5f5',
  GREEN: '#1b7d4a',
  BLUE: '#004b87',
  DARK_BG: '#0a0e27',
  LIGHT_BG: '#f8fafb',
} as const;

// Theme
export const THEME = {
  PRIMARY: COLORS.SAFFRON,
  SECONDARY: COLORS.GREEN,
  ACCENT: COLORS.BLUE,
  DARK: COLORS.DARK_BG,
  LIGHT: COLORS.LIGHT_BG,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid Indian phone number',
  INVALID_OTP: 'OTP is invalid or expired',
  MAX_OTP_ATTEMPTS: 'Maximum OTP attempts exceeded. Please try again later.',
  DOCUMENT_UPLOAD_FAILED: 'Failed to upload document. Please try again.',
  INVALID_FILE_SIZE: `File size must be less than ${FILE_UPLOAD.MAX_FILE_SIZE / 1024 / 1024}MB`,
  INVALID_FILE_FORMAT: 'Invalid file format. Allowed formats: PDF, JPEG, PNG, WebP',
  APPLICATION_NOT_FOUND: 'Application not found',
  UNAUTHORIZED: 'You are not authorized to access this resource',
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  OTP_SENT: 'OTP sent successfully',
  OTP_VERIFIED: 'OTP verified successfully',
  REGISTRATION_SUCCESSFUL: 'Registration successful. Welcome to VidyaPortal!',
  APPLICATION_SUBMITTED: 'Application submitted successfully',
  APPLICATION_UPDATED: 'Application updated successfully',
  DOCUMENT_UPLOADED: 'Document uploaded successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
} as const;

// Features
export const FEATURES = {
  SECURE_LOGIN: 'OTP-based Authentication',
  ENCRYPTED_DOCUMENTS: 'End-to-End Encrypted Document Upload',
  REAL_TIME_TRACKING: 'Real-Time Application Tracking',
  ADMIN_DASHBOARD: 'Comprehensive Admin Panel',
  DATA_SECURITY: '100% Data Secured under Indian IT Act',
  MULTI_LANGUAGE: 'English & Hindi Support',
} as const;

// PM Modi Quotes & Vision
export const VISION = {
  MAIN: 'Digital India: Empowering Youth, Building Nations',
  TAGLINE: 'Aatmanirbhar Bharat - Self-Reliant India',
  QUOTE:
    '"Technology is not just a tool for development, but a bridge to equality and opportunity for every Indian child."',
  MISSION:
    'VidyaPortal aligns with Hon\'ble PM Narendra Modi\'s vision to ensure that every underprivileged student has access to digital tools for learning and skill development, enabling them to become architects of a self-reliant India.',
} as const;

// Digital India Badge
export const DIGITAL_INDIA_BADGE = {
  TITLE: '100% Data Secured & Encrypted',
  SUBTITLE: 'Under Indian IT Act Guidelines',
  FEATURES: [
    'AES-256 Encryption',
    'Row-Level Security',
    'Regular Security Audits',
    'GDPR & India Data Protection Compliant',
  ],
} as const;

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/ajaykharakiya21-tech/VidyaPortal',
  TWITTER: 'https://twitter.com/ajaykharakiya',
  LINKEDIN: 'https://linkedin.com/in/ajaykharakiya',
} as const;

// FAQs
export const FAQS = [
  {
    id: 1,
    question: 'Who is eligible to apply?',
    answer:
      'Any student from an economically underprivileged background who is pursuing education in India is eligible to apply. Annual family income should be less than ₹5 lakhs.',
  },
  {
    id: 2,
    question: 'What documents do I need to provide?',
    answer:
      'You need to provide your Aadhaar, Student ID/Enrollment Certificate, and an Income Certificate from your local authority.',
  },
  {
    id: 3,
    question: 'How long does the approval process take?',
    answer:
      'Typically, applications are reviewed within 7-14 days. You can track the status in real-time through your dashboard.',
  },
  {
    id: 4,
    question: 'Is my data secure?',
    answer:
      'Yes! All data is encrypted using AES-256 encryption and stored securely on Supabase servers. We comply with Indian IT Act guidelines and GDPR standards.',
  },
  {
    id: 5,
    question: 'Can I change my application after submission?',
    answer:
      'You can modify your application until it enters the "Under Review" status. Once reviewed, changes are restricted.',
  },
  {
    id: 6,
    question: 'How will I be notified about my application status?',
    answer:
      'You will receive notifications via email and SMS when your application status changes. You can also check your dashboard anytime.',
  },
] as const;
