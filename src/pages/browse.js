import { useMemo } from 'react';

import BrowseContainer from '../containers/browse';

import useContent from '../hooks/useContent';
import selectionFilter from '../utils/selectionFilter'

function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = useMemo(() => selectionFilter({ series, films }), [series, films]);

    return (
        <BrowseContainer slides={slides}>
        </BrowseContainer>
    )
}

export default Browse;