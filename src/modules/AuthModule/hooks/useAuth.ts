"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/auth.service";
import { LoginFormInput, RegisterFormInput } from "../types/authTypes";
import {
  login as loginAction,
  registerPending,
  logout as logoutAction,
} from "@/redux/store/slices/authSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";

export function useAuth() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginFormInput) => {
    try {
      setLoading(true);
      setError(null);
      const result = await authService.signInWithEmail(data);

      dispatch(
        loginAction({
          token: result.session.access_token,
          user: {
            id: result.user.id,
            email: result.user.email!,
            fullName: result.user.user_metadata.fullName,
          },
        }),
      );

      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) return setError(err.message);
      return "unexpected error";
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data: RegisterFormInput) => {
    try {
      setLoading(true);
      setError(null);

      await authService.signUpNewUser(data);

      dispatch(registerPending({ email: data.email }));

      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) return setError(err.message);
      return "unexpected error";
    } finally {
      setLoading(false);
    }
  };
  const logoutUser = async () => {
    await authService.signOutSession();
    dispatch(logoutAction());
    router.push("/login");
  };

  return { login, signup, logoutUser, loading, error };
}
