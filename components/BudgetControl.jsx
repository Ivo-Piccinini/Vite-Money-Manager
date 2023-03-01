import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({
    expenses,
    setExpenses, 
    budget,
    setBudget,
    setIsValidBudget
}) => {

    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.amount + total, 0)
        const totalAvailable = budget - totalSpent;
        // Calculate percentage spent
        const newPercentage = (( (budget - totalAvailable) / budget) * 100).toFixed(1);

        setAvailable(totalAvailable)
        setSpent(totalSpent)

        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1000)
    }, [expenses])
    

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const result = confirm('Do you want to reset the budget and expenses?')

        if(result) {
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#f5f5f5',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={percentage}
                    text={`${percentage}% Spent`}
                />
            </p>
        </div>

        <div className='contenido-presupuesto'>
            <button
                className='reset-app'
                type='button'
                onClick={handleResetApp}
            >
                Reset App
            </button>
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>

            <p className={`${available < 0 ? 'negativo' : ''}`}>
                <span>Available : </span> {formatAmount(available)}
            </p>

            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl