import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { Contract, ContractFactory } from 'ethers';
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
    let Paypal: ContractFactory;
    let paypal: Contract;
    let owner: string;
    let addr1: string;
    let addr2: string;

    beforeEach(async function () {
      const [owner, otherAccount] = await hre.ethers.getSigners();

  
      Paypal = await ethers.getContractFactory('Paypal');
      paypal = await Paypal.deploy();
      await paypal.deployed();
    });

    it("Should be equal to 0", async function () {
      const { payPal } = await loadFixture(deployOneYearLockFixture);

      expect(await payPal.retrieve()).to.equal(0);
    });
  });
});
