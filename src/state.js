// @flow
export default class State<S, A> {
    state_func: (x: S) => [S, A];

    constructor(state_func: (x: S) => [S, A]) {
        this.state_func = state_func;
    }

    then<S, B>(func: (x: A) => State<S, B>): State<S, B> {
        let self = this;
        let newStateFunc = function (initial_state: S) {
            let [thisState, thisValue] = self.state_func(initial_state);
            let nextStateM = func(thisValue);
            return nextStateM.state_func(thisState);
        }
        return new State(newStateFunc);
    }

    run(initial_state: S): [S, A] {
        return this.state_func(initial_state);
    }

}

export function get<S>(): State<S, S> {
    return new State((state) => [state, state]);
}

export function put<S>(putter: (x: S) => S): State<S, null> {
    return new State((state) => [putter(state), null]);
}

export function value<S, A>(valuer: () => A): State<S, A> {
    return new State((state) => [state, valuer()]);
}
