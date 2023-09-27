// function createPostCard(post) {
//   const card = document.createElement("div");
//   card.classList.add("card", "mx-0", "my-3", "bg-info", "shadow-sm");

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body", "container");

//   const authorDiv = document.createElement("div");
//   authorDiv.classList.add("d-flex", "align-items-start", "justify-content-center");

//   const avatarDiv = document.createElement("div");
//   avatarDiv.classList.add("col-4", "col-sm-2", "position-relative", "z-3", "me-2");
//   const avatarImg = document.createElement("img");
//   avatarImg.alt = "Author Avatar";
//   avatarImg.classList.add("movie-poster", "img-fluid", "me-2", "mb-0", "rounded", "shadow");

//   if (post.author.avatar) {
//     avatarImg.src = post.author.avatar;
//   } else {
//     // Use Picsum placeholder if avatar is'nt there
//     const uniqueQueryParam = Math.floor(Math.random() * (500 - 200 + 1) + 100);
//     avatarImg.src = `https://picsum.photos/id/${uniqueQueryParam}/200/300`;
//   }

//   avatarDiv.appendChild(avatarImg);

//   const postContentDiv = document.createElement("div");
//   postContentDiv.classList.add("col-8", "col-sm-10", "justify-content-start");

//   const authorInfoDiv = document.createElement("div");
//   authorInfoDiv.classList.add("d-block", "d-sm-flex", "align-items-center");

//   const authorName = document.createElement("h6");
//   authorName.classList.add("d-sm-flex", "card-title", "mb-0", "me-1", "ps-1");
//   authorName.textContent = post.author.name;
//   const viewProfileLink = document.createElement("a");
//   viewProfileLink.classList.add("nav-link", "text-primary", "px-2", "m-0", "pt-1", "pb-1", "text-nowrap");
//   viewProfileLink.href = "../profile/";
//   viewProfileLink.innerHTML = '<i class="bi bi-person-fill"></i> View profile';
//   authorInfoDiv.appendChild(authorName);
//   authorInfoDiv.appendChild(viewProfileLink);

//   const postDate = document.createElement("p");
//   postDate.classList.add("card-subtitle", "mb-1", "text-muted", "ps-1");
//   const createdDate = new Date(post.created);
//   postDate.textContent = createdDate.toLocaleString();

//   const imdbLink = document.createElement("a");
//   imdbLink.classList.add("nav-link", "text-primary", "py-0", "m-0", "ps-2");
//   imdbLink.href = post.imdbLink;
//   imdbLink.innerHTML = `<i class="bi bi-film me-1"></i> ${post.title}`;

//   const postText = document.createElement("p");
//   postText.classList.add("card-text", "my-0", "ps-2");
//   postText.textContent = post.body;

//   authorDiv.appendChild(avatarDiv);
//   authorDiv.appendChild(postContentDiv);
//   postContentDiv.appendChild(authorInfoDiv);
//   postContentDiv.appendChild(postDate);
//   postContentDiv.appendChild(imdbLink);
//   postContentDiv.appendChild(postText);

//   const hr = document.createElement("hr");

//   const reactionCountElement = document.createElement("div");
//   reactionCountElement.classList.add("reaction-count", "text-primary", "ms-1", "pb-1");
//   const commentsCount = post._count.comments;
//   const reactionsCount = post._count.reactions;
//   reactionCountElement.textContent = `${reactionsCount} Likes, ${commentsCount} Comments`;
//   reactionCountElement.innerHTML = `<i class="me-1 bi bi-hand-thumbs-up"></i> ${reactionsCount} Likes <i class="ms-5 me-1 bi bi-chat-dots"></i> ${commentsCount} Comments `;

//   const buttonLikesRow = document.createElement("div");
//   buttonLikesRow.classList.add("d-flex", "justify-content-between");

//   const buttonContainer = document.createElement("div");
//   buttonContainer.classList.add("card-text");

//   const likeButton = document.createElement("button");
//   likeButton.classList.add("btn", "btn-warning", "btn-sm", "my-1", "mx-1");
//   likeButton.innerHTML = `<i class="bi bi-hand-thumbs-up"></i> Like`;

//   const shareButton = document.createElement("button");
//   shareButton.classList.add("btn", "btn-warning", "btn-sm", "my-1", "mx-1");
//   shareButton.innerHTML = `<i class="bi bi-share"></i> Share`;

//   const commentButton = document.createElement("button");
//   commentButton.classList.add("btn", "btn-warning", "btn-sm", "my-1", "mx-1");
//   commentButton.innerHTML = `<i class="bi bi-chat-dots"></i> Comment`;

//   buttonContainer.appendChild(likeButton);
//   buttonContainer.appendChild(shareButton);
//   buttonContainer.appendChild(commentButton);

//   const likesRepliesContainer = document.createElement("div");
//   likesRepliesContainer.classList.add("col-sm-5", "d-flex", "ps-0", "justify-content-sm-end");

//   const likesRepliesDiv = document.createElement("div");
//   likesRepliesDiv.classList.add("d-flex", "gap-3", "ms-3", "pt-2", "align-items-center");

//   const likesCount = document.createElement("div");
//   likesCount.classList.add("card-text", "text-muted", "py-0");
//   likesCount.innerHTML = `<i class="bi bi-hand-thumbs-up-fill text-primary"></i> ${reactionsCount} likes`;

//   const repliesCount = document.createElement("div");
//   repliesCount.classList.add("card-text", "text-muted", "py-0");
//   repliesCount.innerHTML = `<i class="bi bi-chat-dots text-primary"></i> ${commentsCount} replies`;

//   likesRepliesDiv.appendChild(likesCount);
//   likesRepliesDiv.appendChild(repliesCount);
//   likesRepliesContainer.appendChild(likesRepliesDiv);

//   cardBody.appendChild(authorDiv);
//   cardBody.appendChild(hr);
//   cardBody.appendChild(buttonLikesRow);
//   buttonLikesRow.appendChild(buttonContainer);
//   buttonLikesRow.appendChild(likesRepliesContainer);

//   card.appendChild(cardBody);

//   return card;
// }

// export default createPostCard;
