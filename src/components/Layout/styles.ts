import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    padding: 30px 0;
    background-color: rgb(36, 40, 47);

    > strong {
        color: #DFDFDF;
        font-size: 32px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    padding: 20px 0;
    background-color: rgb(36, 40, 47);

    > span {
        color: #DFDFDF;

        > a {
            font-weight: bold;
            color: #DFDFDF;
        }
    }
`;