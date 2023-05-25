import Link from "next/link";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">
              First Post
            </Link>
          </li>
          <li>
            <Link href="/posts/second-post">
              Second Post
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}