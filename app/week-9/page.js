"use client";

import { useUserAuth } from "./_utils/auth-context";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const signIn = async () => {
        await gitHubSignIn();
    }
    const signOut = async () => {
        await firebaseSignOut();

    console.log(user);
    return (
        <main></main>
    )};
        
};
