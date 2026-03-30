import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  const userId = (session as any).userId ?? (session as any).user?.id;

  if (userId) return redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-5xl rounded-lg bg-white p-12 shadow-md dark:bg-zinc-900 sm:p-16">
        <header className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={64} height={24} priority />
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
              LinkShortener
            </h1>
          </div>

          <div className="flex gap-3">
            <Button asChild>
              <a href="/dashboard">Get Started</a>
            </Button>

            <Button variant="outline" asChild>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">View Source</a>
            </Button>
          </div>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-zinc-50">Short links, smarter workflows</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Create memorable short URLs, track clicks, and manage redirects with a
              tiny, privacy-first interface built for developers and teams.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-500" />
                <span className="text-zinc-700 dark:text-zinc-300">Instant link creation — paste, shorten, share.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-500" />
                <span className="text-zinc-700 dark:text-zinc-300">Basic analytics — see clicks and referrers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-500" />
                <span className="text-zinc-700 dark:text-zinc-300">Custom slugs and safe redirects.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-md bg-zinc-100 p-6 dark:bg-zinc-800">
            <label className="mb-2 block text-sm font-medium text-zinc-600 dark:text-zinc-300">Try it — shorten a URL</label>
            <div className="flex w-full gap-2">
              <input aria-label="url" className="flex-1 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" placeholder="https://example.com/very/long/url" />
              <Button>Shorten</Button>
            </div>

            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">This demo does not create real links — sign in to manage your links.</p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-md border border-zinc-100 p-6 text-center dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Fast</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Lightweight code that returns redirects instantly.</p>
          </div>

          <div className="rounded-md border border-zinc-100 p-6 text-center dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Private</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">No tracking beyond click counts; keep your data where you want it.</p>
          </div>

          <div className="rounded-md border border-zinc-100 p-6 text-center dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Extensible</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Built with Next.js and Drizzle so you can extend it easily.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
