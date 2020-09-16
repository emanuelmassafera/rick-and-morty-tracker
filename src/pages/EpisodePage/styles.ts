import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;

    overflow-y: auto;
    scrollbar-width: none; /*firefox*/
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;

    max-width: 800px;

    @media (max-width: 500px) {
       padding: 0;  
   }
`;