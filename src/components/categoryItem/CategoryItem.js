import { Link } from 'react-router-dom';

import './categoryItem.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;

    return (
        <li className='category-item'>
            <Link to={route} className='category-item__link'>
                <img src={imageUrl} alt={title} />
                <p className='category-item__title'>{title}</p>
            </Link>
        </li>
    );
};

export default CategoryItem;
