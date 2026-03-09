import RegisterForm from "@/modules/auth/components/forms/RegisterForm";

export default function page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md ">
        <h1>Register</h1>
        <p>Lets Build Your Own Co-Work Space</p>
        <div className="flex items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
