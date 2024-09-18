const hre = require("hardhat");

async function main() {
  const CampaignDataContract = await hre.ethers.getContractFactory(
    "CampaignsData"
  );

  const campaigndatacontract = await CampaignDataContract.deploy();

  await campaigndatacontract.deployed();

  console.log("Factory deployed to : ", campaigndatacontract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
