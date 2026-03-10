"use client";
import styles from "./authForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormInput } from "../../types/authTypes";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";

export default function LoginForm() {
  const { login, loading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    await login(data);
    console.log("---->", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSection}>
      <div className={styles.fields}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className={styles.errorText}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.fields}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Your Password"
          {...register("password", { required: "Password is required." })}
        />
        {errors.password && (
          <p className={styles.errorText}>{errors.password.message}</p>
        )}
      </div>

      {error && <p className={styles.errorText}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <div className={styles.redirectSection}>
        <p>
          Don't have an account?{" "}
          <Link href="/register">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </form>
  );
}
