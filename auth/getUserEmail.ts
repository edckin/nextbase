"use server"

const users = [
  { id: 1, email: "john@doe.com" },
  { id: 2, email: "jane@doe.com" },
  { id: 3, email: "fred@doe.com" },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getUserEmail(formData: FormData) {
  await delay(5000)
  const userId = formData.get("id")
  return // ???
}
