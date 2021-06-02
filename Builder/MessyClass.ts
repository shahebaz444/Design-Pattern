let arr = ['S', 'M', 'L', 'XL', 'XXL'];

export class MessyClass {
  private a; //required field
  private b; //required field
  private c;
  private d;
  private e;

  constructor(private builder: Builder) {
    this.a = builder.a;
    this.b = builder.b;
    this.c = builder.c;
    this.d = builder.d;
    this.e = builder.e;
  }

  getA() {
    return this.a;
  }

  getD() {
    return this.d;
  }

  getC() {
    return this.c;
  }

  getE() {
    return this.e;
  }
}

export class Builder {
  a; //required field
  b; //required field
  c;
  d;
  e;

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  addC(c) {
    this.c = c;
    return this;
  }

  addD(d) {
    this.d = d;
    return this;
  }

  addE(e) {
    this.e = e;
    return this;
  }
}

export class Build extends Builder {
  addC(c: number) {
    this.c = c + 1;
    return this;
  }

  addD(d: number) {
    this.d = d + 1;
    return this;
  }
}

export class StringBuilder extends Builder {
  addC(c: number) {
    if (c >= arr.length) this.c = 'NaN';
    else this.c = arr[c];
    return this;
  }

  addD(d: number) {
    if (d >= arr.length) this.d = 'NaN';
    else this.d = arr[d];
    return this;
  }
}

const messy = new MessyClass(new Builder(1, 2).addC(0).addD(9));
const messi = new MessyClass(
  new Build(1, 2)
    .addC(2)
    .addD(3)
    .addE(5)
);

export class Storage {
  private c = 'X';
  private d = 'Y';
  private e = 'Z';

  getCDE() {
    return [this.c, this.d, this.e];
  }
}

export class Foreign extends Builder {
  addAll() {
    let storage = new Storage();
    let arr = storage.getCDE();
    this.c = arr[0];
    this.d = arr[1];
    this.e = arr[2];
    return this;
  }
}

const ron = new MessyClass(new StringBuilder(1, 2).addC(3).addD(10));
const chris = new MessyClass(new Foreign(1, 2).addAll());

console.log(messy.getA());
console.log(messi.getD());
console.log(ron.getD());
console.log(chris.getC());
console.log(chris.getE());
