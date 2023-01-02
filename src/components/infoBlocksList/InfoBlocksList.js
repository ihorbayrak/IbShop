import './infoBlocksList.scss';

const infoBlocksList = (props) => {
    return <ul className='info-block__list'>{props.children}</ul>;
};

export default infoBlocksList;
