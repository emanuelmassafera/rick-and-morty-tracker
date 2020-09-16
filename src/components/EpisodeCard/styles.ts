import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
   display: flex;
   flex-direction: column;
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

export const Info = styled.div`
    text-align: center;
    width: 100%;
    padding: 32px 24px;

    > .name {
        > p {
            font-weight: bold;
            font-size: 30px;
            color: rgb(36, 40, 47);
        }
    }

    > .air_date {
        display: inline-block;
        text-align: left;
        margin-top: 32px;
        margin-right: 32px;

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

        @media (max-width: 500px) {
            display: block;
            text-align: center;
            margin-right: 0;
        }
    }

    > .episode {
        text-align: left;
        display: inline-block;
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

        @media (max-width: 500px) {
            display: block;
            text-align: center;
        }
    }

    @media (max-width: 900px) {
       width: 100%;
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 32px 24px;
    background: rgb(60, 62, 68);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    > p {
        font-weight: bold;
        font-size: 26px;
        color: #efefef;
        text-align: center;
        width: 100%
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        width: 100%;
        margin-top: 32px;


        > li {
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
                width: 90px;
                object-fit: cover;
                object-position: center;
                border-radius: 50%;
                flex-shrink: 0;

                &:hover {
                    border: 2px solid #7D65F6;
                }
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 500px) {
            width: 100vw;
            grid-template-columns: repeat(2, 1fr);

            > li {

                > img {
                    width: 80px;
                }  
            }
        }

        @media (max-width: 215px) {
            width: 100vw;
            grid-template-columns: repeat(1, 1fr);

            > li {

                > img {
                    width: 80px;
                }  
            }
        }
    }

    @media (max-width: 500px) {
        border-radius: 0;
    }

`;

