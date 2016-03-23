class Option {
}

export class Some extends Option {
    constructor(value) {
        super();
        this.value = value;
    }

    then(func) {
        return func(this.value);
    }

    getOrElse(value) {
        return this.value;
    }
}

export const None = new class None extends Option {
    then(func) {
        return this;
    }

    getOrElse(value) {
        return value;
    }
}
