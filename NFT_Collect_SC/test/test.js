const { expect } = require('chai');

describe("NftCollect", function() {

  it("should return correct name and symbol", async function() {
    const NftCollect = await hre.ethers.getContractFactory("NftCollect");
    const NftCollectDeployed = await NftCollect.deploy("NftCollectName", "NCN");
    await NftCollectDeployed.deployed();

    expect(await NftCollectDeployed.name()).to.equal("NftCollectName");
    expect(await NftCollectDeployed.symbol()).to.equal("NCN");
  });
});