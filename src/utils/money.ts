export class Money {
  readonly amount: number;

  constructor(amount: number = 0) {
    this.amount = amount;
  }

  static fromParts(kronor: number, cents: number = 0) {
    return new Money(kronor * 100 + cents);
  }

  add(other: Money) {
    return new Money(this.amount + other.amount);
  }

  getCents() {
    return Math.abs(this.amount % 100);
  }

  getCentsString() {
    return this.getCents().toString().padStart(2, "0");
  }

  getKronor() {
    return Math.abs(Math.trunc(this.amount / 100));
  }

  getKronorString() {
    return this.getKronor().toString();
  }

  toString() {
    if (this.getCents() === 0) {
      return this.getKronorString();
    }
    return `${this.getKronorString()}.${this.getCentsString()}`;
  }
}
