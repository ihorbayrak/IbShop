import { useState, useEffect } from 'react';

import SliderDots from '../sliderDots/SliderDots';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { SliderContainer, SliderWrapper, SliderArrow , SlideImg} from './style.js';

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
            setSlideIndex((prevState) => prevState + 1);
        }

        if (slideIndex === imgArr.length - 1) {
            setSlideIndex(0);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex((prevState) => prevState - 1);
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
        <SliderContainer>
            <SliderArrow direction='left' onClick={prevSlide}>
                <AiFillCaretLeft />
            </SliderArrow>

            <SliderWrapper>
                {imgArr.map((imageSrc, index) => {
                    return <SlideImg slideIndex={slideIndex} key={index} src={imageSrc} alt='slide' />;
                })}
            </SliderWrapper>

            <SliderArrow direction='right' onClick={nextSlide}>
                <AiFillCaretRight />
            </SliderArrow>

            <SliderDots imgArr={imgArr} onChangeDot={onChangeDot} slideIndex={slideIndex} />
        </SliderContainer>
    );
};

export default Slider;
