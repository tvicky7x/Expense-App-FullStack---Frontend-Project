import React, { useContext } from "react";
import ListItem from "./ListItem";
import context from "../../MyContext";

function ExpenseList() {
  const ctx = useContext(context);

  const totalExpense = ctx.list.reduce(
    (total, expense) => (total = total + Number(expense.amount)),
    0
  );

  return (
    <div className=" bg-white drop-shadow-md rounded-md">
      <div className=" bg-slate-900 text-slate-50 p-1.5 rounded-t-md flex justify-between items-center">
        <h1 className="sm:text-xl text-base">Expense Records</h1>
        <p>Total: ₹ {totalExpense}</p>
      </div>
      <ul className="px-2 border-x-2 border-b-2 rounded-b-md divide-y-2">
        {ctx.list.map((item, i) => {
          return <ListItem key={i} data={item} />;
        })}
        {ctx.list.length === 0 && (
          <li className="py-3">No Expense record available</li>
        )}
      </ul>
    </div>
  );
}

export default ExpenseList;
