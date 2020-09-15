import React from 'react';

// import Main from '../Main';

import { 
    Container,
    Header,
    Footer,
} from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header>
                <strong>Rick and Morty</strong>
            </Header>

            {/* <Main /> */}

            <Footer>
                <span>Made with ❤️ by <a href="https://www.linkedin.com/in/emanuelmassafera">Emanuel Massafera</a></span>
            </Footer>
        </Container>
    );
};

export default Layout;