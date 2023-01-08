import { useSelector, useDispatch } from 'react-redux';
import { filterChanged } from '../../redux/reducers/filtersSlice/filtersSlice';

import {FIltersContainer, FiltersList, FilterItem} from './style.js';

const ProductFilters = () => {
    const { filters, activeFilter } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const renderFilters = (arr) => {
        return arr.map(({ label, filterName }) => {
            return (
                <li key={filterName}>
                    <FilterItem
                        isActive={activeFilter === filterName}
                        onClick={() => dispatch(filterChanged(filterName))}
                    >
                        {label}
                    </FilterItem>
                </li>
            );
        });
    };

    const elements = renderFilters(filters);

    return (
        <FIltersContainer>
            <FiltersList>{elements}</FiltersList>
        </FIltersContainer>
    );
};

export default ProductFilters;
