import chai, {expect} from 'chai';
import '../src/array';

chai.should();

describe('Array', function() {
    it('flattens', function() {
        let result = for {
            a <= [1,2,3];
            [a, a, a];
        }
        result.should.equal([1, 1, 1, 2, 2, 2, 3, 3, 3]);
    });
});
