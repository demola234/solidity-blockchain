import { expect } from "chai";
import { Contract, ContractFactory } from "ethers";
import hre from "hardhat";

describe("PayPal", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const PayPal = await hre.ethers.getContractFactory("PayPal");
    const payPal = await PayPal.deploy();

    return { payPal };
  }

  describe("Paypal Contract", function () {


    beforeEach(async function () {
      const [owner, otherAccount] = await hre.ethers.getSigners();

      const PayPal = await hre.ethers.getContractFactory("PayPal");
      const paypal = await Paypal.deploy();
      await paypal.waitForDeployment();
    });

    it("Should set the owner correctly", async function () {
      expect(await paypal.owner()).to.equal(owner);
    });
  });
});
