import React from 'react';
import FieldShow from '../FieldShow';
import { render } from 'react-testing-library';
import 'jest-styled-components';

describe('FieldShow component', () => {
    global.console = { log: () => null };

    it('renders without crashing', () => {
        const { container } = render(
            <FieldShow value="the value" label="the label" />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
