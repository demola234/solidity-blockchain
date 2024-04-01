import {
  loadFixture,
  time,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("PayPal", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const PayPal = await hre.ethers.getContractFactory("PayPal");
    const payPal = await PayPal.deploy();

    return { payPal };
  }

  describe("'Paypal Contract'", function () {
    it("Should be equal to 0", async function () {
      const { payPal } = await loadFixture(deployOneYearLockFixture);

      expect(await payPal.retrieve()).to.equal(0);
    });
  });
});
