import { useState, useEffect } from 'react';
import Message from './Message';
import CloseBtn from '../img/cerrar.svg'

const Modal = ({
    setModal, 
    animateModal, 
    setAnimateModal, 
    saveExpense,
    editExpense,
    setEditExpense
}) => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if( Object.keys(editExpense).length > 0) {
            setName(editExpense.name)
            setAmount(editExpense.amount)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)
        }
    }, []);

    const hideModal = () => {
        setAnimateModal(false);
        setEditExpense({});

        setTimeout(() => {
            setModal(false);
        }, 300);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ([ name, amount, category ].includes('')) {
            setMessage('All fields are required')

            setTimeout(() => {
                setMessage('');
            }, 3000);
            return;
        }

        saveExpense({name, amount, category, id, date})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CloseBtn}
                alt="Close modal"
                onClick={hideModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animateModal ? "animar" : "cerrar"}`}
        >
            <legend>{editExpense.name ? "Edit Expense" : "New Expense"}</legend>
            {message && <Message tipo="error">{message}</Message>}

            <div className='campo'>
                <label htmlFor="name">Expense Name</label>

                <input 
                    id='name'
                    type="text"
                    placeholder='Add the name of the expense'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="amount">Amount</label>

                <input 
                    id='amount'
                    type="number"
                    placeholder='Add the amount of the expense'
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="category">Category</label>

                <select 
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="various">Various</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>

            <input 
                type="submit" 
                value={editExpense.name ? "Save Changes" : "Add Expense"}
            />
        </form>

    </div>
  )
}

export default Modal