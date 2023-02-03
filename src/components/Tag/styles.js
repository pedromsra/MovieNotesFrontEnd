import styled from "styled-components";

export const Container = styled.span`
    height: 24px;

    border-radius: 8px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_300};

    color: ${({theme}) => theme.COLORS.GRAY_000};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;

    padding: .5rem 1.6rem;
`;