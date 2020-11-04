import { Footer } from '../components';

function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link hre="#">FAQ</Footer.Link>
                    <Footer.Link hre="#">Investor Relations</Footer.Link>
                    <Footer.Link hre="#">Ways to Watch</Footer.Link>
                    <Footer.Link hre="#">Corporate Information</Footer.Link>
                    <Footer.Link hre="#">Netflix Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link hre="#">Help Center</Footer.Link>
                    <Footer.Link hre="#">Jobs</Footer.Link>
                    <Footer.Link hre="#">Terms of Use</Footer.Link>
                    <Footer.Link hre="#">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link hre="#">Account</Footer.Link>
                    <Footer.Link hre="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link hre="#">Privacy</Footer.Link>
                    <Footer.Link hre="#">Speed Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link hre="#">Media Center</Footer.Link>
                    <Footer.Link hre="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link hre="#">Cookie Preferences</Footer.Link>
                    <Footer.Link hre="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}

export default FooterContainer;