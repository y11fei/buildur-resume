import styled from 'styled-components';

const Input = styled.input`
    background: transparent;
    border-radius: 5px;
    font-size: 15px;
    width: 35rem;
    height: 2rem;
    font-family: 'Verdana', sans-serif;
    border: 2px solid gray;
`;

const MiniInput = styled.input`
    background: transparent;
    border-radius: 5px;
    font-size: 15px;
    width: 25rem;
    height: 2rem;
    font-family: 'Verdana', sans-serif;
    border: 2px solid gray;
`;

const AddButton = styled.button`
    background-color: white;
    border: 2px solid #219ebc;
    color: #219ebc;
    font-family: 'Helvetica', sans-serif;
    text-transform: uppercase;
    width: 8rem;
    height: 2.5rem;
    border-radius: 5px;
    font-size: 15px;
    &:hover {
        border: 2.5px solid #457b9d;
        color: #457b9d;
        font-size: 18px;
    }
`;

const DeleteButton = styled.button`
    background-color: white;
    border: 2px solid #e63946;
    color: #e63946;
    font-family: 'Helvetica', sans-serif;
    text-transform: uppercase;
    width: 8rem;
    height: 2.5rem;
    border-radius: 5px;
    font-size: 15px;
    &:hover {
        border: 2.5px solid #d90429;
        color: #d90429;
        font-size: 18px;
    }
`;

const WideAddButton = styled.button`
    background-color: #3a86ff;
    color: white;
    font-family: 'Helvetica', sans-serif;
    text-transform: uppercase;
    width: 35rem;
    height: 2.5rem;
    border-radius: 5px;
    font-size: 15px;
    &:hover {
        background-color: #4361ee;
        font-size: 18px;
    }
`;
const WideDeleteButton = styled.button`
    background-color: #e63946;
    color: white;
    font-family: 'Helvetica', sans-serif;
    text-transform: uppercase;
    width: 35rem;
    height: 2.5rem;
    border-radius: 5px;
    font-size: 15px;
    &:hover {
        background-color: #d90429;
        font-size: 18px;
    }
`;

export {
    Input,
    MiniInput,
    AddButton,
    DeleteButton,
    WideAddButton,
    WideDeleteButton,
};
