import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormContainer = styled.form`
    padding: 50px 35px;

    min-height: 520px;
    max-width: 400px;

    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
`;

export const SuggestionLink = styled.div`
    margin-top: 15px;

    font-size: ${({theme}) => theme.fontSizes.small};
    a {
        color: ${({ theme }) => theme.colors.mainColor};
        &:hover {
            color: ${({ theme }) => theme.colors.mainColor};
            text-decoration: underline;
        }
    }
`;

export const Error = styled.p`
    color: ${({ theme }) => theme.colors.subColor};
`;
