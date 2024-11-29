import React from 'react';
import { FaClock } from 'react-icons/fa6';

function CardComponent({url, children}) {
    return (
        <div className="w-[357px] h-[522px]flex flex-col group overflow-hidden cursor-pointer">
            <div className="w-full h-[268px] overflow-hidden">
                <div
                    style={{
                        backgroundImage: `url(${url})`,
                    }}
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                ></div>
            </div>
            <div className="w-full h-[calc(100%-268px)">
                {children}
            </div>
        </div>
    );
}

export default CardComponent;