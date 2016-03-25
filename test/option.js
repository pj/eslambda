// @flow
import chai, {expect} from 'chai';
import {None, Some} from '../src/option';

chai.should();

describe('Option', function() {
    it('pass None through', function() {
        let x = for {
            a <= None;
            new Some("should not see me!");
        };

        expect(x).to.be.equal(None);
    });
});
