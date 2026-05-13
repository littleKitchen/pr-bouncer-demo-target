export type User = {
  id: string;
  email: string;
  role: "admin" | "member";
};

export function canAccessAdmin(user: User): boolean {
  return user.role === "admin";
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
