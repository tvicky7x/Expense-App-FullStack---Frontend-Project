import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const context = createContext({
  list: [],
  updatingExpenses: () => {},
  deleteExpense: () => {},
  formData: {},
  editingExpense: () => {},
});

export default context;

export function ContextProvider({ children }) {
  const [formData, setForm] = useState({
    expense: "",
    amount: "",
    data: "",
  });
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  //  deleting booking
  async function deleteExpense(data) {
    const newList = list.filter((item) => item.id !== data.id);
    await axios.delete("/delete-expense", { data });
    setList(newList);
  }

  //  editing booking
  async function editingExpense(data) {
    if (data.expense === "") {
      navigate("/expense-page");
    } else {
      navigate("/expense-page?edit=true");
    }
    setForm(data);
  }

  // updating table
  async function updatingExpenses() {
    const expenseData = await axios.get("/get-expenses");
    setList(expenseData.data);
  }

  useEffect(() => {
    (async () => {
      const query = new URLSearchParams(location.search);
      const editQuery = query.get("edit");
      if (editQuery) navigate("/expense-page");
      const expenseData = await axios.get("/get-expenses");
      setList(expenseData.data);
    })();
  }, [location.search, navigate]);

  return (
    <context.Provider
      value={{
        list,
        updatingExpenses,
        deleteExpense,
        formData,
        editingExpense,
      }}
    >
      {children}
    </context.Provider>
  );
}
