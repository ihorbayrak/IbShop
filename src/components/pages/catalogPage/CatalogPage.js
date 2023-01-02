import CategoryItem from '../../categoryItem/CategoryItem';

import './catalogPage.scss';

const categories = [
    {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        route: '/shop/hats',
    },
    {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: '/shop/jackets',
    },
    {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: '/shop/sneakers',
    },
    {
        id: 4,
        title: 'womans',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: '/shop/womans',
    },
    {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        route: '/shop/mens',
    },
];

const CatalogPage = () => {
    return (
        <section className='catalog'>
            <ul className='catalog__container'>
                {categories.map((category) => {
                    return <CategoryItem key={category.id} category={category} />;
                })}
            </ul>
        </section>
    );
};

export default CatalogPage;
