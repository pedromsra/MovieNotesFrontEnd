import styled from "styled-components";
import backgroundImg from "../../assets/background_sign.png"

export const Container = styled.div`
    display:flex;
    align-items: stretch;

    height: 100vh;
`;

export const Form = styled.form`
    width: 63.7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 22.9rem 13.6rem;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-weight: 700;
        font-size: 4.8rem;
        line-height: 6.3rem;
    }

    > h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin: 4.8rem 0;
    }

    > p {
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({theme}) => theme.COLORS.GRAY_050};
    }

    > button {
        margin-top: .8rem;
        margin-bottom: 4.2rem;
    }

    > a {
        width: 100%;
        text-align: center;
        line-height: 2.1rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.3;
`;