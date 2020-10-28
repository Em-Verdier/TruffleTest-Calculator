// Adder is an artifact of the Adder contract
const Adder = artifacts.require('Adder');
// Suber is an artifact of the Suber contract
const Suber = artifacts.require('Suber');
// Multiplier is an artifact of the Multiplier contract
const Multiplier = artifacts.require('Multiplier');
// Divisor is an artifact of the Multiplier contract
const Divisor = artifacts.require('Divisor');

module.exports = async (deployer) => {
  // All the abstractions/instances below are not needed
  // They are only useful if we need to interact with it
  // for further deployments.

  // adderInstance is an abstraction/instance of Adder
  // eslint-disable-next-line no-unused-vars
  const adderInstance = await deployer.deploy(Adder);
  // suberInstance is an abstraction/instance of Suber
  // eslint-disable-next-line no-unused-vars
  const suberInstance = await deployer.deploy(Suber);
  // multiplierInstance is an abstraction/instance of Multiplier
  // eslint-disable-next-line no-unused-vars
  const multiplierInstance = await deployer.deploy(Multiplier);
  // divisorInstance is an abstraction/instance of Divisor
  // eslint-disable-next-line no-unused-vars
  const divisorInstance = await deployer.deploy(Divisor);
};
