import { Link } from 'react-router-dom';

import { AiOutlineCar } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { MdProductionQuantityLimits, MdOutlineHighQuality } from 'react-icons/md';

import './ourShop.scss';

const OurShop = () => {
    const data = [
        {
            id: 1,
            icon: <AiOutlineCar />,
            title: 'Pickup and shipments',
            text: 'Having a company store, we provide the opportunity to carry out self-delivery.',
        },
        {
            id: 2,
            icon: <BiCoinStack />,
            title: 'Best prices',
            text: 'We are a direct importer and manufacturer.',
        },
        {
            id: 3,
            icon: <MdProductionQuantityLimits />,
            title: 'Original products',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nihil nam quaerat ducimus dignissimos error sequi et exercitationem voluptatem soluta ad magni rem modi provident velit totam? Esse, voluptas ut!',
        },
        {
            id: 4,
            icon: <MdOutlineHighQuality />,
            title: 'High quality',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nihil nam quaerat ducimus dignissimos error sequi et exercitationem voluptatem soluta ad magni rem modi provident velit totam? Esse, voluptas ut!',
        },
    ];

    return (
        <section className='our-shop'>
            <div className='our-shop__info'>
                <h1 className='title title_big our-shop__title'>
                    our store offers the best quality
                </h1>
                <div className='our-shop__descr'>
                    In stock with delivery in 2 hours and payment upon receipt
                </div>

                <div className='our-shop__qualities'>
                    {data.map(({ id, icon, title, text }) => {
                        return (
                            <div key={id} className='our-shop__block'>
                                <div className='our-shop__block-icon'>{icon}</div>
                                <div className='our-shop__block-content'>
                                    <div className='our-shop__block-head'>{title}</div>
                                    <div className='our-shop__block-body'>{text}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Link to='/catalog' className='button our-shop__button'>
                    Go to catalog
                </Link>
            </div>

            <div className='our-shop__img'>
                <img src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt='Girl with hat' />
            </div>
        </section>
    );
};

export default OurShop;
