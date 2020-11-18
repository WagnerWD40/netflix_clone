import {
    Container,
    Base,
    Error,
    Title,
    Text,
    TextSmall,
    Link,
    Input,
    Submit,
} from './styles/form';

function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function ({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Form.Error = function ({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

Form.Title = function ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function ({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Form.Input = function ({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function ({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}


export default Form;