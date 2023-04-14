import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function UserBulletin() {
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