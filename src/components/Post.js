import './Post.css'
import avatar from './avatar.jpg'

export const Post = () => {
  return (
    <a href='https://www.google.com/' target='_blank' rel='noopener noreferrer' className="post">
      <img src={avatar} alt="" className="post__image" />
      <p className="post__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus laudantium sed voluptatem totam repudiandae quod, eaque rem fuga neque dolore dolorem voluptatibus obcaecati necessitatibus beatae inventore facilis tempore velit ipsa et distinctio itaque rerum architecto. Debitis laborum mollitia dignissimos delectus pariatur labore non consectetur quos atque? Ipsa quam beatae, officiis fuga, distinctio repellat enim omnis nemo ex illum culpa voluptas. Quae cumque voluptatum, porro ab distinctio eaque reprehenderit quas accusamus doloremque dicta soluta reiciendis ratione. Magni unde suscipit culpa rerum, nostrum ad odit dolores facere, accusamus animi nesciunt eos officia qui nulla. Unde repellat, perferendis corrupti neque error nostrum!</p>
      <div className="post__date">01.06.2022</div>
    </a>
  )
}