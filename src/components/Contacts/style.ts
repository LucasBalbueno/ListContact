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

    button{
        border: none;
        font-size: 15px;
        border-radius: 5px;
        padding: .5rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }

    .buttonEdit {
        margin-right: .5rem;
        background-color: blue;
    }

    .buttonRemove {
        background-color: red;
    }

    @media  (max-width: 900px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        h2 {
            text-align: center;
            margin-bottom: 1rem;
    }
    }
`;