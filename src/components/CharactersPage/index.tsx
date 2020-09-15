import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header';
import CharacterCard from '../CharacterCard';
import Footer from '../Footer';

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

    const api = axios.create();

    useEffect(() => {
        api.get<ICharacterInfo>(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random()*671)}`).then(response => {
            setCharacterInfo(response.data);
        });
    }, [])

    useEffect(() => {
        api.get<IEpisodeInfo>(`${characterInfo.episode.reverse().pop()}`).then(response => {
            setEpisodeInfo(response.data);
        });
    }, [characterInfo])

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