import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Root from '../Root.jsx';

describe('Root', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Root />);
    it('renders correctly', () => {
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});