'use client';
import { useState } from "react";
import { LoginCard } from "./loginCard";
import { RegisterCard } from "./registerCard";
interface CardWrapperProps {
    cardName: string;
    modal?: boolean;
    modalhandler?: (() => void) | undefined;
}

export default function CardWrapper({ cardName, modal = false, modalhandler }: CardWrapperProps) {

    const [currCard, setCurrCard] = useState(cardName);

    function toggleHandler(newCardName: string) {
        setCurrCard(newCardName)
    }
    const handleModal = modalhandler || (() => { });

    if (currCard === 'login') {
        return <LoginCard toggleHandler={toggleHandler} modal={modal} modalhandler={handleModal} />
    }
    else
        return <RegisterCard toggleHandler={toggleHandler} modal={modal} modalhandler={handleModal} />


}