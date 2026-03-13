"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { token = "", user } = useAppSelector((state) => state.auth);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!token || !user) {
      router.push("/login");
      return;
    } else if (token && user && path.trim() === "/login") {
      router.push("/dashboard");
    }
  }, [token, user, router, path]);

  if (token && path.trim() === "/login") return "Loading....";
  if (token) return <>{children}</>;
  if (!token && path.trim() === "/login") return <>{children}</>;
};

export default AuthWrapper;
