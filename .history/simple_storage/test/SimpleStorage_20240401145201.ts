import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';
import { expect } from 'chai';

describe('Paypal Contract', function () {
  let Paypal: ContractFactory;
  let paypal: Contract;
  let owner: string;
  let addr1: string;
  let addr2: string;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    Paypal = await ethers.getContractFactory('Paypal');
    paypal = await Paypal.deploy();
    await paypal.deployed();
  });

  it('Should set the owner correctly', async function () {
    expect(await paypal.owner()).to.equal(owner.address);
  });

  it('Should add name correctly', async function () {
    const name = 'TestName';
    await paypal.addName(name);
    expect((await paypal.names(owner.address)).name).to.equal(name);
  });

  it('Should create request correctly', async function () {
    const amount = 100;
    const message = 'TestRequest';
    await paypal.connect(addr1).createRequest(amount, message, owner.address);
    expect((await paypal.requests(owner.address)).length).to.equal(1);
  });

  it('Should pay request correctly', async function () {
    const amount = 100;
    const message = 'TestPayRequest';
    await paypal.connect(addr1).createRequest(amount, message, owner.address);
    await expect(() => paypal.connect(addr1).payRequest(0, { value: amount })).to.changeEtherBalance(owner, amount);
  });

  it('Should get my requests correctly', async function () {
    const amount = 100;
    const message = 'TestRequest';
    await paypal.connect(addr1).createRequest(amount, message, owner.address);
    const [addrs, amnt, megs, nme] = await paypal.getMyRequests(owner.address);
    expect(addrs.length).to.equal(1);
    expect(amnt[0]).to.equal(amount);
    expect(megs[0]).to.equal(message);
  });

  it('Should get my history correctly', async function () {
    const amount = 100;
    const message = 'TestPayRequest';
    await paypal.connect(addr1).createRequest(amount, message, owner.address);
    await paypal.connect(addr1).payRequest(0, { value: amount });
    const history = await paypal.getMyHistory(owner.address);
    expect(history.length).to.equal(2);
    expect(history[0].action).to.equal('-');
    expect(history[0].amount).to.equal(amount);
    expect(history[0].message).to.equal(message);
  });

  it('Should get my name correctly', async function () {
    const name = 'TestName';
    await paypal.addName(name);
    const namey = await paypal.getMyNamey(owner.address);
    expect(namey.name).to.equal(name);
    expect(namey.hasName).to.equal(true);
  });
});
