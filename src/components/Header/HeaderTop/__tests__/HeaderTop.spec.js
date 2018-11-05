import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import HeaderTop from '../index';

describe('HeaderTop', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HeaderTop />);
    it('renders correctly', () => {
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});