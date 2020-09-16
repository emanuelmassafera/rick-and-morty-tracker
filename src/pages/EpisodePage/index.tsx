import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
    Container,
    Content,
} from './styles';


const EpisodePage: React.FC = () => {

    return (
        <Container>
            <Header />

            <Content>
                TESTEE
            </Content>

            <Footer />
        </Container>
    );
};

export default EpisodePage;