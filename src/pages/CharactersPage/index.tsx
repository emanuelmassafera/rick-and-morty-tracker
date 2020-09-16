import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';

import { 
    Container,
    Content,
} from './styles';


interface ICharacterInfo {
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
    name: string;
    url: string;
}

const CharactersPage: React.FC = () => {

    const [characterInfo, setCharacterInfo] = useState<ICharacterInfo>({
        name: "",
        status: "",
        species: "",
        location: {
            name:""
        },
        image: "",
        episode: [],
        url: ""
    });

    const [episodeInfo, setEpisodeInfo] = useState<IEpisodeInfo>({
        name: "",
        url: "",
    });

    const loadEpisodeInfo = async () => {
        const response = await fetch(`${characterInfo.episode.reverse().pop()}`);

        const episodeData = await response.json();

        setEpisodeInfo(episodeData);
    }

    const loadCharacterInfo = async () => {
        const randomCharacterNumber = Math.floor(Math.random()*671);

        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacterNumber}`);

        const characterData = await response.json();

        setCharacterInfo(characterData);
    }

    useEffect(() => {
        loadCharacterInfo();
    }, []);

    useEffect(() => {
        loadEpisodeInfo();
    }, [characterInfo]);

    return (
        <Container>
            <Header />

            <Content>
                <CharacterCard characterInfo={characterInfo} episodeInfo={episodeInfo}/>
            </Content>

            <Footer />
        </Container>
    );
};

export default CharactersPage;