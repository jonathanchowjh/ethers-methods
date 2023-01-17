// SPDX-License-Identifier: UNLICENSED
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.9;

contract Utility {
    constructor() {}

    function getBalances(
        address wallet_addr,
        address[] calldata tokens_addrs
    ) external view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](tokens_addrs.length);
        for (uint i = 0; i < tokens_addrs.length; i++) {
            balances[i] = IERC20(tokens_addrs[i]).balanceOf(wallet_addr);
        }
        return balances;
    }
}
