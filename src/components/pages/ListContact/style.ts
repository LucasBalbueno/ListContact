import styled from 'styled-components';

export const Background = styled.main`
    width: 100%;
    height: 100vh;
    background-color: rgb(30, 30, 30);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        font-size: 35px;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 2rem;
        color: rgb(42, 109, 73);
    }

    @media  (max-width: 1200px) {
        h1 {
            text-align: center;
        }
    }
`;

export const Container = styled.div`
    background-color: rgb(254, 254, 227);
    width: 70%;
    height: 70vh;
    border-radius: 20px;
    overflow-y: scroll;
    border: 2px solid white;

    @media  (max-width: 1200px) {
        width: 95%;
    }
`;