import React from 'react';

import ConsultationForm from '../../consultationForm/ConsultationForm';
import InfoBlock from '../../infoBlock/InfoBlock';
import InfoBlocksList from '../../infoBlocksList/InfoBlocksList';

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const infoBlockData = [
    {
        id: 1,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
        icon: <GoLocation />,
    },
    {
        id: 2,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
        icon: <AiOutlinePhone />,
    },
    {
        id: 3,
        title: 'Order via website or by phone',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis sit dolorum hic blanditiis, dolores quas unde officiis, incidunt quaerat dolore atque! Molestiae quam autem saepe ut? Nostrum, odio delectus?',
        icon: <AiOutlineMail />,
    },
];

const ContactsPage = () => {
    return (
        <section className='contacts'>
            <h2 className='title title_center'>Our contacts</h2>
            <InfoBlocksList>
                {infoBlockData.map((info, index) => {
                    return <InfoBlock key={info.id} info={info} index={index + 1} />;
                })}
            </InfoBlocksList>
            <ConsultationForm />
        </section>
    );
};

export default ContactsPage;
