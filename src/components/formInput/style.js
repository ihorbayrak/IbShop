import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input`
    padding: 17px 20px;

    margin: 15px 0;

    font-weight: 400;
    font-size: 15px;
    color: #676767;

    width: 100%;
    background: ${({theme}) => theme.colors.backColor};
    border-radius: 10px;
    border: none;

    &:focus {
        outline: none;
    }
`;

export const StyledLabel = styled.label`
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: 500;
    line-height: 22px;
    color: #676767;

`;
