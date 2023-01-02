import { useEffect, useMemo } from 'react';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    categoriesKeysSelector,
} from '../../utils/reducers/categoriesSlice/categoriesSlice';

import { setContent } from '../../utils/functions/functions';

import './categoriesMenu.scss';

const CategoriesMenu = () => {
    const { categoriesLoadingStatus } = useSelector((state) => state.categories);
    const categoriesNames = useSelector(categoriesKeysSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    let activeClassName = 'categories__item categories__item_active';

    const renderCategoryName = (arr) => {
        return arr.map((categoryName) => {
            return (
                <li key={categoryName} className='categories__item'>
                    <NavLink
                        to={`/shop/${categoryName}`}
                        className={({ isActive }) => (isActive ? activeClassName : null)}
                    >
                        {categoryName}
                    </NavLink>
                </li>
            );
        });
    };

    const elements = useMemo(() => {
        return setContent(categoriesLoadingStatus, () => renderCategoryName(categoriesNames));
    }, [categoriesLoadingStatus]);

    return (
        <aside className='categories'>
            <div className='categories__title'>Categories</div>

            <ul className='categories__menu'>{elements}</ul>
        </aside>
    );
};

export default CategoriesMenu;
