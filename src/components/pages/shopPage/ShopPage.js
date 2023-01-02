import { useParams } from 'react-router-dom';

import CategoriesMenu from '../../categoriesMenu/CategoriesMenu';
import ProductFilters from '../../productFilters/ProductFilters';
import ProductsList from '../../productsList/ProductsList';
import SortMenu from '../../sortMenu/SortMenu';

import './shopPage.scss';

const ShopPage = () => {
    const { category } = useParams();

    return (
        <section className='shop'>
            <div className='shop__categories'>
                <h2 className='title shop__title'>{category}</h2>
                <CategoriesMenu />
            </div>
            <div className='shop__content'>
                <div className='shop__options'>
                    <SortMenu />

                    <div className='shop__filters'>
                        <div className='title title_small'>FIlter products:</div>
                        <ProductFilters />
                    </div>
                </div>

                <ProductsList category={category} />
            </div>
        </section>
    );
};

export default ShopPage;
