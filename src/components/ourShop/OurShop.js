import { useNavigate } from 'react-router-dom';

import { AiOutlineCar } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { MdProductionQuantityLimits, MdOutlineHighQuality } from 'react-icons/md';

import {
    OurShopSection,
    OurShopInfo,
    OurShopDescr,
    OurShopQualities,
    OurShopBlock,
    OurShopImg,
} from './style.js';
import { StyledButton } from '../../styles/Buttons.js';
import { Title } from '../../styles/Titles';

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

const OurShop = () => {
    const navigate = useNavigate();

    return (
        <OurShopSection>
            <OurShopInfo>
                <Title as='h1' fz='large'>
                    our store offers the best quality
                </Title>

                <OurShopDescr>
                    In stock with delivery in 2 hours and payment upon receipt
                </OurShopDescr>

                <OurShopQualities>
                    {data.map(({ id, icon, title, text }) => {
                        return (
                            <OurShopBlock key={id}>
                                <div className='icon'>{icon}</div>
                                <div className='content'>
                                    <div className='head'>{title}</div>
                                    <div className='body'>{text}</div>
                                </div>
                            </OurShopBlock>
                        );
                    })}
                </OurShopQualities>

                <StyledButton
                    as='a'
                    onClick={() => navigate('/catalog')}
                    modifier='primary'
                    btnMargin='50px auto'
                >
                    Go to catalog
                </StyledButton>
            </OurShopInfo>

            <OurShopImg>
                <img src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt='Girl with hat' />
            </OurShopImg>
        </OurShopSection>
    );
};

export default OurShop;
