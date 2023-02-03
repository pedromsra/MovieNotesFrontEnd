import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content"
    ;
    
    > main {
        grid-area: content;
        overflow-y: hidden;

        width: 100%;

        display: grid;
        grid-template-rows: 4.2rem auto;
        grid-template-areas:
        "head"
        "notes"
        ;
        place-content: center;
        gap: 4rem;

        padding: 5.3rem 2rem;
    }

    @media (max-width: 700px) {
        grid-template-rows: 20rem auto;
    }
`;

export const Head = styled.div`
    grid-area: head;
    max-width: 113.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        width: fit-content;
        height: 5.6rem;
        padding: 1.35rem 3.2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8rem;

        border: none;
        border-radius: 1rem;

        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_300};

        > svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        }
    }
`;

export const Notes = styled.div `
    > div {
        padding: 3.2rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};
        border-radius: 1.6rem;
        cursor: pointer;
    }
    grid-area: notes;

    overflow-y: scroll;
    scrollbar-gutter: stable;
    max-width: 113.7rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    >h1 {
        position: absolute;
    }

    p {
        height: 4.0rem;
        overflow: hidden;
        margin: 2rem 0;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.GRAY_100}
    }
`;