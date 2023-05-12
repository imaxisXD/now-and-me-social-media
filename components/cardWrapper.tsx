'use client';
import { useState } from "react";
import { LoginCard } from "./loginCard";
import { RegisterCard } from "./registerCard";
interface CardWrapperProps {
    cardName: string;
}

export default function CardWrapper({ cardName }: CardWrapperProps) {

    const [currCard, setCurrCard] = useState(cardName);

    function toggleHandler(newCardName: string) {
        setCurrCard(newCardName)
    }

    if (currCard === 'login') {
        return <LoginCard toggleHandler={toggleHandler} />
    }
    else
        return <RegisterCard toggleHandler={toggleHandler} />


}