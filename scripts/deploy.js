async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const EmailSender = await ethers.getContractFactory("EmailSender");
  const emailSender = await EmailSender.deploy();
  console.log("EmailSender contract deployed to:", emailSender.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
