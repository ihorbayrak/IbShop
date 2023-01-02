import './imageAttribute.scss';

const ImageAttribute = ({ attributeProps }) => {
    const { latest, popular, discount } = attributeProps;

    if (latest) {
        return <div className='image-attribute image-attribute_yellow'>Latest</div>;
    }

    if (popular) {
        return <div className='image-attribute image-attribute_purple'>Top sales</div>;
    }

    if (discount) {
        return <div className='image-attribute image-attribute_red'>-{discount}%</div>;
    }
};

export default ImageAttribute;
