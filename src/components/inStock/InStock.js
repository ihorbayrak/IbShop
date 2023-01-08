import { useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    categoriesInStockSelector,
} from '../../redux/reducers/categoriesSlice/categoriesSlice';

import ProductCard from '../productCard/ProductCard';

import { setContent } from '../../utils/functions/functions';

import { InStockSection, InStockList, InStockLink } from './style.js';
import { Title } from '../../styles/Titles';

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
        <InStockSection>
            <Title fz='large'>In Stock</Title>

            <InStockList>{elements}</InStockList>

            <InStockLink>
                <Link to='/catalog'>Go to catalog</Link>
            </InStockLink>
        </InStockSection>
    );
};

export default InStock;
