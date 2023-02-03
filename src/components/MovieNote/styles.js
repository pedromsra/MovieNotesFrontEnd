import styled from "styled-components";

export const Container = styled.div`
    padding: 3.2rem;
    background: ${({theme}) => theme.COLORS.BACKGROUND_400};
    border-radius: 1.6rem;

    > h1 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: .8rem;
    }

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: .6rem;

        > svg {
            color: ${({theme}) => theme.COLORS.PINK};
            margin-bottom: 2rem;
        }
    }

    > p {
        height: 4.0rem;
        overflow: hidden;
        margin-bottom: 2rem;
        font-family: 'Roboto', sans-serif;
    }

    > footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: .8rem;
    }
`;