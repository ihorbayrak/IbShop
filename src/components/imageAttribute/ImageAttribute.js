import { Attribute } from './style.js';

const ImageAttribute = ({ attributeProps }) => {
    const { latest, popular, discount } = attributeProps;

    if (latest) {
        return (
            <Attribute bgColor='latestColor' customColor>
                Latest
            </Attribute>
        );
    }

    if (popular) {
        return <Attribute bgColor='topColor'>Top sales</Attribute>;
    }

    if (discount) {
        return <Attribute bgColor='subColor'>-{discount}%</Attribute>;
    }
};

export default ImageAttribute;
