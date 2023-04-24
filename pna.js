const posts = [];

const createPost = async (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 2000);
  });
};

const deletePost = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("No posts to delete.");
      }
    }, 1000);
  });
};
const createAndDeletePosts = async () => {
    try {
      const post1 = await createPost({ title: "My first post" });
      console.log(`Created post with title "${post1.title}"`);
      
      const post2 = await createPost({ title: "My second post" });
      console.log(`Created post with title "${post2.title}"`);
      
      const deletedPost = await deletePost();
      console.log(`Deleted post with title "${deletedPost.title}"`);
      
      const remainingPosts = posts.map((post) => post.title);
      console.log(`Remaining posts: ${remainingPosts}`);
    } catch (error) {
      console.error(error);
    }
  };
  
  createAndDeletePosts();
  