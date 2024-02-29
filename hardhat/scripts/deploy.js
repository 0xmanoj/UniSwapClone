const hre = require("hardhat");

async function main() {
  //STAKING CONTRACT
  const CustomDex = await hre.ethers.deployContract("CustomDex");

  await CustomDex.waitForDeployment();

  //TOKEN CONTRACT
  console.log(` ChatApp Address: ${CustomDex.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
