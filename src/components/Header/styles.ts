import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    padding: 20px 0;
    background-color: rgb(36, 40, 47);

    > a {
        > strong {
            color: #DFDFDF;
            font-size: 32px;
        }
    }
`;