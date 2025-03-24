"use client"

import { useRouter } from "next/navigation";

export default function DynamicPage() {
  const params = useRouter();
  const { i } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold">Welcome to {i}</h1>
    </div>
  );
}