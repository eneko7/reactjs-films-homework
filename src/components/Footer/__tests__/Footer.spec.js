import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Footer from '../index';
import Signature from '../../Signature/index';

describe('Footer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Footer />);
    it('renders correctly', () => {
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('footer');
        expect(result.props.children).toEqual([
            <span className="footer_films">FILMS</span>,
            <span className="footer_copyright">Copyright © {(new Date()).getFullYear()} FILMS. <Signature name="IHAR KARPUK" /></span>
        ]);
    });
});