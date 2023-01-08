import { useEffect } from 'react';

import { formatPrice } from '../../utils/functions/functions';

import { useDispatch, useSelector } from 'react-redux';
import {
    categoriesMapSelector,
    fetchCategories,
} from '../../redux/reducers/categoriesSlice/categoriesSlice';

import ProductCard from '../productCard/ProductCard';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { ListContainer } from './style.js';

const ProductsList = ({ category }) => {
    const { categoriesLoadingStatus } = useSelector((state) => state.categories);
    const categories = useSelector(categoriesMapSelector);

    const { activeOption } = useSelector((state) => state.sort);
    const { activeFilter } = useSelector((state) => state.filters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <ErrorMessage />;
    }

    const renderProducts = (arr) => {
        if (!arr) return;

        const filteredProducts = [];

        if (activeFilter === 'all') {
            filteredProducts.push(...arr);
        } else {
            filteredProducts.push(...arr.filter((item) => item[activeFilter]));
        }

        return filteredProducts.map((product) => {
            return <ProductCard category={category} key={product.id} product={product} />;
        });
    };

    const sortProducts = (arr) => {
        if (!arr) return;

        const arrayWithSortItems = [...arr];

        switch (activeOption) {
            case 'high':
                return arrayWithSortItems.sort((a, b) => {
                    const first = formatPrice(a.price, a.discount);
                    const second = formatPrice(b.price, b.discount);

                    return second - first;
                });

            case 'low':
                return arrayWithSortItems.sort((a, b) => {
                    const first = formatPrice(a.price, a.discount);
                    const second = formatPrice(b.price, b.discount);

                    return first - second;
                });

            default:
                return arrayWithSortItems;
        }
    };

    const elements = renderProducts(sortProducts(categories[category]));

    return <ListContainer>{elements}</ListContainer>;
};

export default ProductsList;
