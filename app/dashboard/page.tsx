import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "../actions/auth";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#A7F3D0_0%,#34D399_35%,#065F46_75%,#022C22_100%)]">
        <header className="absolute top-0 left-0 w-full bg-green-900 shadow-md">
  <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

    {/* Title */}
    <h1 className="text-2xl font-bold text-white">
      Authentication System
    </h1>

    {/* Navigation */}
    <nav className="flex items-center gap-8 text-white font-medium">
      <a href="#" className="hover:text-green-200 transition">
        Home
      </a>

      <a href="#" className="hover:text-green-200 transition">
        About
      </a>

      <a href="#" className="hover:text-green-200 transition">
        Security
      </a>
    </nav>

  </div>
</header>
      <div className="w-full max-w-lg rounded-2xl bg-[#F8FFF8] border border-green-200 shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-green-900">
          Welcome 👋
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Authentication Successful
        </p>

        <div className="mt-10">
          <p className="text-gray-500">Logged in as</p>

          <h2 className="text-2xl font-semibold text-green-800 mt-2">
            {user.email}
          </h2>

          <div className="mt-6 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            🟢 Active Session
          </div>
        </div>

        <form action={signOut} className="mt-10">
          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Out
          </button>
        </form>

      </div>
    </div>
  );
}