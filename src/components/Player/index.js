import { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

import {  
    Container,
    Button,
    Overlay,
    Inner,
    Close,
} from './styles/player';

export const PlayerContext = createContext();

function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>
                {children}
            </Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    function handleClick() {
        setShowPlayer(false);
    }

    return showPlayer && ReactDOM.createPortal(
        <Overlay onClick={handleClick} { ...restProps }>
            <Inner>
                
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    );
}

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    function handleClick() {
        setShowPlayer(showPlayer => !showPlayer);
    }

    return <Button { ...restProps } onClick={handleClick}>Play</Button>;
}

export default Player;