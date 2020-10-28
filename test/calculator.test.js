const { contract } = require('@openzeppelin/test-environment');

const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Adder = contract.fromArtifact('Adder');
const Suber = contract.fromArtifact('Suber');
const Multiplier = contract.fromArtifact('Multiplier');
const Divisor = contract.fromArtifact('Divisor');

describe('Calculator', () => {
  beforeEach(async function () {
    this.adder = await Adder.new();
  });

  it('add numbers', async function () {
    expect(await this.adder.add(1, 1)).to.be.bignumber.equal(new BN(2));
  });

  beforeEach(async function () {
    this.suber = await Suber.new();
  });

  it('substract numbers nb1 - nb2', async function () {
    expect(await this.suber.sub(100, 98)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when nb1 < nb2', async function () {
    await expectRevert(
      this.suber.sub(98, 199),
      'Suber: no negative value here.',
    );
  });

  beforeEach(async function () {
    this.multiplier = await Multiplier.new();
  });

  it('multiply numbers nb1 * nb2', async function () {
    expect(await this.multiplier.mul(20, 3)).to.be.bignumber.equal(new BN(60));
  });

  beforeEach(async function () {
    this.divisor = await Divisor.new();
  });

  it('divide numbers nb1 / nb2', async function () {
    expect(await this.divisor.div(10, 2)).to.be.bignumber.equal(new BN(5));
  });

  it('reverts when nb2 < nb1', async function () {
    await expectRevert(
      this.divisor.div(125, 0),
      'Divisor: can not divide by 0',
    );
  });
});
