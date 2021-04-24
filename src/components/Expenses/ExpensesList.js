import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    let expenesContent = <h2 className='expenses-list__fallback'> No Expenses found. </h2>;

    if (props.items.length > 0)
        expenesContent =
            props.items.length > 0 && props.items.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)

    return <ul className='expenses-list'>
        {expenesContent}
    </ul>
}


export default ExpensesList;