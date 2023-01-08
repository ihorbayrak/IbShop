import { InfoBlockContainer, InfoBlockTitle, InfoBlockText, InfoBlockNumber } from './style.js';

const InfoBlock = ({ info, index }) => {
    const { title, text, icon } = info;

    return (
        <InfoBlockContainer>
            <InfoBlockNumber>{index < 10 ? `0${index}` : `${index}`}</InfoBlockNumber>

            <InfoBlockTitle>
                {icon ? <span>{icon}</span> : null}
                {title}
            </InfoBlockTitle>

            <InfoBlockText>{text}</InfoBlockText>
        </InfoBlockContainer>
    );
};

export default InfoBlock;
