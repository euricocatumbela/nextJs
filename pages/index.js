import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>EJC List | Home</title>
        <meta name="keywords" content="eurico" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>lorem</p>
        <p>lorem</p>
        <Link href="/others">
          <a>See other List</a>
        </Link>
      </div>
    </>
  );
}
