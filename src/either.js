class Either {
    constructor(value) {
        this.value = value;
    }

    get() {
        return this.value;
    }
}

export class Left extends Either {
    then(func) {
        return func(this.value);
    }
}

export class Right extends Either {
    then(func) {
        return this;
    }
}
