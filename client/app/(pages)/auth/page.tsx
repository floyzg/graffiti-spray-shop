import Auth from "@/app/Auth/Auth";

export const metadata = {
  title: "Authentication - Spray Zone",
  description: "Login or register to your Spray Zone account",
};

export default function AuthPage() {
  return <Auth />;
}