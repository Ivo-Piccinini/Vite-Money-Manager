import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatDate } from '../src/helpers';

import savingIcon from '../img/icono_ahorro.svg'
import houseIcon from '../img/icono_casa.svg'
import foodIcon from '../img/icono_comida.svg'
import variousIcon from '../img/icono_gastos.svg'
import leisureIcon from '../img/icono_ocio.svg'
import healthIcon from '../img/icono_salud.svg'
import subscriptionsIcon from '../img/icono_suscripciones.svg'

const iconDictionary = {
    saving : savingIcon,
    food : foodIcon,
    house : houseIcon,
    various : variousIcon,
    leisure : leisureIcon,
    health : healthIcon,
    subscriptions : subscriptionsIcon,
}

const Expense = ({expense, setEditExpense, deleteExpense}) => {
    const {category, name, amount, id, date} = expense;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => deleteExpense(id)}
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img
                        src={iconDictionary[category]}
                        alt='Expense icon'
                    />
                    <div className='descripcion-gasto'>
                        <p className='categoria'>{category}</p>
                        <p className='nombre-gasto'>{name}</p>
                        <p className='fecha-gasto'>
                            Added on: {''}
                            <span>{formatDate(date)}</span>
                        </p>
                    </div>
                </div>

                <p className='cantidad-gasto'>${amount}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense