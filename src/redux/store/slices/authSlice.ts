import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface initialAuthStateType {
//   token?: string;
//   user?: {
//     id: string;
//     username: string;
//     role: string;
//   };
// }
interface AuthUserType {
  id: string;
  email: string;
  fullName: string;
}

interface initialAuthStateType {
  user?: AuthUserType;
  token?: string;
  isVerificationPending: boolean;
  pendingEmail?: string;
}

const initialAuthState: initialAuthStateType = {
  user: undefined,
  token: undefined,
  isVerificationPending: false,
  pendingEmail: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    // After supabase.auth.signUp() → no token yet
    registerPending: (state, action: PayloadAction<{ email: string }>) => {
      state.isVerificationPending = true;
      state.pendingEmail = action.payload.email;
    },

    // After supabase.auth.signInWithPassword() → token + user
    login: (
      state,
      action: PayloadAction<{ user: AuthUserType; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isVerificationPending = false;
      state.pendingEmail = undefined;
    },

    // On signOut
    logout: () => initialAuthState,
  },
});

export const { registerPending, login, logout } = authSlice.actions;
export default authSlice.reducer;
