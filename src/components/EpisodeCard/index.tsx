import React, { useEffect, useState } from 'react';

import { 
    Container,
    Card,
    Info,
    Images,
} from './styles';

interface IEpisodeInfo {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: [];
    url: string;
}

interface IProps {
    episodeInfo: IEpisodeInfo;
}


const EpisodeCard: React.FC<IProps> = ({ episodeInfo }) => {

    const [charactersInfo, setCharactersInfo] = useState<any>([]);

    const loadCharactersInfo = async () => {
        const promises = episodeInfo.characters.map(async character => {
            const response = await fetch(`${character}`);

            const characterData = await response.json();

            return characterData;
        });

        const characters = await Promise.all(promises);

        setCharactersInfo(characters);
    }

    useEffect(() => {
        loadCharactersInfo();
    }, [episodeInfo]);
    
    return (
        <Container>
            <Card>
                <Info>
                    <div className="name">
                        <p>{episodeInfo.name}</p>
                    </div>

                    <div className="air_date">
                        <span>Air date</span>
                        <p>{episodeInfo.air_date}</p>
                    </div>

                    <div className="episode">
                        <span>Episode</span>
                        <p>{episodeInfo.episode}</p>
                    </div>
                </Info>

                <Images>
                    <p>Characters</p>

                    <ul>
                        {charactersInfo.map((character: any) => (
                            <li key={character.id}>
                                <img src={character.image} alt="Character Image" title={character.name}/>
                            </li>
                        ))}
                    </ul>
                </Images>
                
            </Card>
        </Container>
    );
};

export default EpisodeCard;