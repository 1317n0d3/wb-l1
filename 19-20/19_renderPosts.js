const renderPosts = (posts) => {
  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${post.text}</h3>
      <p>${new Date(post.date)}</p>
    `;

    // Добавление элемента в список postList
    postList.appendChild(li);
  });
};
