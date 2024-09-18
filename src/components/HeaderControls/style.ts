import styled from "styled-components";

export const Container = styled.header`
    border-radius: 20px 20px 0 0;
    height: 13%;
    background-color: green;
    padding: .5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid white;

    button {
        border: 2px solid white;
        font-size: 17px;
        border-radius: 5px;
        padding: 1rem;
        font-weight: bold;
        cursor: pointer;
    }
    
    .buttonAdd {
        margin-right: 2rem;
        background-color: black;
        color: white;
    }
    
    .buttonReset {
        background-color: #FFD700;
        color: black;
    }

    @media  (max-width: 900px) {
        height: 20%;
        padding: 0;

        div {
            display: flex;
            gap: 1rem;
        }

        .buttonAdd {
        margin-right: 0;
    }
    }
`;