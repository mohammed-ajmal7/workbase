"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { token = "", user } = useAppSelector((state) => state.auth);

  const router = useRouter();
  const path = usePathname();

  const isAuthPage = ["/login", "/register"].includes(path.trim());

  useEffect(() => {
    if (!token || !user) {
      if (!isAuthPage) router.push("/register");
    } else if (token && user && isAuthPage) {
      router.push("/dashboard");
    }
  }, [token, user, router, isAuthPage]);

  if (token && user && isAuthPage) return <>Loading...</>;
  if (token && user) return <>{children}</>;
  if (!token && isAuthPage) return <>{children}</>;
  return <>Loading...</>;
};

export default AuthWrapper;
