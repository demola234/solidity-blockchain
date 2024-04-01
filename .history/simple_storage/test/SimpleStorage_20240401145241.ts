import {
  loadFixture,
  time,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("SimpleStorage", function () {
  async function deployOneYearLockFixture() {

  

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const storage = await SimpleStorage.deploy();

    return { storage };
  }

  describe("Deployment", function () {
    it("Should be equal to 0", async function () {
      const { storage } = await loadFixture(deployOneYearLockFixture);

      expect(await storage.retrieve()).to.equal(0);
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
