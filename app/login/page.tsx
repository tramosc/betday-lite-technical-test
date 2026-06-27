import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-zinc-100 px-4 py-10">
      <LoginForm />
    </main>
  );
}