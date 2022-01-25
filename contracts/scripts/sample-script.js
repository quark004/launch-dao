const hre = require('hardhat');

async function main() {
  const LaunchTokenFactoryFac = await hre.ethers.getContractFactory(
    'LaunchTokenFactory'
  );
  const launchFactoryContract = await LaunchTokenFactoryFac.deploy();

  await launchFactoryContract.deployed();

  console.log('LaunchFactory deployed to:', launchFactoryContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
