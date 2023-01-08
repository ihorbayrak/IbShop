import { useNavigate } from 'react-router-dom';

import InfoBlock from '../../infoBlock/InfoBlock';
import InfoBlocksList from '../../infoBlocksList/InfoBlocksList';
import InStock from '../../inStock/InStock';
import OurShop from '../../ourShop/OurShop';
import Slider from '../../slider/Slider';

import { AboutSection, ShippingSection, ShippingLinkContainer, ShippingSubtitle } from './style.js';
import { StyledButton } from '../../../styles/Buttons';
import { Title } from '../../../styles/Titles';

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
    const navigate = useNavigate();

    return (
        <>
            <OurShop />
            <InStock />

            <AboutSection>
                <Title fz='large' centered>
                    What people write about us
                </Title>

                <Slider />
            </AboutSection>

            <ShippingSection>
                <Title fz='large' centered>
                    Delivery with postpaid
                </Title>

                <ShippingSubtitle>Simple and easy</ShippingSubtitle>

                <InfoBlocksList>
                    {infoBlockData.map((info, index) => {
                        return <InfoBlock key={info.id} info={info} index={index + 1} />;
                    })}
                </InfoBlocksList>

                <ShippingLinkContainer>
                    <StyledButton
                        modifier='primary'
                        btnPadding='20px 40px'
                        onClick={() => navigate('/catalog')}
                    >
                        Go to catalog
                    </StyledButton>
                </ShippingLinkContainer>
            </ShippingSection>
        </>
    );
};

export default HomePage;
