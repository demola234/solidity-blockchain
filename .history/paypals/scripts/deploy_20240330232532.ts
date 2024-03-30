import { ethers } from 'hardhat';

async function main() {
  const paypal = await ethers.deployContract('Paypal');

  await paypal.waitForDeployment();

  console.log('NFT Contract Deployed at ' + paypal.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});