import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 11.6rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-right: clamp(1rem, 1rem + 4vw, 12.3rem);
    padding-left: clamp(1rem, 1rem + 4vw, 12.3rem);
    gap: 1.6rem;

    grid-area: header;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

    a {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 700;
    }

    > div:nth-child(2) {
        width: clamp(12rem, -1rem + 35vw, 63rem);
    }

    @media (max-width: 700px) {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 16rem;
        height: 20rem;
        div:nth-child(2) {
            position: absolute;
            top: 11rem;
            width: clamp(40rem, 22rem + 40vw, 63rem);
        }
    }

    @media (max-width: 600px) {
        gap: 8rem;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .9rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > a {
            font-size: 1.4rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
        
        > button {
            background: none;
            border: none;
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    > a {
        height: 6.4rem;
            img {
            width: 6.4rem;
            height: 6.4rem;
            border: none;
            border-radius: 50%;
        }
    }

    @media (max-width: 700px) {
    }
`;