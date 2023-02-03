import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 47.4rem;
    overflow-y: auto;

    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 1.6rem;
    margin-bottom: .8rem;
    
    resize: none;

    border: none;
    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    color: ${({theme}) => theme.COLORS.GRAY_100};

    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    @media (max-width: 700px) {
        height: 23rem;
    }
`;