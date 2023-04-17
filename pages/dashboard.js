import { NextPage } from "next";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Dashboard() {
  const { data: session } = useSession();

  const router = useRouter();
  const message = session?.user.name;

  function handleLogout() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard page" />
      </Head>
      <main className={styles.main}>
        <div className="p-5 rounded-md">
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        </div>
        <div className="p-5 rounded-md">
          <h1 className="text-xl text-black">Message: {message}</h1>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          type="button"
          onClick={handleLogout}
        >
          Signout
        </button>
      </main>
    </div>
  );
}
