import {
  loadFixture,
  time,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("PayPal", function () {
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const SimpleStorage = await hre.ethers.getContractFactory("PayPal");
    const storage = await SimpleStorage.deploy();

    return { storage };
  }

  describe("Deployment", function () {
    it("Should be equal to 0", async function () {
      const { paypal } = await loadFixture(deployOneYearLockFixture);

      expect(await paypal.
    });

    it("Should store the value of 8", async function () {
      const { storage } = await loadFixture(deployOneYearLockFixture);

      await storage.store(8);

      expect(await storage.retrieve()).to.equal(8);
    });

    it("Should add person", async function () {
      const { storage } = await loadFixture(deployOneYearLockFixture);
      // const regularNumber = 9;
      // const bigIntValue = BigInt(regularNumber);

      await storage.addPerson("Ademola", 9);

      expect(await storage.getPerson(0)).to.equal("Ademola");

      console.log(await storage.getPerson(0));
    });
  });
});
