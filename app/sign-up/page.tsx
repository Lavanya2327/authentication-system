import Link from "next/link";
import { signUp } from "../actions/auth";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[linear-gradient(135deg,#A7F3D0_0%,#34D399_35%,#065F46_75%,#022C22_100%)]">
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
      <form
        action={signUp}
        className="w-full max-w-md bg-[#F8FFF8] p-8 rounded-2xl shadow-xl border border-green-200"
      >
        <h1 className="text-3xl font-bold text-center text-green-900">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Join us and securely access your dashboard.
        </p>

        <div className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border-2 border-green-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 border-2 border-green-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-green-800 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}