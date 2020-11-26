import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
    Background,
    Container,
    Group,
    Search,
    SearchIcon,
    SearchInput,
    Feature,
    FeatureCallOut,
    Text,
    ButtonLink,
    PlayButton,
    Link,
    Logo,
    Profile,
    Dropdown,
    Picture,
} from './styles/header';

function Header({ bg = true, children, ...restProps }) {
return bg ? <Background {...restProps} data-testid="header-bg">{children}</Background> : children;
}

Header.Feature = function ({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>;
}

Header.FeatureCallOut = function ({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive} />
        </Search>
    )
}

Header.Frame = function ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Group = function ({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Text = function ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Dropdown = function ({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
}

Header.Picture = function ({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
}

Header.Profile = function ({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
}

Header.ButtonLink = function ({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Header.TextLink = function ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Header.PlayButton = function({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to} {...restProps}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}

export default Header;