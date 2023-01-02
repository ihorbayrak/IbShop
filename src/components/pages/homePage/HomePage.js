import { Link } from 'react-router-dom';

import InfoBlock from '../../infoBlock/InfoBlock';
import InfoBlocksList from '../../infoBlocksList/InfoBlocksList';
import InStock from '../../inStock/InStock';
import OurShop from '../../ourShop/OurShop';
import Slider from '../../slider/Slider';

import './homePage.scss';

const infoBlockData = [
    {
        id: 1,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
    },
    {
        id: 2,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
    },
    {
        id: 3,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
    },
    {
        id: 4,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
    },
];

const HomePage = () => {
    return (
        <>
            <OurShop />
            <InStock />

            <section className='about'>
                <h2 className='title title_center'>What people write about us</h2>
                <Slider />
            </section>

            <section className='shipping'>
                <h2 className='title title_center'>Delivery with postpaid</h2>
                <div className='shipping__subtitle'>Simple and easy</div>

                <InfoBlocksList>
                    {infoBlockData.map((info, index) => {
                        return <InfoBlock key={info.id} info={info} index={index + 1} />;
                    })}
                </InfoBlocksList>

                <div className='shipping__link'>
                    <Link to='/catalog' className='button shipping__button'>
                        Go to catalog
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
