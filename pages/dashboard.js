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
        <h1 className={styles.title}>Dashboard</h1>
        <h1>Message: {message}</h1>
        <button onClick={handleLogout}>Signout</button>
      </main>
    </div>
  );
}
