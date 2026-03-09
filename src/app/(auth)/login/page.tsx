import LoginForm from "@/modules/auth/components/forms/LoginForm";
import React from "react";
export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md ">
        <h1>Login</h1>
        <p>Lets Build Your Own Co-Work Space</p>
        <div className="flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
