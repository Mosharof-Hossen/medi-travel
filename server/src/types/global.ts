export const USER_ROLE = {
    customer: "user",
    admin: "admin",
} as const;

export type TUserRole  = keyof typeof USER_ROLE;