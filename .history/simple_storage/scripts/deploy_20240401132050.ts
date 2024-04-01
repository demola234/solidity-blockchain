import { ethers, network, run } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorageFactory.deploy();

  console.log("simpleStorage Contract Deployed at " + simpleStorage.target);
  if (network.config.chainId == 11155111 && process.env.ETHER_SCAN_API_KEY) {
    await verify(simpleStorage.target.toString(), []);
  }
}

async function verify(contractAddress: string, arg: []) {
  console.log("Verifying Contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: arg,
    });
  } catch (e) {
    console.log(e);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
