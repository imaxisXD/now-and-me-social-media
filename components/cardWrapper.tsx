'use client';
import { useState } from "react";
import { LoginCard } from "./loginCard";
import { RegisterCard } from "./registerCard";
interface CardWrapperProps {
    cardName: string;
    modal?: boolean;
    closeModal?: (() => void) | undefined;
}

export default function CardWrapper({ cardName, modal = false, closeModal }: CardWrapperProps) {

    const [currCard, setCurrCard] = useState(cardName);

    function toggleHandler(newCardName: string) {
        setCurrCard(newCardName)
    }
    const handleModal = closeModal || (() => { });

    if (currCard === 'login') {
        return <LoginCard toggleHandler={toggleHandler} modal={modal} closeModal={handleModal} />
    }
    else
        return <RegisterCard toggleHandler={toggleHandler} modal={modal} closeModal={handleModal} />


}