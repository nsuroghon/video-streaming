'use client';

import Image from "next/image";
import Link from "next/link";
import SignIn from "./sign-in";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import {useState, useEffect} from 'react';
import {User} from 'firebase/auth'


import styles from "./navbar.module.css";

export default function Navbar() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    })

    return () => unsubscribe();
  });

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={90} height={20}
          src="/youtube-logo.svg" alt="YouTube Logo"/>
      </Link>

      <SignIn user={user}/>
    </nav>
  );
}