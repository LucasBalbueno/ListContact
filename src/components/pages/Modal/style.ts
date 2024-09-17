import styled from 'styled-components';

export const Background = styled.div`
    position: absolute;
    z-index: 2;

    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.main`
    width: 40%;
    height: 95vh;
    background-color: rgb(30, 30, 30);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 30px;
        font-weight: bold;
        color: green;
    }
    
    form {
        width: 80%;

        div {
            display: flex;
            flex-direction: column;
            margin: 2rem;
        }

        label {
            font-size: 20px;
        }

        input {
            width: 100%;
            padding: .5rem;
            border-radius: 5px;

            &:focus {
                border: 5px solid green;
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.8);
                outline: none;
            }
        }

        .buttonsForms {
            flex-direction: row;
            justify-content: center;
            margin: 0;
        }

        button {
            border: none;
            padding: 1rem;
            font-size: 20px;
            font-weight: bold;
            border-radius: 5px;
            color: white;
            cursor: pointer;
        }

        .buttonClose {
            margin-right: 1rem;
            background-color: red;
        }

        .buttonSave {
            background-color: green;
        }
    }
`;