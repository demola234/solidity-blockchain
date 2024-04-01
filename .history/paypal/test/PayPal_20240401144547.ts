import {
  loadFixture,
  time,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre from "hardhat";

describe("PayPal", function () {
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const PayPal = await hre.ethers.getContractFactory("Paypal");
    const payPal = await PayPal.deploy();

    await payPal.setLockedAmount(lockedAmount);
    await payPal.setUnlockTime(unlockTime);

    await payPal.deployed();

    return { payPal };
  }

  describe("Deployment", function () {
    it("Should be equal to 0", async function () {
      const { paypal } = await loadFixture(deployOneYearLockFixture);

      // expect(await payPal
    });
  });
});
