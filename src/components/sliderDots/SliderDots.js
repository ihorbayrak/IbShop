import './sliderDots.scss';

const SliderDots = ({ imgArr, onChangeDot, slideIndex, additionalClass }) => {
    let clazz = 'slider-dot';

    if (additionalClass) {
        clazz = `${clazz} ${clazz + additionalClass}`;
    }

    return (
        <div className='slider-dots'>
            {Array.from({ length: imgArr.length }).map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => onChangeDot(index)}
                        className={slideIndex === index ? `${clazz} ${clazz}_active` : `${clazz}`}
                    ></div>
                );
            })}
        </div>
    );
};

export default SliderDots;
