import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  const userId = (session as any).userId ?? (session as any).user?.id;

  if (userId) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-lg bg-white p-12 shadow-md dark:bg-zinc-900 sm:p-16">
        <div className="flex items-center gap-4">
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={64} height={24} priority />
          <h1 className="text-2xl font-semibold leading-7 tracking-tight text-black dark:text-zinc-50">
            LinkShortener — Create and manage short links
          </h1>
        </div>

        <div className="mt-8 max-w-xl">
          <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-300">
            Fast, lightweight link shortening for your projects. Sign in to view
            and manage your shortened links, or try the demo to see how it works.
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <Button asChild>
            <a href="/dashboard">Get Started</a>
          </Button>

          <Button variant="outline" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">View Source</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
