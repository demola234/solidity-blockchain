import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;

const SimpleStorage = buildModule("SimpleStorage", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const stroageAmount = m.getParameter("storageAmount", ONE_GWEI);

  const storage = m.contract("SimpleStorage", [unlockTime], {
    value: storageAmount,
  });

  return { storage };
});

export default SimpleStorage;
