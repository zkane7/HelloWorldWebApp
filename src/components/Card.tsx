import React from 'react';

type CardProps = {};

const Card:React.FC<CardProps> = () => {

    return (
        <div className="h-1/3 w-full bg-red-500 text-white">
            The Boy Was There When The Sun Rose
        </div>
    );
};
export default Card;