import Post from "./Post";
import classes from "./PostsList.module.css";
function PostsList({ posts }) {
  return (
    <>
      <ul className={classes.posts}>
        {posts.map(({ authorName, bodyText }, i) => {
          return <Post author={authorName} body={bodyText} key={i} />;
        })}
      </ul>
    </>
  );
}

export default PostsList;
