import { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useEffect } from "react";

const cookies = new Cookies();

export default function Home() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        console.log(session);
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>
        <div className={styles.signup}>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </main>
    </div>
  );
}
