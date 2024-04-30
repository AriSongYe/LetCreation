const { render, waitFor } = require('@testing-library/react');
const axios = require('axios');
const Main = require('../Main').default;

jest.mock('axios');

describe('Main component', () => {
    test('renders with data', async () => {
    
    const data = [
    { id: 0, title: '', content: '' },    
    { id: 1, title: '', content: 'Content 1' },
    { id: 2, title: 'Title 2', content: '' },
    { id: 3, title: 'Title 3', content: 'Content 3' },
    { id: 9007199254740991, title: 'iD max value Title 4', content: 'Content 4' },
    { id: -9007199254740991, title: 'iD max value Title 5', content: 'Content 4' },    
    ];
    axios.get.mockResolvedValueOnce({ data });
    const { getByText } = render(<Main />);
    await waitFor(() => {
    data.forEach(({ title, content }) => {
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(content)).toBeInTheDocument();
    });
    });
});

    test('renders with skeletons when no data', async () => {
    const { getByTestId } = render(<Main />);

    await waitFor(() => {
        expect(getByTestId('skeleton-container')).toBeInTheDocument();
    });
});
});
