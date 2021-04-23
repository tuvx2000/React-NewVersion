import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);


        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });//// may be not the latest version

        // setUserInput((prevState) => {
        //     return { ...userInput, setEnteredAmount: event.target.value }
        // }
        // );//// it's safer cause it guarantee the latest snapshot



    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');



    };



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type="number" min="0,1" step="0,1" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="expenses__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}



export default ExpenseForm;