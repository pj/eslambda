// bind: m a -> ((a -> m b) -> m b)
export default class State { // [S, A]
    constructor(state_func) { // state_func: S -> (S, A)
        this.state_func = state_func;
    }

    then(func) { // func: A -> State[S, B]: State[S, B]
        let self = this;
        let newStateFunc = function (initial_state) { // S -> (S, B)
            let [thisState, thisValue] = self.state_func(initial_state); // S -> (S, A)
            let nextStateM = func(thisValue); // State[S, B]
            return nextStateM.state_func(thisState);
        }
        return new State(newStateFunc);
    }

    run(initial_state) { // S -> (S, A)
        return this.state_func(initial_state);
    }

    static get() { // : State[S, S]
        return new State((state) => [state, state]);
    }

    static put(putter) { //
        return new State((state) => [putter(state), null]);
    }

    static value(valuer) { //
        return new State((state) => [state, valuer()]);
    }
}
