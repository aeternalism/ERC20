import { run, ethers } from 'hardhat';

async function main() {
  await run('compile');

  const Aeternalism = await ethers.getContractFactory('Aeternalism');
  const aeInstance = await Aeternalism.deploy();

  const aeContract = await aeInstance.deployed();
  console.log(`Aeternalism deployed to: ${aeContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
  