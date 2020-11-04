import { Accordion } from '../components';
import OptForm from '../components/OptForm';
import faqsData from '../fixtures/faqs.json';

function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item =>
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}
            <OptForm>
                <OptForm.Input placeholder="Email address" />
            </OptForm>
        </Accordion>
    );
}

export default FaqsContainer;