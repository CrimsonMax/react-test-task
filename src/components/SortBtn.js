import './SortBtn.css'
import { useState } from 'react';
import _ from 'lodash';

export const SortBtn = (props) => {
  const [toSort, setToSort] = useState(true)

  const toggle = () => {
    props.posts.length > 0 && setToSort(!toSort)
  }

  const sort = () => {
    toggle()
    const sortedPosts = _.sortBy(props.posts, [post => post.time])
    props.action(sortedPosts.reverse())
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