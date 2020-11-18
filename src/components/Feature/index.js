import {
    Container,
    Title,
    SubTitle
} from './styles/feature';

function Feature({ children, ...restProps }) {
    return <Container { ...restProps }>{children}</Container>;
}

Feature.Title = function ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Feature.SubTitle = function ({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

export default Feature;