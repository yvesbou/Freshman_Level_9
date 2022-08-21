const hre = require("hardhat");

async function main() {
  const nfteeContract = await hre.ethers.getContractFactory("GameItem");
  const deployedNFTContract = await nfteeContract.deploy();
  
  await deployedNFTContract.deployed();
  
  console.log("NFT Contract Address:", deployedNFTContract.address);
  
  // verify on etherscan
  await deployedNFTContract.deployTransaction.wait(10);
  await hre.run("verify:verify", {
    address: deployedNFTContract.address,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
