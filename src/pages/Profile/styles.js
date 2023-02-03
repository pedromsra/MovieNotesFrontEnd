import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 14.4rem 1rem auto;
    grid-template-areas:
        "header"
        "image"
        "form"
    ;
    place-items: center;
    align-items: flex-start;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 14.4rem;
    background: ${({theme}) => theme.COLORS.BACKGROUND_300};

    padding: 6.4rem 14.4rem;
    
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 700px) {
        padding: 6.4rem 2rem;
    }

`;

export const UserImage = styled.div`
    grid-area: image;
    position: relative;
    top: -10.2rem;
    width: 18.6rem;
    height: 18.6rem;
    margin: auto;
    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        border: none;
        border-radius: 50%;
        width: 4.8rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${({theme}) => theme.COLORS.PINK};

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_300};
            width: 2.2rem;
            height: 2.2rem;
        }
    }
`;

export const Form = styled.form`
    grid-area: form;
    max-width: 34rem;

    padding: 0 2rem;

    > div:nth-child(2) {
        margin-bottom: 1.8rem;
    }
`;