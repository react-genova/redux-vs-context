import React from 'react';
import Subtitle from '../Subtitle';
import { render } from 'react-testing-library';
import 'jest-styled-components';

describe('Subtitle component', () => {
    global.console = { log: () => null };

    it('renders without crashing', () => {
        const { container } = render(
            <Subtitle subtitle="the subtitle" className="theclassname" />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
