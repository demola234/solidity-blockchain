import { expect } from "chai";
import { Contract, ContractFactory } from "ethers";
import hre from "hardhat";

describe("Paypal", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const PayPal = await hre.ethers.getContractFactory("Paypal");
    const payPal = await PayPal.deploy();

    return { payPal };
  }

  describe("Paypal Contract", function () {
    let PayPal: ContractFactory;
    let paypal: Base;
    let owner: string;
    let addr1: string;
    let addr2: string;

    beforeEach(async function () {
      const [owner, otherAccount] = await hre.ethers.getSigners();

      PayPal = await hre.ethers.getContractFactory("PayPal");
      paypal = await PayPal.deploy();
      await paypal.waitForDeployment();
    });

    it("Should set the owner correctly", async function () {
      const [owner, otherAccount] = await hre.ethers.getSigners();
      expect(await paypal.owner()).to.equal(owner.address);
    });
  });
});
