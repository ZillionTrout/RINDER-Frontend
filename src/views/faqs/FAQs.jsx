import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Tutorial() {
    const { isLoggedIn } = useAuth();

    return (
        <>
        { isLoggedIn &&
            <div>
                <h1>EN CONSTRUCCIÓN</h1>
            </div>
        }
        </>
    )
}