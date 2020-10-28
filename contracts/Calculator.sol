// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Adder.sol";
import "./Suber.sol";
import "./Multiplier.sol";
import "./Divisor.sol";

contract Calculator {
    Adder private adderContract;
    Suber private suberContract;
    Multiplier private multiplierContract;
    Divisor private divisorContract;

    constructor(
        address _adderContract,
        address _suberContract,
        address _multiplierContract,
        address _divisorContract
    ) public {
        adderContract = Adder(_adderContract);
        suberContract = Suber(_suberContract);
        multiplierContract = Multiplier(_multiplierContract);
        divisorContract = Divisor(_divisorContract);
    }

    function add(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return adderContract.add(nb1, nb2);
    }

    function sub(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return suberContract.sub(nb1, nb2);
    }

    function mul(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return multiplierContract.mul(nb1, nb2);
    }

    function div(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return divisorContract.div(nb1, nb2);
    }
}
