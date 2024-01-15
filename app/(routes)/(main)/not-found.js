import Link from "next/link"

export default function NotFound() {
  return <>
    <div className="flex flex-col justify-center items-center absolute w-screen h-screen">
      <div className="h-8" />
      <h1>404 Not Found</h1>
      <Link href="/">➣ Go back to home page</Link>
    </div>
  </>
}