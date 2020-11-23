import styled, { keyframes } from 'styled-components/macro';

const rotate = keyframes`
    10% {
        opacity: 1;
    }

    90% {
        opacity: 0;
    }
    100% {
        opacity: 0;
        transform: rotate(720deg);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

export const User = styled.div`

`;

export const Picture = styled.img`
    opacity: ${({ loading }) => loading ? 0 : 1};
    width: ${({ avatar }) => avatar ? '160px' : '100px'};
    height: auto;
    padding: ${({ loading }) => loading ? '60px' : '8px'};
    animation: ${rotate} 1.6s linear ${({ loading }) => loading ? 'infinite' : ''};
    border: 3px solid transparent;
    cursor: pointer;
`;

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    
    &:not(:last-of-type)   {
        margin-right: 30px;
    }

    &:hover > ${Picture} {
        border: 3px solid white;
    }

    &:hover > ${Name} {
        font-weight: bold;
        color: white;
    }


`;



