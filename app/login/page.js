import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from 'next/image';

function LogInPage() {
  return (
    <div>
      <div className="min-w-screen  flex items-center justify-center px-5 py-5 mt-14">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <Image
                src="/Security-bro2.svg"
                alt="Security-bro"
                width={600}
                height={600}
              ></Image>
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-5">Log in</h2>

              <p className="text-sm text-gray-600 mb-5">
                Log in to your account. It’s quick and easy!
              </p>
              <form>
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
                      href="/signIn"
                      className=" mt-3 text-center block w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-lg px-4 py-2"
                    >
                      Don't have an account? Sign in here
                    </Link>
                  </div>
                </div>
              </form>
              <section className="flex mt-8 space-x-5 w-full">
                <form>
                  <button
                    className="bg-white hover:scale-95 duration-200 ease-in-out ring-1 ring-black relative group/btn flex space-x-2 items-center justify-start px-4 py-2 w-full text-black rounded-md h-10 font-medium shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                  >
                    <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Log in with Github
                    </span>
                  </button>
                </form>
                <form>
                  <button
                    className=" hover:scale-95 duration-200 ease-in-out ring-1 ring-black relative group/btn flex space-x-2 items-center justify-start px-4 py-2 w-full text-black rounded-md h-10 font-medium shadow-input bg-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                  >
                    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {" "}
                      Log in with Google
                    </span>
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
