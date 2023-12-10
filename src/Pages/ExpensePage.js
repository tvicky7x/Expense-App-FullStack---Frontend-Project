import React from "react";
import ExpenseForm from "../Components/Form/ExpenseForm";
import ExpenseList from "../Components/Lists/ExpenseList";

function ExpensePage() {
  return (
    <>
      <ExpenseForm />
      <div className="py-6"></div>
      <ExpenseList />
    </>
  );
}

export default ExpensePage;
