import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_300};

    &:disabled {
        opacity: .5;
        cursor: default;

        &:hover {
            filter: brightness(1);
        }
    }

`;