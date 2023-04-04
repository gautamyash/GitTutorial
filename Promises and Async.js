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
