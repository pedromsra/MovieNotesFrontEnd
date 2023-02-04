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
    justify-items: center;

    > main {
        grid-area: content;
        overflow-y: hidden;

        padding: 4rem 2rem;
        width: 100%;
        max-width: 113rem;

        display: grid;
        grid-template-rows: auto;
        grid-template-areas:
        "back"
        "head"
        "profile"
        "notetag"
        "description"
        ;

        .back {
            width: 100%;
            grid-area: back;

            display: flex;
            gap: .8rem;
            align-items: center;

            margin-bottom: 2.4rem;

            cursor: pointer;

            &:hover{
                filter: brightness(.9)
            }
        }

        .notehead {
            width: 100%;
            grid-area: head;

            display: flex;
            flex-direction: row;
            gap: 1.9rem;
            align-items: center;

            margin-bottom: 2.4rem;
        }

        .notetag {
            width: 100%;
            grid-area: notetag;

            margin-bottom: 4rem;
        }

        .description {
            width: 100%;
            grid-area: description;

            text-align: justify;

            overflow-y: auto;
        }
    }

    @media (max-width: 700px) {
        grid-template-rows: 20rem auto;
    }
`;

export const Profile = styled.div`
    width: 100%;
    grid-area: profile;

    display: flex;
    gap: .8rem;
    align-items: center;

    margin-bottom: 4rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }

    svg {
        color: ${({theme}) => theme.COLORS.PINK}
    }
`;