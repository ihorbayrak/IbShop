import { useSelector, useDispatch } from 'react-redux';
import { filterChanged } from '../../utils/reducers/filtersSlice/filtersSlice';

import './productFilters.scss';

const ProductFilters = () => {
    const { filters, activeFilter } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const renderFilters = (arr) => {
        return arr.map(({ label, filterName }) => {
            return (
                <li key={filterName}>
                    <button
                        className={
                            activeFilter === filterName
                                ? 'filters__item filters__item_active'
                                : 'filters__item'
                        }
                        onClick={() => dispatch(filterChanged(filterName))}
                    >
                        {label}
                    </button>
                </li>
            );
        });
    };

    const elements = renderFilters(filters);

    return (
        <div className='filters__container'>
            <ul className='filters__list'>{elements}</ul>
        </div>
    );
};

export default ProductFilters;
