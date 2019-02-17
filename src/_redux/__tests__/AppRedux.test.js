import React from 'react';
import AppRedux from '../AppRedux';
import { render } from 'react-testing-library';

describe('redux AppRedux', () => {
    it('renders without crashing with no children', () => {
        const { container } = render(<AppRedux />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing with children', () => {
        const { container } = render(<AppRedux><div /></AppRedux>);
        expect(container.firstChild).toMatchSnapshot();
    });
});