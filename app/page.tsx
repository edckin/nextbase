"use client"

import Button from "@/components/Button"
import { getCurrentUser } from "@/auth/getCurrentUser"

export default function Home() {
  const user = getCurrentUser()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pb-8">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome
          <code className="font-mono font-bold">{user.name}</code>
        </p>
        <form>
          <input
            name="id"
            className="mr-2 p-2 rounded"
            type="number"
            placeholder="Enter user ID"
          />
          <Button type="submit">Get Email</Button>
        </form>
      </div>
      <div>User Email: {"email address"} </div>
    </main>
  )
}
