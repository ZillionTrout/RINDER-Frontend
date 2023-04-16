import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom'
import BulletinService from "../../services/bulletinService";
import CardBulletin from "../../components/CardBulletin";

export default function UserBulletin({userId}) {
    const { isLoggedIn, user } = useAuth();
    const [bulletins, setBulletins] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getBulletins = async () => {
            try {
                const response = await BulletinService.getBulletins(userId);
                setBulletins(response);
            } catch (error) {
                console.error(error);
            }
        }
        getBulletins();
              // eslint-disable-next-line
    }, [])

    const handleDeleteBulletin = async (bulletinId) => { 
        try {      
            await BulletinService.deleteBulletin(bulletinId); 
            navigate('/');
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <> {isLoggedIn && bulletins &&
            <div>
                <h1>Anuncios creados</h1>
                {bulletins.filter(bulletin => bulletin.userId === user._id).map(bulletin => (
                    <CardBulletin
                        key={bulletin._id}
                        bulletin={bulletin}
                        handleDelete={() => handleDeleteBulletin(bulletin._id)}
                    />
                ))}
            </div>
            }
        </>
    )
}

