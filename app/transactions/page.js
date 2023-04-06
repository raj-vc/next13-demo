import TransactionListing from "@/components/TransactionListing/TransactionListing";
import TransactionWrapper from "@/components/TransactionWrapper/TransactionWrapper";

async function getTransactions() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch("http://localhost:3001/transactions.json", {
        cache: "no-store",
      });
      resolve(res.json());
    }, 3000);
  });
}

export default async function Transactions() {
  const transactions = await getTransactions();
  const activeTransaction = transactions.filter(({ status }) => status === 1);
  const inActiveTransaction = transactions.filter(({ status }) => status === 2);

  return (
    <div>
      <TransactionWrapper title="Active Transaction">
        {activeTransaction.map((transaction) => (
          <TransactionListing
            key={transaction?._id}
            {...{ transaction, textColor: transaction.color }}
          />
        ))}
      </TransactionWrapper>
      <TransactionWrapper title="In-Active Transaction">
        {inActiveTransaction.map((transaction) => (
          <TransactionListing key={transaction?._id} {...{ transaction }} />
        ))}
      </TransactionWrapper>
    </div>
  );
}
