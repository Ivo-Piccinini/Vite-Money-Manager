import React from 'react'
import Expense from './Expense'

const ExpensesList = ({
    expenses,
    setEditExpense, 
    deleteExpense,
    filter,
    leakedExpenses
}) => {
  return (
    <div className='listado-gastos contenedor'>

      { filter ? (
        <>
          <h2>{leakedExpenses.length ? 'Expenses' : 'There are no expenses'}</h2>
          {leakedExpenses.map( expense => (
            <Expense 
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
            />
          ))}
        </>
        ) : (
          <>
            <h2>{expenses.length ? 'Expenses' : 'There are no expenses'}</h2>
              {expenses.map( expense => (
                <Expense 
                    key={expense.id}
                    expense={expense}
                    setEditExpense={setEditExpense}
                    deleteExpense={deleteExpense}
                />
              ))}
          </>
        )
      }

    </div>
  )
}

export default ExpensesList