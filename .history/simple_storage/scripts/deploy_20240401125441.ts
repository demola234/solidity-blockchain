import { ethers, network } from "hardhat";

async function main() {
    const SimpleStorageFac = await ethers.getContractFactory("SimpleStorage");

    await simpleStorage.deploy();
    
    const simpleStorage = await S 

    console.log("simpleStorage Contract Deployed at " + simpleStorage.target);
    if (network.config.chainId == 11155111 && process.env.ETHER_SCAN_API_KEY) {
       await verify( simpleStorage., [])
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
