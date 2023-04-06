"use client";

import React, { useState } from "react";

export default function TransactionWrapper({ title, children }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ margin: "100px 0" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 0 20px 0",
          }}
        >
          <p>{title}</p>
          <div
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setShowMore((pre) => !pre)}
          >
            <p>{!showMore ? "Show More" : "Show Less"}</p>
          </div>
        </div>
      </div>
      <div style={{ height: showMore ? "100%" : "80px", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
