import React from "react";
import { sliderBar } from "./carlot";
import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

export default function Carlout() {
    const [slide, setSlider] = useState(0);
    const length = sliderBar.length;

    function prevSlide() {
        setSlider(slide === 0 ? length - 1 : slide - 1);
    }

    function nextSlide() {
        setSlider(slide === length - 1 ? 0 : slide + 1);
    }

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill
                onClick={prevSlide}
                className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
            />
            <BsArrowRightSquareFill
                onClick={nextSlide}
                className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
            />
            {sliderBar.map((item, index) => (
                <div key={item.id} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && <img src={item.url} alt="" className="w-full rounded-md object-cover" />}
                </div>
            ))}
        </div>
    );
}
