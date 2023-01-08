import { useEffect, useMemo } from 'react';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    categoriesKeysSelector,
} from '../../redux/reducers/categoriesSlice/categoriesSlice';

import { setContent } from '../../utils/functions/functions';

import {
    CategoriesContainer,
    CategoriesTitle,
    CategoriesList,
    CategoriesItem,
    StyledNavLink,
} from './style';

const CategoriesMenu = () => {
    const { categoriesLoadingStatus } = useSelector((state) => state.categories);
    const categoriesNames = useSelector(categoriesKeysSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const renderCategoryName = (arr) => {
        return arr.map((categoryName) => {
            return (
                <CategoriesItem key={categoryName}>
                    <StyledNavLink to={`/shop/${categoryName}`}>{categoryName}</StyledNavLink>
                </CategoriesItem>
            );
        });
    };

    const elements = useMemo(() => {
        return setContent(categoriesLoadingStatus, () => renderCategoryName(categoriesNames));
    }, [categoriesLoadingStatus]);

    return (
        <CategoriesContainer>
            <CategoriesTitle>Categories</CategoriesTitle>

            <CategoriesList>{elements}</CategoriesList>
        </CategoriesContainer>
    );
};

export default CategoriesMenu;
