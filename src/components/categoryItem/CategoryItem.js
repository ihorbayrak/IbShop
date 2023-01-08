import { CategoryItemContainer, StyledLink } from './style.js';

const CategoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;

    return (
        <CategoryItemContainer>
            <StyledLink to={route}>
                <img src={imageUrl} alt={title} />

                <p>{title}</p>
            </StyledLink>
        </CategoryItemContainer>
    );
};

export default CategoryItem;
