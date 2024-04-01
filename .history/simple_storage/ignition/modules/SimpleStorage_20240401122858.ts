import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;

const SimpleStorage = buildModule("SimpleStorage", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const storageAmount = m.getParameter("storageAmount", ONE_GWEI);

  const storage = m.contract("SimpleStorage", [unlockTime], {
    value: storageAmount,
  });

  return { storage };
});

const SimpleStorage = buildModule("SimpleStorage", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("PayPal", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});

export default SimpleStorage;
