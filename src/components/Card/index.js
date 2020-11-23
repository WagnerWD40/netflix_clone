import { useState, useContext, createContext } from 'react';

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Meta,
    Image,
    Item,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Entities,
} from './styles/card';

export const FeatureContext = createContext({});

function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    const featureContextItems = {
        showFeature,
        setShowFeature,
        itemFeature,
        setItemFeature,
    }

    return (
        <FeatureContext.Provider value={featureContextItems}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = function ({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Card.Title = function ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Card.SubTitle = function ({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Card.Text = function ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Card.Meta = function ({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {


    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    function handleClose() {
        setShowFeature(false);
    }

    return showFeature && ( 
                <Feature 
                    {...restProps}
                    src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
                    <Content>
                        <FeatureTitle>{itemFeature.title}</FeatureTitle>
                        <FeatureText>{itemFeature.description}</FeatureText>
                        <FeatureClose onClick={handleClose}>
                            <img src="/images/icons/close.png" alt="Close" />
                        </FeatureClose>
                    
                        <Group margin="30px 0" flexDirection="row" alignItems="center">
                            <Maturity rating={itemFeature.maturity}>
                                {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                            </Maturity>
                            <FeatureText fontWeight="bold">
                                {itemFeature.genre}
                            </FeatureText>
                        </Group>
                        {children}
                    </Content>
                </Feature>
            );
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    function handleClick() {
        setItemFeature(item);
        setShowFeature(true);
    }

    return <Item 
                onClick={handleClick}
                {...restProps}>{children}</Item>;
}

Card.Image = function ({ ...restProps }) {
    return <Image {...restProps} />
}

Card.Entities = function ({ ...restProps }) {
    return <Entities {...restProps} ></Entities>
}

export default Card;