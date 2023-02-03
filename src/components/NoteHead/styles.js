import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > h1 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: .6rem;

        > svg {
            color: ${({theme}) => theme.COLORS.PINK};
            height: 1.6rem;
        }
    }
`;