import axios from "../utils/axios";

export async function getTotalBalance() {
  const token = "wId6bE1drw";

  const { data: total_balance } = await axios.get("/total_balance", {
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return total_balance;
}