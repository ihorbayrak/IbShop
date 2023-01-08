import { useState } from 'react';

import { formatPrice } from '../../utils/functions/functions';

import SliderDots from '../sliderDots/SliderDots';
import ImageAttribute from '../imageAttribute/ImageAttribute';
import CartButton from '../cartButton/CartButton';

import {
    ProductCardContainer,
    ProductCardImg,
    ProductCardLink,
    ProductCardName,
    ProductCardPrice,
    ProductBuy,
    SlideCardImg,
    BuyLink,
} from './style.js';

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
                    <ProductCardPrice>
                        {formatPrice(price, discount).toFixed(2)}$
                        <ProductCardPrice as='span' isOld>
                            {price}$
                        </ProductCardPrice>
                    </ProductCardPrice>
                </>
            );
        }

        return <ProductCardPrice>{price}$</ProductCardPrice>;
    };

    return (
        <ProductCardContainer>
            <ProductCardImg>
                <ProductCardLink to={`/shop/${category}/${name}`}>
                    {imgArr.map((imgSrc, index) => {
                        return (
                            <SlideCardImg
                                current={slideIndex === index}
                                key={index}
                                src={imgSrc}
                                alt={name}
                            />
                        );
                    })}

                    <ImageAttribute attributeProps={{ latest, popular, discount }} />
                </ProductCardLink>

                <SliderDots
                    imgArr={imgArr}
                    slideIndex={slideIndex}
                    onChangeDot={onChangeDot}
                    isSmall
                />
            </ProductCardImg>

            <ProductCardName>{name}</ProductCardName>

            <div className='product__prices'>{displayPrice()}</div>

            <ProductBuy>
                <CartButton product={product} />

                <BuyLink>Buy now</BuyLink>
            </ProductBuy>
        </ProductCardContainer>
    );
};

export default ProductCard;
