import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
    it('renders the <Profiles /> with populated data', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}} data-testid="profile-picture">

                        <Profiles.Name>Karl Hadwen</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        );

        expect(getByText("Who's watching?")).toBeTruthy();
        expect(getByText('Karl Hadwen')).toBeTruthy();
        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
