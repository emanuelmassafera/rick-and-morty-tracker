import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 800px;
   border: 1px solid rgb(36, 40, 47);
   border-radius: 8px;

   @media (max-width: 900px) {
       flex-direction: column;
       width: 400px;
   }

   @media (max-width: 500px) {
       flex-direction: column;
       width: 100vw;
       border: none;    
   }
`;

export const Image = styled.div`
    display: flex;
    width: 50%;

    > img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        flex-shrink: 0;
    }

    @media (max-width: 900px) {
       width: 100%;
   }

   @media (max-width: 500px) {
       flex-direction: column;
       width: 100vw;
       border: none;  

       > img {
           border-radius: 0;
       }  
   }
`;

interface Props {
    alive?: boolean;
}

export const Info = styled.div<Props>`
    width: 50%;
    padding: 32px 24px;

    > .name {
        > p {
            font-weight: bold;
            font-size: 30px;
            color: rgb(36, 40, 47);
        }
    }

    > .status {
        margin-top: 8px;

        > p {
            font-size: 18px;
            font-weight: bold;
            color: ${(props) => (props.alive ? 'rgb(85, 204, 68)' : 'rgb(214, 61, 46)')};
        }
    }

    > .species {
        margin-top: 32px;

        > span {
            color: rgba(36, 40, 47, 0.7);
            display: block; 
            font-size: 18px;
        }

        > p {
            font-size: 20px;
            color: rgb(36, 40, 47);
            font-weight: bold;
        }
    }

    > .location {
        margin-top: 18px;

        > span {
            color: rgba(36, 40, 47, 0.7);
            display: block; 
            font-size: 18px;
        }

        > p {
            font-size: 20px;
            color: rgb(36, 40, 47);
            font-weight: bold;
        }
    }

    > .first-seen {
        margin-top: 18px;

        > span {
            color: rgba(36, 40, 47, 0.7);
            display: block; 
            font-size: 18px;
        }

        > p {
            font-size: 20px;
            color: rgb(36, 40, 47);
            font-weight: bold;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    @media (max-width: 900px) {
       width: 100%;
    }
`;