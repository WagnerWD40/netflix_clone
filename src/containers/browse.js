import { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';

import SelectProfileContainer from './profiles';
import { Header, Loading, Card, Player } from '../components';
import FooterContainer from './footer';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import * as CATEGORIES from '../constants/categories';

function BrowseContainer({ slides }) {
    const { firebase } = useContext(FirebaseContext);

    const [category, setCategory] = useState(CATEGORIES.SERIES);
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(
            slideRows,
            {
                keys: [
                    'data.description', 'data.title', 'data.genre'
                ], 
            });

        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }

    }, [searchTerm]);

    const user = firebase.auth().currentUser || {};

    function handleSignOut() {
        firebase.auth().signOut();
    }

    return profile.displayName ? ( 
            <> 
                {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody /> }
                <Header src="joker1" dontShowOnSmallViewPort>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
                            <Header.TextLink
                                active={category === CATEGORIES.SERIES}
                                onClick={() => setCategory(CATEGORIES.SERIES)}>Series</Header.TextLink>
                            <Header.TextLink
                                active={category === CATEGORIES.FILMS}
                                onClick={() => setCategory(CATEGORIES.FILMS)}>Films</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm} />
                            <Header.Profile>
                                <Header.Picture src={user.photoURL} />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL} />
                                        <Header.TextLink>{user.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink
                                            onClick={handleSignOut}>
                                            Sign out
                                        </Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>Whatch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                            futile attempt to feel like he's part of the world around him.
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>

                <Card.Group>
                    {slideRows.map(slideItem => 
                        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map(cardItem => 
                                    <Card.Item
                                        key={cardItem.docId}
                                        item={cardItem}>
                                        <Card.Image 
                                            src={`/images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`} />

                                        <Card.Meta>
                                            <Card.SubTitle>{cardItem.title}</Card.SubTitle>
                                            <Card.Text>{cardItem.description}</Card.Text>
                                        </Card.Meta>

                                    </Card.Item>

                                )}
                            </Card.Entities>
                            <Card.Feature
                                category={category}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video src="/videos/bunny.mp4" />
                                </Player>
                            </Card.Feature>
                        </Card>
                    )}
                </Card.Group>
                <FooterContainer />
            </>
            ) : (     
            <SelectProfileContainer
                user={user}
                setProfile={setProfile} />
            );
}

export default BrowseContainer;