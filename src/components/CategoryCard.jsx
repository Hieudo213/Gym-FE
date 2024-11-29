import React from 'react';
const url = 'https://citigym.com.vn/storage/uploads/thumbnail-1-5.jpg'
const CategoryCard = ({title, image}) => (
    <div
        className={`cursor-pointer relative group text-2xl uppercase flex justify-center items-center bg-cover bg-center p-4 text-white w-[350px] h-[350px]`}
        style={{ backgroundImage: `url(${image})` }} >
        <div
            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity">
        </div>
        <div
            className="group-hover:scale-110 transition-transform absolute inset-0 flex justify-center items-center">
            <span className="font-[700]">{title}</span>
        </div>
    </div>
);

export default CategoryCard;