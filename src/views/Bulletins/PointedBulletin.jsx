import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function PointedBulletin() {
    const { isLoggedIn } = useAuth();
    return (
        <>
            { isLoggedIn &&
                <div className="construccion">
                <h2>Anuncios en los que estas apuntado</h2>
                    <h2>GOBLINS TRABAJANDO</h2>
                    <img src="https://i.postimg.cc/nLhzGVqf/goblinwork.png" alt="enconstrucción" />
                    <h4>Disculpen las molestias</h4>
                </div>
            }
        </>
    )
}