import React from "react";
import { ImInfo } from "react-icons/im";

const Table = ({ data }) => {
  if (!Array.isArray(data)) return null;

  return (
    <div className="w-full rounded-xl">
      <table className="table-fixed rounded-xl w-full">
        <thead className="bg-gray-200 w-full justify-between text-left text-xs">
          <tr>
            {<th className="px-8 py-4">Pool name</th>}
            {<th>Tokens entered → current</th>}
            {<th>Farming rewards</th>}
            {
              <th>
                LP gains /
                <span className="text-purple-700 text-xs font-semibold underline inline-flex items-center pl-1 pr-2">
                  {" "}
                  Net market gains <ImInfo className="pl-1 text-tiny" />
                </span>
              </th>
            }
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.address} className="border-b-2 bg-gray-100">
              <td className="px-8 py-4 ">
                <span className="block text-purple-700 text-sm font-semibold">
                  LINK/ETH
                </span>
                <span className="block text-gray-300 text-xs">
                  {item.poolProviderName}
                </span>
              </td>
              <td className="text-gray-800 text-xs">
                {Math.round(item.mintBurntLedgerLpTokens * 100) / 100} →
                {Math.round(item.currentOwnedLpTokens * 100) / 100} LINK
                <span className="block text-green-500 text-xs">
                  {Math.round(item.ownedLpTokensPct * 100) / 100} LINK (+
                  {Math.round(item.mintBurntLedgerLpTokens)})
                </span>
              </td>
              <td className="text-gray-800 text-xs">
                {Math.round(item.totalLpTokens * 100) / 100} SUSHI
              </td>
              <td className="text-gray-800 text-sm font-semibold">
                ${Math.round(item.initialCapitalValueUsd * 100) / 100}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
