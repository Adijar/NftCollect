async function main() {

  const NftCollect = await hre.ethers.getContractFactory("NftCollect");
  const NftCollectDeployed = await NftCollect.deploy("NftCollectName", "NCNS");

  await NftCollectDeployed.deployed();

  console.log("Deployed at", NftCollectDeployed.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });