// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Hi {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
