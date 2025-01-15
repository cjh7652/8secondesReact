import React, { useState, useEffect } from 'react';
import { womenNewProductSlide } from "../data/womenData";
import { menNewProductSlide } from '../data/menData';
import './NewProductSlide.css';
import { useTabContext } from "../context/TabContext";

function NewProductSlide() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { activeTab } = useTabContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if (activeTab === "WOMEN") {
                    return (prev + 1) % womenNewProductSlide.length;
                } else {
                    return (prev + 1) % menNewProductSlide.length;
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentImage =
    activeTab === "WOMEN"
            ? womenNewProductSlide[currentSlide]?.src
            : menNewProductSlide[currentSlide]?.src;

    return (
        <div className='newProductSlide'>
            {currentImage ? <img src={currentImage} alt="슬라이드 이미지" /> : null}
        </div>
    );
}

export default NewProductSlide;
