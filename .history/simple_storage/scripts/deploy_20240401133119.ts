import { ethers, network, run } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorageFactory.deploy();

  console.log("simpleStorage Contract Deployed at " + simpleStorage.target);
  if (network.config.chainId === 11155111 && process.env.ETHER_SCAN_API_KEY) {
    await simpleStorage.waitForDeployment;
    await verify(simpleStorage.target.toString(), []);
  }
    
    
    const currentValue = await simpleStorage.retrive();
    console.log(`Current value is: ${currentV// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.24;
    
    contract SimpleStorage {
        uint256 favoriteNumber;
    
        struct People {
            uint256 favoriteNumber;
            string name;
        }
        People[] public people;
    
        mapping(string => uint256) public nameToFavoriteNumber;
    
        function store(uint256 _favoriteNumber) public {
            favoriteNumber = _favoriteNumber;
        }
    
        function retrive() public view returns (uint256) {
            return favoriteNumber;
        }
    
        function addPerson(string memory _name, uint256 _favoriteNumber) public {
            people.push(People(_favoriteNumber, _name));
            nameToFavoriteNumber[_name] = _favoriteNumber;
        }
    
        function getPerson(uint256 _index) public view returns (uint256, string memory) {
            return (people[_index].favoriteNumber, people[_index].name);
        }
    }
    }`)
    }`)
}

async function verify(contractAddress: string, arg: []) {
  console.log("Verifying Contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: arg,
    });
    console.log("Verified");
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already been verified")) {
      console.log("Contract already verified");
    } else {
      console.log(e);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
