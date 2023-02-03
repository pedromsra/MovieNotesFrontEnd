import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content"
    ;

    main {
        padding: 4rem 2rem;
        width: 100%;
        grid-area: content;

        overflow-y: auto;
        scrollbar-gutter: stable;

        display: grid;
        grid-template-rows: auto;
        grid-template-areas:
        "head"
        "form"
        "text"
        "footer"
        "buttons";
        place-content: center;
    }

    p {
        grid-area: text;
        margin-bottom: 2.4rem;
        font-size: 2rem;
        line-height: 2.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_200}
    }

    @media (max-width: 700px) {
        grid-template-rows: 20rem auto;
    }
`;

export const Head = styled.div`
    width: 100rem;
    height: 50rem;
    grid-area: head;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2.4rem;

    margin-bottom: 4rem;

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        &:hover {
            filter: brightness(.9);
        }
    }

    > h1 {
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
    }

    @media (max-width: 1100px) {
        width: 60rem;
        height: 34rem;
    }
    @media (max-width: 700px) {
        width: 45rem;
        height: 34rem;
    }
`;

export const Form = styled.form`
    width: 100rem;
    grid-area: form;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-bottom: 4rem;

    > div {
        display: flex;
        flex-direction: row;
        gap: 4rem;
    }

    @media (max-width: 1100px) {
        width: 60rem;
        > div {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    }
    @media (max-width: 700px) {
        width: 45rem;
        > div {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    }
`;

export const Footer = styled.div`
    width: 100rem;
    padding: 1.6rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_600};

    grid-area: footer;

    border: none;
    border-radius: 1rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1.6rem;


    margin-bottom: 4rem;
    @media (max-width: 1100px) {
        width: 60rem;
    }
    @media (max-width: 700px) {
        width: 45rem;
    }
`;

export const RouteButtons = styled.div`
    grid-area: buttons;

    display: flex;
    flex-direction: row;
    gap: 4rem;

    > button:first-child {
        color: ${({theme}) => theme.COLORS.PINK};
        background: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
    @media (max-width: 1100px) {
        width: 60rem;
        display: flex;
        flex-direction: column-reverse;
        gap: .8rem;
    }

    @media (max-width: 700px) {
        width: 45rem;
        display: flex;
        flex-direction: column-reverse;
        gap: .8rem;
    }
`;