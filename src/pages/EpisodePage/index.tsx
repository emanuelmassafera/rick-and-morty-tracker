import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import EpisodeCard from '../../components/EpisodeCard';
import Footer from '../../components/Footer';

import { useParams } from 'react-router-dom';

import { 
    Container,
    Content,
} from './styles';

interface IEpisodeInfo {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: [];
    url: string;
}

interface IParams {
    id: string;
}

const EpisodePage: React.FC = () => {

    const [episodeInfo, setEpisodeInfo] = useState<IEpisodeInfo>({
        id: 0,
        name: "",
        air_date: "",
        episode: "",
        characters: [],
        url: "",
    });

    const  { id }  = useParams<IParams>();
    
    const loadEpisodeInfo = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

        const episodeData = await response.json();

        setEpisodeInfo(episodeData);
    };

    useEffect(() => {
        loadEpisodeInfo();
    }, []);

    return (
        <Container>
            <Header />

            <Content>
                <EpisodeCard episodeInfo={episodeInfo} />
            </Content>

            <Footer />
        </Container>
    );
};

export default EpisodePage;