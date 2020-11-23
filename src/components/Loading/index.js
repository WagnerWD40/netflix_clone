import React from 'react';

import {
    Spinner,
    LockBody,
    ReleaseBody,
    Picture,
} from './styles/loading';

function Loading({ src, ...restProps }) {
    return (
        <Spinner>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    );
}

Loading.ReleaseBody = function () {
    return <ReleaseBody />
}

export default Loading;