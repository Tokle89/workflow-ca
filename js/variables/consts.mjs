export const API_BASE_URL = "https://api.noroff.dev/api/v1";
export const loggedInUser = localStorage.getItem("loggedInUser");
export const host = "api.noroff.dev";
export const postForm = document.getElementById("postForm");
export const createPostURL = `${API_BASE_URL}/social/posts`;
export const postsURL = `${API_BASE_URL}/social/posts?limit=20&offset=0&_comments=true&_author=true&_reactions=true&_count=true`;
// export const postsURL = `${API_BASE_URL}/social/posts?limit=10&offset=113&_comments=true&_author=true&_reactions=true&_count=true`;

export const urlParams = new URLSearchParams(window.location.search);
export const userName = urlParams.get("name");
export const profileURL = `${API_BASE_URL}/social/profiles/${userName}?_following=true&_followers=true&_posts=true`;
export const profilePostsURL = `${API_BASE_URL}/social/profiles/${userName}/posts?_following=true&_followers=true&_posts=true&_comments=true&_author=true&_reactions=true`;
export const reactionsAndCommentsURL = `${API_BASE_URL}/social/profiles/${userName}?_reactions=true&_comments=true&_count=true`;
export const token = localStorage.getItem("accessToken");
export const currentProfileName = localStorage.getItem("currentProfileName");
// export const loggedInUserPosts = JSON.parse(localStorage.getItem("loggedInUserPosts"));
export const currentProfilePosts = JSON.parse(localStorage.getItem("profilePostsData"));
// export const searchURL = `${API_BASE_URL}/social/posts?&limit=10&offset=0&_comments=true&_author=true&_reactions=true&_count=true`;
export const searchURL = `${API_BASE_URL}/social/posts?_comments=true&_author=true&_reactions=true&_count=true`;
export const profilePostsData = JSON.parse(localStorage.getItem("profilePostsData"));
export const postId = localStorage.getItem("postId");
export const authorName = localStorage.getItem("authorName");

export const profileLinks = document.querySelectorAll(".profile-link");
// console.log(profileLinks.length);
export const clickHandler = (event) => {
  event.preventDefault();
  const originalHref = `../profile/index.html?name=${loggedInUser}`;
  if (originalHref) {
    event.target.href = `../profile/index.html?name=${loggedInUser}`; // Modify the href
  }
  event.target.href = `${originalHref}`;
  window.location.href = event.target.href;
};

export const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const addNewPostOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  // body: JSON.stringify(newPostData),
};

export const addNewCommentURL = `${API_BASE_URL}/social/posts/${postId}/comment`;
export const newCommentOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: "What an awesome movie! Recommended", // Required
  // "replyToId": 0 // Optional - Only required if replying to another comment
};

export const editPostOptions = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: {
    //Get these values from the form (postForm? edit in addNewPost?)
    title: "string",
    body: "string",
    tags: ["string"],
    media: "https://url.com/image.jpg",
    // body: JSON.stringify(postData),
  },
};

export const reactToPostURL = `${API_BASE_URL}/social/posts/${postId}/react/👍`;
export const reactionOptions = {
  method: "PUT",
  headers: {
    host: host, // Gave error without this
    Authorization: `Bearer ${token}`,
  },
  // body: {
  //   // body: "", // Required - remember the 👍 in the put url
  //   // replyToId: 0, // Optional - Only required if replying to another comment
  // },
};

export const deletePostURL = `${API_BASE_URL}/social/posts/${postId}`;
export const deletePostOptions = {
  method: "DELETE",
  headers: {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  // body: JSON.stringify(newPostData),
};

export const followUserURL = `${API_BASE_URL}/social/posts/${authorName}/follow`;
export const unFollowUserURL = `${API_BASE_URL}/social/posts/${authorName}/unfollow`;
export const followOptions = {
  method: "PUT",
  headers: {
    host: host, // Nescessary ???
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  // body: JSON.stringify(newPostData),
};
