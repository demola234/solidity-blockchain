import { expect } from "chai";
import { BaseContract, ContractFactory } from "ethers";
import hre from "hardhat";

describe("Paypal", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const PayPal = await hre.ethers.getContractFactory("Paypal");
    const payPal = await PayPal.deploy();

    return { payPal, owner,  };
  }

  describe("Paypal Contract", function () {



    it("Should set the owner correctly", async function () {
      const [owner, otherAccount] = await hre.ethers.getSigners();
      expect(await paypal.getAddress()).to.equal(owner.address);
    });

    it('Should add name correctly', async function () {
      
      const name = 'TestName';
      await paypal.
      expect((await paypal.names(owner.address)).name).to.equal(name);
    });
  
  });
});
