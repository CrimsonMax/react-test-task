import './SortBtn.css'
import { useState } from 'react';
import _ from 'lodash';

export const SortBtn = (props) => {
  const [toSort, setToSort] = useState(true)

  const toggle = () => {
    setToSort(!toSort)
  }

  const sort = () => {
    // console.log(toSort)
    toggle()
    const sortedPosts = _.sortBy(props.posts, [post => post.time])
    props.action(sortedPosts.reverse())
    // console.log(toSort)
  }

  return (
    <button
      onClick={sort}
      className={toSort ? 'sortBtn sortBtn-down' : 'sortBtn sortBtn-up'}
    >
      Sort by date
    </button>
  )
}