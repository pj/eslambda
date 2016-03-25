// @flow
class Option<T> {
}

export class Some<T> extends Option<T> {
    value: T;
    constructor(value: T) {
        super();
        this.value = value;
    }

    then<X>(func: (x: T) => Option<X>): Option<X> {
        return func(this.value);
    }

    getOrElse<X>(value: X): Option<T> {
        return this;
    }
}

// FIXME: Fix types up?
export const None = new class None extends Option<null> {
    then(func: (x: any) => Option<any>): Option<null> {
        return this;
    }

    getOrElse<X>(value: X): Option<X> {
        return new Option(value);
    }
}
