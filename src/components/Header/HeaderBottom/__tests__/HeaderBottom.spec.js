import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderBottom from '../HeaderBottom.jsx';

describe('HeaderBottom', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HeaderBottom />);
    it('renders correctly', () => {
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});