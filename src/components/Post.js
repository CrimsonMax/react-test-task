import './Post.css'

export const Post = (props) => {
  return (
    <a
      href={props.post.link}
      target='_blank'
      rel='noopener noreferrer'
      className="post"
    >
      <img src={props.post.owner.profile_image} alt="avatar" className="post__image" />
      <p className="post__title">{props.post.title}</p>
      <div className="post__date">{new Date(props.post.creation_date * 1000).toLocaleDateString()}</div>
    </a>
  )
}