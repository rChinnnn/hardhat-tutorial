const { expect } = require("chai");

describe("Hi contract", function () {
  it("Should deploy the contract and set name", async () => {
    const HiContract = await ethers.deployContract("Hi", ["Darren"])
    expect(await HiContract.name()).to.equal("Darren")
  })
})