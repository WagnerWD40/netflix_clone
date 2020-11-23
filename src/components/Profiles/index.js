
import {
    Container,
    Title,
    List,
    Item,
    Picture,
    Name,
} from './styles/profiles';

function Profiles({ user, children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Profiles.List = function ({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

Profiles.User = function ({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
}

Profiles.Picture = function ({ avatar, loading, avatarPic, setAvatarPic, setLoading, ...restProps }) {
    return <Picture
                {...restProps}
                avatar={avatar}
                loading={loading}
                onAnimationEnd={() => avatar ? setAvatarPic(`/images/users/${avatar}.png`) : setLoading(true)}
                src={avatarPic} />;
}

Profiles.Name = function ({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}

export default Profiles;