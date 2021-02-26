import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders correct h1', () => {
        const { getByText } = render(<App />);
        expect(getByText('React Starter')).not.toEqual(null);
    });
    it('renders correct h2', () => {
        const { getByText } = render(<App />);
        expect(getByText('Hello World')).not.toEqual(null);
    });
});
