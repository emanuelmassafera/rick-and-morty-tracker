import React from 'react';

import { 
    Container,
    Card,
    Image,
    Info,
} from './styles';

interface ICharacterInfo {
    id: number;
    name: string;
    status: string;
    species: string;
    location: {
        name: string;
    };
    image: string;
    episode: [];
    url: string;
}

interface IEpisodeInfo {
    id: number;
    name: string;
    url: string;
}

interface Props {
    characterInfo: ICharacterInfo;
    episodeInfo: IEpisodeInfo;
}

const CharacterCard: React.FC<Props> = ( { characterInfo, episodeInfo }) => {
    
    return (
        <Container>
            <Card>
                <Image>
                    <img src={characterInfo.image} alt="Imagem"/>
                </Image>

                <Info  alive={characterInfo.status === 'Alive'}>
                    <div className="name">
                        <p>
                            {characterInfo.name}
                        </p>
                    </div>

                    <div className="status">
                        <p>
                            { characterInfo.status}
                        </p>
                    </div>

                    <div className="species">
                        <span>Specie</span>
                        <p>
                            { characterInfo.species }
                        </p>
                    </div>

                    <div className="location">
                        <span>Last known location</span>
                        <p>
                            { characterInfo.location.name }
                        </p>
                    </div>

                    <div className="first-seen">
                        <span>First seen in</span>
                        <p>
                            { episodeInfo.name }
                        </p>
                    </div>
                </Info>
            </Card>
        </Container>
    );
};

export default CharacterCard;