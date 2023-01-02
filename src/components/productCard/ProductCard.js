import { useState } from 'react';

import { formatPrice } from '../../utils/functions/functions';

import { Link } from 'react-router-dom';
import SliderDots from '../sliderDots/SliderDots';
import ImageAttribute from '../imageAttribute/ImageAttribute';
import CartButton from '../cartButton/CartButton';

import './productCard.scss';

const ProductCard = ({ product, category }) => {
    const { name, price, imageUrl, latest, popular, discount } = product;

    const [slideIndex, setSlideIndex] = useState(0);

    const onChangeDot = (index) => {
        setSlideIndex(index);
    };

    const imgArr = [imageUrl, imageUrl, imageUrl];

    const displayPrice = () => {
        if (discount) {
            return (
                <>
                    <div className='product__price'>
                        {formatPrice(price, discount).toFixed(2)}$
                        <span className='product__price product__price_old'>{price}$</span>
                    </div>
                </>
            );
        }

        return <div className='product__price'>{price}$</div>;
    };

    return (
        <li className='product__card'>
            <div className='product__img'>
                <Link to={`/shop/${category}/${name}`} className='product__link'>
                    {imgArr.map((imgSrc, index) => {
                        return (
                            <img
                                key={index}
                                className={slideIndex === index ? 'current' : null}
                                src={imgSrc}
                                alt={name}
                            />
                        );
                    })}

                    <ImageAttribute attributeProps={{ latest, popular, discount }} />
                </Link>

                <SliderDots
                    imgArr={imgArr}
                    slideIndex={slideIndex}
                    onChangeDot={onChangeDot}
                    additionalClass={'_small'}
                />
            </div>

            <div className='product__name'>{name}</div>
            <div className='product__prices'>{displayPrice()}</div>

            <div className='product__buy'>
                <CartButton product={product} />
                <Link className='product__buy-link'>Buy now</Link>
            </div>
        </li>
    );
};

export default ProductCard;
