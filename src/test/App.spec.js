import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
    it('App renders correctly', () => {
        const renderedApp = renderer.create(<App />).toJSON();
        expect(renderedApp).toMatchSnapshot();
    });
});