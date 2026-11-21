import Link from "next/link";
import {
  LayoutDashboard,
  User,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Eye,
} from "lucide-react";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border bg-white shadow-xl md:grid-cols-2">
        {/* Left Side - Branding */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-indigo-600 to-purple-700 p-12 text-white md:flex">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="rounded-xl bg-white/20 p-2">
              <LayoutDashboard size={26} />
            </div>
            <span className="text-2xl font-bold">DashFlow</span>
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold leading-tight">
              Start managing your business smarter.
            </h1>

            <p className="mt-5 leading-7 text-indigo-100">
              Create your account and get access to powerful tools that help you
              manage your business, track performance, and grow faster.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/20 p-2">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="font-semibold">Secure Platform</p>
                  <p className="text-sm text-indigo-100">
                    Your information stays protected.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/20 p-2">
                  <User size={22} />
                </div>
                <div>
                  <p className="font-semibold">Easy Management</p>
                  <p className="text-sm text-indigo-100">
                    Everything you need in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-indigo-200">
            © 2026 DashFlow. All rights reserved.
          </p>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          {/* Mobile Branding */}
          <div className="mb-8 md:hidden">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-600 p-2 text-white">
                <LayoutDashboard size={24} />
              </div>
              <span className="text-2xl font-bold">DashFlow</span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Get started by creating your free account.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Eye size={18} />
                </button>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                Password must be at least 8 characters long.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 accent-indigo-600"
              />

              <label
                htmlFor="terms"
                className="text-sm leading-5 text-gray-500"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign in
            </Link>
          </div>

          <div className="mt-8 border-t pt-6 text-center text-xs text-gray-400">
            © 2026 DashFlow. All rights reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
