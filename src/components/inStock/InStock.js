import { useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    categoriesInStockSelector,
} from '../../utils/reducers/categoriesSlice/categoriesSlice';

import ProductCard from '../productCard/ProductCard';

import { setContent } from '../../utils/functions/functions';

import './inStock.scss';

const InStock = () => {
    const { categoriesLoadingStatus } = useSelector((state) => state.categories);
    const inStockProducts = useSelector(categoriesInStockSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const renderInStockItems = (arr) => {
        if (!arr) return;

        return arr.map((product) => {
            return <ProductCard category={product.category} key={product.id} product={product} />;
        });
    };

    const elements = useMemo(() => {
        return setContent(categoriesLoadingStatus, () => renderInStockItems(inStockProducts));
    }, [categoriesLoadingStatus]);

    return (
        <section className='in-stock'>
            <h2 className='title'>In Stock</h2>

            <ul className='in-stock__list'>{elements}</ul>

            <div className='in-stock__link'>
                <Link to='/catalog'>Go to catalog</Link>
            </div>
        </section>
    );
};

export default InStock;
