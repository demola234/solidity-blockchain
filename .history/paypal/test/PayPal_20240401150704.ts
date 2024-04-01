import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Paypal", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const PayPal = await hre.ethers.getContractFactory("Paypal");
    const payPal = await PayPal.deploy();

    return { payPal, owner, otherAccount };
  }

  describe("Paypal Contract", function () {
    it("Should set the owner correctly", async function () {
      const { payPal, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );
      expect(await payPal.owner()).to.equal(owner);
    });

    it("Should add name correctly", async function () {
      const { payPal, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );
      const name = "TestName";

      await paypal.addName(name);

      expect((await payPal.names(owner.address)).name).to.equal(name);
    });
  });
});
