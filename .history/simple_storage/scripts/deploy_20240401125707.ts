import { ethers, network } from "hardhat";

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

    
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deploy()

    console.log("simpleStorage Contract Deployed at " + simpleStorage.getAddress);
    if (network.config.chainId == 11155111 && process.env.ETHER_SCAN_API_KEY) {
       await verify( simpleStorage.getAddress, [])
    }
}

async function verify(contractAddress: string, arg: []) {

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
