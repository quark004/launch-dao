// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract LaunchToken is ERC20Capped, Ownable {
    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _cap,
        uint256 _initialOwnerTokens,
        address _owner
    ) ERC20Capped(_cap) ERC20(_name, _symbol) {
        require(
            _initialOwnerTokens <= _cap,
            "Initial owner tokens must be less than or equal to cap"
        );
        ERC20._mint(_owner, _initialOwnerTokens);
        transferOwnership(_owner);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
