import React from 'react';
import Title from '../Title';
import { render } from 'react-testing-library';
import 'jest-styled-components';

describe('Title component', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Title title="the title" className="theclassname" />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
