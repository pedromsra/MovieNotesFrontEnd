import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 5.6rem;

    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    align-items: center;

    padding: 1.6rem;
    margin-bottom: .8rem;

    border: none;
    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    > input {
        max-width: 100%;
        height: 5.6rem;

        background: transparent;
        border: 0;

        color: ${({theme}) => theme.COLORS.GRAY_100};

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }
`;