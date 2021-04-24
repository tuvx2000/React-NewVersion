import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import React, { useState } from 'react'

const NewExpense = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditting(false);

    };

    const startEdittingHandler = () => {
        setIsEditting(true);
    };

    const stopEdittingHandler = () => {
        setIsEditting(false);
    };

    return (
        <div className="new-expense">
            {!isEditting && <button onClick={startEdittingHandler}>Add New Button</button>}
            {isEditting && < ExpenseForm
                onCanCel={stopEdittingHandler}
                onSaveExpenseData={onSaveExpenseDataHandler}
            />}
        </div>
    );
}


export default NewExpense;