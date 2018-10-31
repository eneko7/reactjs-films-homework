import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../index';

describe('Footer', () => {
    it('Footer renders correctly', () => {
        const renderedFooter = renderer.create(<Footer />).toJSON();
        expect(renderedFooter).toMatchSnapshot();
    });
});