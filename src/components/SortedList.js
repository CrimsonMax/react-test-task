import './SortedList.css'
import { Post } from "./Post"

export const SortedList = ({props}) => {
  return (
    <div className="list">
      {props.map(postInfo => <Post key={postInfo.question_id} post={postInfo} />)}
    </div>
  )
}