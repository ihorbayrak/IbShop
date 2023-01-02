import './infoBlock.scss';

const InfoBlock = ({ info, index }) => {
    const { title, text, icon } = info;

    return (
        <li className='info-block'>
            <div className='info-block__number'>{index < 10 ? `0${index}` : `${index}`}</div>
            <div className='info-block__title'>
                {icon ? <span>{icon}</span> : null}
                {title}
            </div>
            <div className='info-block__text'>{text}</div>
        </li>
    );
};

export default InfoBlock;
