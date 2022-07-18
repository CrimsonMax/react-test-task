import './SortedList.css'
import { Post } from "./Post"
import { Loader } from './Loader'

export const SortedList = (props) => {
  return (
    <div className="list">
      {props.flag
        ? <Loader />
        : props.postArray.map(postInfo => <Post key={postInfo.question_id} post={postInfo} />)
      }
    </div>
  )
}