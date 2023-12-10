import React, { useContext } from "react";
import InputForm from "../Utilities/InputForm";
import PrimaryButton from "../Utilities/PrimaryButton";
import context from "../../MyContext";
import { useLocation } from "react-router-dom";
import SecondaryButton from "../Utilities/SecondaryButton";

function ExpenseForm() {
  const ctx = useContext(context);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const editQuery = query.get("edit");

  return (
    <div className=" bg-white drop-shadow-md rounded-md">
      <div className=" bg-slate-900 text-slate-50 p-1.5 rounded-t-md">
        <h1 className=" sm:text-xl text-base">Expense Form</h1>
      </div>
      <div className="p-2 border-x-2 border-b-2 rounded-b-md">
        <form
          action={editQuery ? "/edit-expense" : "/add-expense"}
          method="post"
          onSubmit={ctx.updatingExpenses}
        >
          {editQuery && (
            <input
              type="text"
              name="id"
              id=""
              hidden
              defaultValue={ctx.formData.id}
            />
          )}
          <InputForm
            name={"expense"}
            req={true}
            defaultValue={ctx.formData.expense}
          >
            Expense Name
          </InputForm>
          <InputForm
            name={"amount"}
            req={true}
            type="number"
            defaultValue={ctx.formData.amount}
          >
            Expense Amount
          </InputForm>
          <InputForm
            name={"date"}
            req={true}
            type="date"
            defaultValue={
              ctx.formData.date && editQuery
                ? `${new Date(ctx.formData.date).toISOString().split("T")[0]}`
                : ""
            }
          >
            Expense Date
          </InputForm>
          <div className="pt-1 space-x-2">
            <PrimaryButton
              type="submit"
              onClickFunction={editQuery && ctx.updatingExpenses}
            >
              {editQuery ? "Save" : "Add Expense"}
            </PrimaryButton>
            {editQuery && (
              <SecondaryButton
                onClickFunction={() =>
                  ctx.editingExpense({
                    expense: "",
                    amount: "",
                    data: "",
                  })
                }
              >
                Cancel
              </SecondaryButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
