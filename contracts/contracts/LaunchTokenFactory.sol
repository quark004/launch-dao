// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./LaunchToken.sol";

contract LaunchTokenFactory {
    event DAOLaunched(address _owner, address _token, uint256 _createdAt, string _tokenName, string _tokenSymbol, uint256 _totalSupply, uint256 _ownerInitialSupply);

    function createLaunchToken(
        string memory _name,
        string memory _symbol,
        uint256 _cap,
        uint256 _initialOwnerTokens
    ) public {
        address tokenAddress = address(new LaunchToken(
            _name,
            _symbol,
            _cap,
            _initialOwnerTokens,
            msg.sender
        ));
        emit DAOLaunched(msg.sender, tokenAddress, block.timestamp, _name, _symbol, _cap, _initialOwnerTokens);
    }
}
