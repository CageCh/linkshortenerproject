"use client"

import React, { useEffect } from "react"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isSignedIn && pathname === "/") {
      router.push("/dashboard")
    }
  }, [isSignedIn, pathname, router])

  return (
    <header className="w-full border-b bg-white/50 px-6 py-3 shadow-sm dark:bg-zinc-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-black dark:text-zinc-50">LinkShortener</span>
          <span className="hidden text-sm text-zinc-500 sm:inline">Fast, simple links</span>
        </div>

        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign in</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button>Sign up</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
