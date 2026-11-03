export const ROLES = ["OWNER", "STAFF", "DOCTOR"] as const;
export type Role = (typeof ROLES)[number];

export const STAFF_BASE = [
  "patients.manage",
  "appointments.manage",
  "queue.manage",
  "billing.create",
  "stock.view",
] as const;

export const STAFF_OPTIONAL = [
  "clinical.summary",
  "registrations.approve",
  "stock.receive",
  "stock.adjust",
  "expenses.record",
  "reports.operational",
  "reports.financial",
  "invoices.void",
] as const;

export const DOCTOR_ONLY = [
  "clinical.write",
  "settings.manage",
  "staff.manage",
  "audit.view",
] as const;

export type Permission =
  | (typeof STAFF_BASE)[number]
  | (typeof STAFF_OPTIONAL)[number]
  | (typeof DOCTOR_ONLY)[number];

export const ALL_PERMISSIONS: Permission[] = [
  ...STAFF_BASE,
  ...STAFF_OPTIONAL,
  ...DOCTOR_ONLY,
];

export type Session = {
  userId: string;
  name: string;
  role: Role;
  permissions: Permission[];
};

export function can(session: Session, permission: Permission) {
  return session.permissions.includes(permission);
}
