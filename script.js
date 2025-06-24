const username = "shreya-github01";  // Replace this with your GitHub username
const url = `https://api.github.com/users/${username}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const profileHTML = `
      <img src="${data.avatar_url}" alt="${data.login}">
      <h2>${data.name || data.login}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p>👥 ${data.followers} followers • ${data.following} following</p>
      <a href="${data.html_url}" target="_blank">Visit GitHub Profile</a>
    `;
    document.getElementById("profile").innerHTML = profileHTML;
  })
  .catch(err => {
    document.getElementById("profile").innerHTML = "<p>Failed to load profile.</p>";
    console.error(err);
  });
