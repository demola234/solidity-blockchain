import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SimpleStorage", (m) => {
  const apollo = m.contract("SimpleStorage", ["Saturn V"]);

  m.call(apollo, "launch", []);

  return { apollo };
});
