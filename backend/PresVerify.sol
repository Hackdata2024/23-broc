// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrescriptionContract {
    // Immutable state variables
    bytes32 public immutable identityHash;
    bytes32 public immutable prescriptionHash;
    
    // Mutable state variables
    uint public limitCount;
    uint public refillCount;

    // Mapping from identityHash to prescriptionHash
    mapping(bytes32 => bytes32) public identityToPrescription;

    // Constructor to initialize immutable state variables
    constructor(bytes32 _identityHash, bytes32 _prescriptionHash, uint _limitCount) {
        identityHash = _identityHash;
        prescriptionHash = _prescriptionHash;
        limitCount = _limitCount;

        // Initialize mapping
        identityToPrescription[_identityHash] = _prescriptionHash;
    }

    // Function to get identity hash value
    function getIdentityHash() external view returns (bytes32) {
        return identityHash;
    }

    // Function to get prescription hash value
    function getPrescriptionHash() external view returns (bytes32) {
        return prescriptionHash;
    }

    // Function to check refill limit and disallow subsequent refills if limit reached
    function checkRefillLimit() internal view returns (bool) {
        return refillCount < limitCount;
    }

    // Function to refill prescription
    function refillPrescription() external returns (bool) {
        require(checkRefillLimit(), "Refill limit reached");
        refillCount++;
        return true;
    }

    // Function to retrieve prescription hash given an identity hash
    function getPrescriptionHash(bytes32 _identityHash) external view returns (bytes32) {
        return identityToPrescription[_identityHash];
    }
}
