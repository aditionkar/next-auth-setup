"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { signin } from "@/action/user";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function SignInPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await signin(formData);
  };

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading" || status === "authenticated") {
    return null; // Prevents rendering while checking session or redirecting
  }

  return (
    <div>
      <div className="min-w-screen flex items-center justify-center px-5 py-5 mt-14">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <Image
                src="/Security-bro.svg"
                alt="Security-bro"
                width={600}
                height={600}
              ></Image>
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-5">SignUp</h2>

              <p className="text-sm text-gray-600 mb-5">
                Create your account. It’s free and only takes a minute.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <Label
                      htmlFor="firstName"
                      className="text-xs font-semibold px-1"
                    >
                      First Name
                    </Label>
                    <div className="flex items-center">
                      <Input
                        id="firstName"
                        type="text"
                        className="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg focus:ring-2 bg-white text-black"
                        placeholder="John"
                        name="firstName"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <Label
                      htmlFor="lastName"
                      className="text-xs font-semibold px-1"
                    >
                      Last Name
                    </Label>
                    <div className="flex items-center">
                      <Input
                        id="lastName"
                        type="text"
                        className="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg focus:ring-2 bg-white text-black"
                        placeholder="Doe"
                        name="lastName"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-5">
                  <div className="w-full px-3">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold px-1"
                    >
                      Email{" "}
                    </Label>
                    <div className="flex items-center">
                      <Input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg focus:ring-2 bg-white text-black"
                        placeholder="john.doe@example.com"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-5">
                  <div className="w-full px-3">
                    <Label
                      htmlFor="password"
                      className="text-xs font-semibold px-1"
                    >
                      Password
                    </Label>
                    <div className="flex items-center">
                      <Input
                        id="password"
                        type="password"
                        className="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg focus:ring-2 bg-white text-black"
                        placeholder="************"
                        name="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-5">
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="block w-full text-white text-sm font-semibold rounded-lg px-4 py-2 bg-indigo-500 hover:bg-indigo-600"
                    >
                      Create Account
                    </button>

                    <Link
                      href="/login"
                      className=" mt-3 text-center block w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-lg px-4 py-2"
                    >
                      Already have an account? Log in here
                    </Link>
                  </div>
                </div>
              </form>
              <div className="mt-4 text-center text-xs text-gray-600 flex justify-center">
                By signing up, you agree to our{" "}
                <p className="text-indigo-500 ml-[4px]">Terms</p> 
                <p className="ml-[4px]"> and{" "}</p>
                <p className="text-indigo-500 ml-[4px]">Privacy Policy</p>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
