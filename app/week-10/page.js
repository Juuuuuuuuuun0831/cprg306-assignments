"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation"; 

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter(); 

    const signIn = async () => {
        await gitHubSignIn();
    };

    const signOut = async () => {
        await firebaseSignOut();
    };

    const handleGoToShoppingList = () => {
        router.push("/week-10/shopping-list");
    };

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List App</h1>

            {user ? (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button
                        onClick={signOut}
                        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
                    >
                        Logout
                    </button>
                    <div className="mt-4">
                        <button
                            onClick={handleGoToShoppingList}
                            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                        >
                            Go to Shopping List
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Please sign in to continue.</p>
                    <button
                        onClick={signIn}
                        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                    >
                        Login with GitHub
                    </button>
                </div>
            )}
        </main>
    );
}