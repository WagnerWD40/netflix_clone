import { useState } from 'react';

import { Header } from '../components';
import { Profiles } from '../components';

import * as ROUTES from '../constants/routes';

function SelectProfileContainer({ user, setProfile }) {
    const [avatarPic, setAvatarPic] = useState('/images/misc/loading.svg');
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    })}>
                        <Profiles.Picture
                            avatar={user.photoURL}
                            avatarPic={avatarPic}
                            setAvatarPic={setAvatarPic}
                            loading={loading}
                            setLoading={setLoading} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
}

export default SelectProfileContainer;