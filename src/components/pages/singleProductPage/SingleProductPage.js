import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { formatPrice } from '../../../utils/functions/functions';

import { useSelector, useDispatch } from 'react-redux';
import {
    categoriesMapSelector,
    fetchCategories,
} from '../../../utils/reducers/categoriesSlice/categoriesSlice';

import ImageAttribute from '../../imageAttribute/ImageAttribute';
import CartButton from '../../cartButton/CartButton';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

import './singleProductPage.scss';

const SingleProductPage = () => {
    const { category, product } = useParams();

    const productInfo = useSelector(categoriesMapSelector);
    const { categoriesLoadingStatus } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <ErrorMessage />;
    }

    let infoAboutProduct = {};

    if (Object.keys(productInfo).length) {
        infoAboutProduct = productInfo[category].find((item) => item.name === product);
    }

    const { name, imageUrl, discount, popular, latest, price, quantity } = infoAboutProduct;

    const displayPrice = () => {
        if (discount) {
            return (
                <>
                    <div className='product__price product__price_big'>
                        {formatPrice(price, discount).toFixed(2)}$
                        <span className='product__price product__price_old'>{price}$</span>
                    </div>
                </>
            );
        }

        return <div className='product__price product__price_big'>{price}$</div>;
    };

    return (
        <section className='product'>
            <div className='product__specific'>
                <h2 className='title title_medium'>{name}</h2>

                <div className='product__pic'>
                    <img src={imageUrl} alt={name} />

                    <ImageAttribute attributeProps={{ discount, popular, latest }} />
                </div>
            </div>

            <div className='product__info'>
                <div className='product__descr'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eligendi
                    repellendus nulla inventore delectus molestiae quam. Incidunt, velit ea rem,
                    iusto, praesentium alias perferendis illo vero fugit nihil optio nam!Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Vel eligendi repellendus
                    nulla inventore delectus molestiae quam. Incidunt, velit ea rem, iusto,
                    praesentium alias perferendis illo vero fugit nihil optio nam!
                </div>
                <div className='product__prices'>{displayPrice()}</div>

                <CartButton product={infoAboutProduct} />
            </div>
        </section>
    );
};

export default SingleProductPage;
