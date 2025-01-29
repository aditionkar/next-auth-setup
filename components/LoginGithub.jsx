"use client";

import { signIn } from "next-auth/react";
import { IconBrandGithub } from "@tabler/icons-react";

function LoginGithub() {
  return (
    <button
      className="bg-white hover:scale-95 duration-200 ease-in-out ring-1 ring-black relative group/btn flex space-x-2 items-center justify-start px-4 py-2 w-full text-black rounded-md h-10 font-medium shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      onClick={() => signIn("github")}
    >
      <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        Log in with Github
      </span>
    </button>
  );
}

export default LoginGithub;