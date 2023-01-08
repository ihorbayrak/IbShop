import { DotsContainer, Dot } from './style.js';

const SliderDots = ({ imgArr, onChangeDot, slideIndex, isSmall }) => {
    return (
        <DotsContainer>
            {Array.from({ length: imgArr.length }).map((item, index) => {
                return (
                    <Dot
                        key={index}
                        onClick={() => onChangeDot(index)}
                        isSmall={isSmall}
                        isActive={slideIndex === index}
                    ></Dot>
                );
            })}
        </DotsContainer>
    );
};

export default SliderDots;
