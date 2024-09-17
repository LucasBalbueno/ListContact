import styled from 'styled-components';

export const Contact = styled.li`
    margin: 1rem;
    border-radius: 10px;
    background-color: rgb(30, 30, 30);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;

    h2 {
        font-size: 23px;
        font-weight: bold;
        margin-bottom: .5rem;
    }

    p {
        margin-bottom: .5rem;

        span {
            color: green;
            font-weight: bold;
        }
    }
`;