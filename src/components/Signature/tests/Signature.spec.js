import React from 'react';
import renderer from 'react-test-renderer';

import Signature from '../index';

describe('Signature', () => {
    it('Signature renders correctly', () => {
        const renderedSignature = renderer.create(<Signature name="IHAR KARPUK"/>).toJSON();
        expect(renderedSignature).toMatchSnapshot();
    });
});