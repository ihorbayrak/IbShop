import { useState, useEffect } from 'react';

import SliderDots from '../sliderDots/SliderDots';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import './slider.scss';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => {
            clearInterval(intervalId);
        };
    });

    const nextSlide = () => {
        if (slideIndex !== imgArr.length - 1) {
            setSlideIndex(slideIndex + 1);
        }

        if (slideIndex === imgArr.length - 1) {
            setSlideIndex(0);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        }

        if (slideIndex === 0) {
            setSlideIndex(imgArr.length - 1);
        }
    };

    const onChangeDot = (index) => {
        setSlideIndex(index);
    };

    const imgArr = [
        'https://www.business2community.com/wp-content/uploads/2019/05/word-image.png',
        'https://www.business2community.com/wp-content/uploads/2019/05/word-image-1.png',
        'https://www.business2community.com/wp-content/uploads/2019/05/word-image-3.png',
        'https://www.business2community.com/wp-content/uploads/2019/05/word-image-5.png',
    ];

    return (
        <div className='slider'>
            <div className='slider__arrow slider__arrow_left' onClick={prevSlide}>
                <AiFillCaretLeft />
            </div>

            <div className='slider__wrapper'>
                {imgArr.map((imageSrc, index) => {
                    return (
                        <img
                            key={index}
                            src={imageSrc}
                            alt='slide'
                            style={{ transform: `translate(${slideIndex * -100}%)` }}
                        />
                    );
                })}
            </div>

            <div className='slider__arrow slider__arrow_right' onClick={nextSlide}>
                <AiFillCaretRight />
            </div>

            <SliderDots imgArr={imgArr} onChangeDot={onChangeDot} slideIndex={slideIndex} />
        </div>
    );
};

export default Slider;
