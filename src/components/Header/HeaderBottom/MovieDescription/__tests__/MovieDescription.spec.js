import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDescription from '../index';

describe('MovieDescription', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieDescription filmName="THE JUNGLE BOOK"  filmDescr="Adventure, Drama, Family, Fantasy, |, 1h 46m" />);
    it('renders correctly', () => {
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});