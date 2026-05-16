export interface UserCredential {
  email: string;
  password: string;
}

export const validUsers: Record<string, UserCredential> = {
  admin: {
    email: 'admin.zee@ndosi.com',
    password: '@12345678'
  },

  standardUser: {
    email: 'zee2025@ndosi.com',
    password: '@12345678'
  },

  instructorUser: {
    email: 'instructor@gmail.com',
    password: '@12345678'
  }
};

