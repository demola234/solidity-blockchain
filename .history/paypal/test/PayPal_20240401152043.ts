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

      await payPal.addName(name);

      expect((await payPal.names(owner.address)).name).to.equal(name);
    });
    it("Should create request correctly", async function () {
      const amount = 100;
      const message = "TestRequest";
      const address = "0x85FD4d0D9aEE19B1ffb173b59bc47436eDb9C8D2";
      const { payPal, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );
      await payPal.createRequest(amount, message, owner.address);
    });

    // it("Should pay request correctly", async function () {
    //   const amount = 100;
    //   const message = "TestPayRequest";
    //   const address = "0x85FD4d0D9aEE19B1ffb173b59bc47436eDb9C8D2";
    //   const { payPal, owner, otherAccount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );
    //   await payPal.createRequest(amount, message, owner.address);
    //   await expect(() =>
    //     payPal.payRequest(0, { value: amount })
    //   ).to.changeEtherBalance(owner, amount);
    // });

    it("Should get my requests correctly", async function () {
      const amount = 100;
      const message = "TestRequest";
      const { payPal, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );

      await payPal
        .connect(otherAccount)
        .createRequest(amount, message, owner.address);
      const [addrs, amnt, megs, nme] = await payPal.getMyRequests(
        owner.address
      );

      expect(addrs.length).to.equal(1);
      expect(amnt[0]).to.equal(amount);
      expect(megs[0]).to.equal(message);
    });

    // it("Should get my history correctly", async function () {
    //   const amount = 100;
    //   const message = "TestPayRequest";
    //   const { payPal, owner, otherAccount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   await payPal
    //     .connect(otherAccount)
    //     .createRequest(amount, message, owner.address);
    //   await payPal.connect(otherAccount).payRequest(1, { value: amount });
    //   const history = await payPal.getMyHistory(owner.address);
    //   expect(history.length).to.equal(2);
    //   expect(history[0].action).to.equal("-");
    //   expect(history[0].amount).to.equal(amount);
    //   expect(history[0].message).to.equal(message);
    // });

    it("Should get my name correctly", async function () {
      const name = "TestName";
      const { payPal, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );
      await payPal.addName(name);
      const namey = await payPal.getMyNamey(owner.address);
      expect(namey.name).to.equal(name);
      expect(namey.hasName).to.equal(true);
    });
  });
});
