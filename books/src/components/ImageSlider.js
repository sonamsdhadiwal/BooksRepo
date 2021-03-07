//Setting all the functions and data for carousel
import { SliderData } from "./SliderData";
import React, {useState} from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    }

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide,index) => {
                return (
                    <div className={index === current ? 'slide-active': 'slide'} Key={index}> 
                        {index === current && (
                        <img src={slide.image} alt="nature images"className="image"/>)}
                    </div>
                )
                
            })}
        </section>
    )
};

export default ImageSlider;