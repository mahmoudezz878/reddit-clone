import RedditCard from "../Component/Card/RedditCard";

const Home = ({posts}) => {
  return (
    <div className="bodyContainer">
      {posts.map((post) => {
        return <RedditCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Home;
