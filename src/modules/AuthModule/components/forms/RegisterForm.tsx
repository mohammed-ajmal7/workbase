"use client";
import styles from "./authForm.module.scss";
import Link from "next/link";
import { RegisterFormInput } from "../../types/authTypes";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterForm() {
  const { signup, loading, error } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    await signup(data);
    console.log(data);
  };

  const password = watch("password");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSection}>
      <div className={styles.fields}>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter Your Full Name"
          {...register("fullName", { required: "Full Name is required." })}
        />
        {errors.fullName && (
          <p className={styles.errorText}>{errors.fullName.message}</p>
        )}
      </div>
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className={styles.errorText}>{errors.password.message}</p>
        )}
      </div>
      <div className={styles.fields}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Enter Your Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className={styles.errorText}>{errors.confirmPassword.message}</p>
        )}
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      <div className={styles.redirectSection}>
        <p>
          Already have an account?{" "}
          <Link href="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </form>
  );
}
