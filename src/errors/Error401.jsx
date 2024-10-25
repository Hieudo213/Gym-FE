
import React from "react";
import { Link } from "react-router-dom";

function Error401() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-200 ">
                <div class="bg-white  w-full h-full relative">
                    <img src="https://mona.host/wp-content/uploads/2024/07/loi-401-unauthorized-la-gi.jpg" className="w-full h-full" alt="" />
                    <div className="absolute left-1/3 top-[78%] px-7 py-2 bg-blue-500 rounded-[5px] text-center  cursor-pointer  hover:bg-blue-800" >
                        <Link to="http://localhost:3000/" className="hover:text-white w-full h-full">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error401;