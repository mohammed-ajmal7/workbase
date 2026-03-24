"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PUBLIC_ROUTES = ["/login", "/register"];

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { token = "", user } = useAppSelector((state) => state.auth);

  const router = useRouter();
  const path = usePathname();

  const isPublicRoute = PUBLIC_ROUTES.includes(path.trim());
  const isAuthenticated = !!token && !!user;

  useEffect(() => {
    if (!isPublicRoute && !isAuthenticated) {
      router.push("/login");
    } else if (isPublicRoute && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isPublicRoute, router]);

  if (isAuthenticated && isPublicRoute) return <>Loading...</>;
  if (isAuthenticated) return <>{children}</>;
  if (!isAuthenticated && isPublicRoute) return <>{children}</>;
  return null;
};

export default AuthWrapper;
