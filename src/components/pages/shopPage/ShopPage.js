import { useParams } from 'react-router-dom';

import CategoriesMenu from '../../categoriesMenu/CategoriesMenu';
import ProductFilters from '../../productFilters/ProductFilters';
import ProductsList from '../../productsList/ProductsList';
import SortMenu from '../../sortMenu/SortMenu';

import { ShopSection, ShopOptions, ShopFilters } from './style.js';
import { Title } from '../../../styles/Titles';

const ShopPage = () => {
    const { category } = useParams();

    return (
        <ShopSection>
            <div className='shop__categories'>
                <Title fz='large'>{category}</Title>

                <CategoriesMenu />
            </div>

            <div className='shop__content'>
                <ShopOptions>
                    <SortMenu />

                    <ShopFilters>
                        <Title fz='semi'>FIlter products:</Title>

                        <ProductFilters />
                    </ShopFilters>
                </ShopOptions>

                <ProductsList category={category} />
            </div>
        </ShopSection>
    );
};

export default ShopPage;
