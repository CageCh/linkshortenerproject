import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();
  const userId = (session as any).userId ?? (session as any).user?.id;

  if (!userId) {
    // Protect this route server-side per docs: redirect unauthenticated users to homepage
    return redirect("/");
  }

  return <h1>Dashboard</h1>;
}
