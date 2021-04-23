import React from "react";
import Card from "./Card";

const Container = ({ data }) => {
  return (
    <div className="h-full ">
      <div className="flex  p-4 space-x-3">
        <Card title="Current Market Value (USD)" balance={data.totalValueUsd} />
        <Card
          title="Gas Fees + Exit Transactions"
          balance={data.totalFeeUsd}
          icon={1}
        />
        <Card title="Liquidity Pool Gains" balance={data.netGainUsd} icon={2} />
        <Card title="Net Market Gains" balance={data.netGainPct} icon={3} />
      </div>
      <div className="flex  ml-3 mt-6 space-x-6  mr-4"></div>
    </div>
  );
};

export default Container;
