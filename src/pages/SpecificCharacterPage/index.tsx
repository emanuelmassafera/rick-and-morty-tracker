import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';

import { useParams } from 'react-router-dom';

import { 
    Container,
    Content,
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

interface IParams {
    id: string;
}

const SpecificCharacterPage: React.FC = () => {

    const [characterInfo, setCharacterInfo] = useState<ICharacterInfo>({
        id: 0,
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
        id: 0,
        name: "",
        url: "",
    });

    const  { id }  = useParams<IParams>();

    const loadEpisodeInfo = async () => {
        const response = await fetch(`${characterInfo.episode.reverse().pop()}`);

        const episodeData = await response.json();

        setEpisodeInfo(episodeData);
    }

    const loadCharacterInfo = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

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

export default SpecificCharacterPage;