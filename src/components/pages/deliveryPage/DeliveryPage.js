import InfoBlock from '../../infoBlock/InfoBlock';
import InfoBlocksList from '../../infoBlocksList/InfoBlocksList';
import ConsultationForm from '../../consultationForm/ConsultationForm';

import { FaTruck, FaCarSide } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';

import { Title } from '../../../styles/Titles';

const infoBlockData = [
    {
        id: 1,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
        icon: <FaTruck />,
    },
    {
        id: 2,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
        icon: <FaCarSide />,
    },
    {
        id: 3,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
        icon: <IoIosAirplane />,
    },
];

const DeliveryPage = () => {
    return (
        <section className='delivery'>
            <Title fz='large' centered>
                Terms of delivery and pickup
            </Title>
            <InfoBlocksList>
                {infoBlockData.map((info, index) => {
                    return <InfoBlock key={info.id} info={info} index={index + 1} />;
                })}
            </InfoBlocksList>
            <ConsultationForm />
        </section>
    );
};

export default DeliveryPage;
