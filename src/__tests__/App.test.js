import React from 'react';
import { render } from 'react-testing-library';
import { mockDefault } from '../__testing/utils';
import App from '../App';
import 'jest-styled-components';

jest.mock('react-redux');
jest.mock('../player/context/PlayerContainer', () => mockDefault(() => 'ContextPlayerContainer'));
jest.mock('../player/context/NameContainer', () => mockDefault(() => 'ContextNameContainer'));
jest.mock('../player/context/SurnameContainer', () => mockDefault(() => 'ContextSurnameContainer'));
jest.mock('../player/redux/PlayerContainer', () => mockDefault(() => 'ReduxPlayerContainer'));
jest.mock('../player/redux/NameContainer', () => mockDefault(() => 'ReduxNameContainer'));
jest.mock('../player/redux/SurnameContainer', () => mockDefault(() => 'ReduxSurnameContainer'));

describe('App main component', () => {
    global.console = { log: () => null };
    it('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toMatchSnapshot();
    });
});