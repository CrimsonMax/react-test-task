import './SortBtn.css'
import { useState } from 'react';

export const SortBtn = () => {
  const [toSort, setToSort] = useState(true)


  const toggle = () => {
    setToSort(!toSort)
  }

  return (
    <button
      onClick={toggle}
      className={toSort ? 'sortBtn sortBtn-down' : 'sortBtn sortBtn-up'}
    >
      Sort by date
    </button>
  )
}