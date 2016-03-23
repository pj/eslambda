import chai, {expect} from 'chai';
import {Left, Right} from '../src/either';

chai.should();

describe('Either', function() {
    it('passes values', function() {
        let x = for {
            a <= new Right(1);
            b <= new Left(2);
            new Left(3);
        }
        let z = x.get();
        expect(z).to.be.equal(1);
    });
});
