"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/auth.service";
import { LoginFormInput, RegisterFormInput } from "../types/authTypes";

export function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginFormInput) => {
    try {
      setLoading(true);
      setError(null);
      await authService.signInWithEmail(data);
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

      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) return setError(err.message);
      return "unexpected error";
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    await authService.signOutSession();
    router.push("/login");
  };

  return { login, signup, logout, loading, error };
}
