import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SimpleStorage", (m) => {


  m.call(apollo, "launch", []);

  return { apollo };
});