// @flow
import chai, {expect} from 'chai';
import State, {get, put, value} from '../src/state';

chai.should();

describe('State', function() {
    it('get / put', function() {
        let x = for {
            _ <= put(state => {
                state["foo"] = "bar";
                return state;
            });
            state <= get();
            value(() => state["foo"]);
        }

        let result = x.run({});
        result[1].should.be.equal("bar");
    });

    it('stack example', function() {
        function push(x) {
            return new State(function (state) {
                let newState = state.slice(0);
                newState.push(x);
                return [newState, null];
            });
        }

        function pop() {
            return new State(function (state) {
                let newState = state.slice(0);
                let x = newState.pop();
                return [newState, x];
            });
        }

        let x = for {
            a <= pop();
            b <= pop();
            _ <= push(a);
            push(b);
        }

        let result = x.run([1, 2, 3]);
        expect(result[0]).to.be.deep.equal([1, 3, 2]);
        expect(result[1]).to.be.null;
    });
});
