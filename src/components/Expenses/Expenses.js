import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
import React, { useState } from 'react'
import ExpensesChart from './ExpenseChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');


    const filterChangHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        console.log(filteredYear);
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <li>
            <Card className='expenses'>
                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesFilter
                    onChangeFillter={filterChangHandler}
                    selected={filteredYear} />
                <ExpensesList items={filteredExpenses} />

                {filteredExpenses.length >= -1000 && <p> Tu's Design this!</p>}


            </Card>
        </li>
    );

}


export default Expenses;