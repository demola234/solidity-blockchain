import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("SimpleStorage", function () {
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const storage = await SimpleStorage.deploy();

    return { storage };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { storage } = await loadFixture(deployOneYearLockFixture);

      expect(await storage.retrieve()).to.equal(0);
    });

   
});
