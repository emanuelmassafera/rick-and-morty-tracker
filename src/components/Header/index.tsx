import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <Container>
            <Link className="text-link" to={`/`}>
                <strong>Rick and Morty Tracker</strong>
            </Link>
        </Container>
    );
}

export default Header;