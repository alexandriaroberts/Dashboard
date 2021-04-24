import React from "react";

const Table = ({ data }) => {
  if (!Array.isArray(data)) return null;

  return (
    <div className="w-full rounded-xl">
      <table class="table-fixed rounded-xl w-full">
        <thead className="bg-gray-200 w-full justify-between text-sm">
          <tr>
            {<th className="px-8 py-4">Pool name</th>}
            {<th>Tokens entered → current</th>}
            {<th>Farming rewards</th>}
            {<th>LP gains / Net market gains</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b-2 bg-gray-100">
              <td className="px-8 py-4 ">
                <p className="text-purple-700 text-sm font-semibold">
                  LINK/ETH
                </p>
                <span className="text-gray-300">{item.poolProviderName}</span>
              </td>
              <td>
                {Math.round(item.mintBurntLedgerLpTokens)} →
                {Math.round(item.currentOwnedLpTokens)}
              </td>
              <td>{Math.round(item.totalLpTokens)}</td>
              <td>{Math.round(item.initialCapitalValueUsd)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
