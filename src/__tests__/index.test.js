import React from 'react';
import '../index';
import { render } from 'react-dom';
import App from '../App';
jest.mock('react-dom');

describe('main index', () => {
    it('uses ReactDOM to render our App component', () => {
        render.mockImplementation(() => null);
        expect(render).toHaveBeenCalledTimes(1);
        expect(render).toHaveBeenCalledWith(<App />, null);
        // DUNNO HOW TO TEST document.getElementById('root')
        // in order to be sure we call it with the correct 'root' paramenter
    })
});