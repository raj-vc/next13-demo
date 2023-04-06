import dayjs from "dayjs";

export default function TransactionListing({
  transaction: {
    _id,
    sellerAgentName,
    textColor,
    address,
    sellerAgentEmail,
    createdAt,
  },
}) {
  const data = {
    _id,
    sellerAgentName,
    address,
    sellerAgentEmail,
    createdAt: dayjs(createdAt).format("DD/MM/YYYY"),
  };

  return (
    <div
    className=`x ${textColor}`
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        color: textColor,
        justifyContent: "center",
      }}
    >
      {Object.keys(data).map((item) => (
        <span key={item}>{data[item]}</span>
      ))}
    </div>
  );
}
