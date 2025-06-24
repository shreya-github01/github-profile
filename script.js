function getGitHubData() {
  const username = document.getElementById("username").value;
  if (!username) return;

  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").innerText = data.name || data.login;
      document.getElementById("bio").innerText = data.bio || "No bio provided.";
      document.getElementById("followers").innerText = data.followers;
      document.getElementById("repos").innerText = data.public_repos;

      document.getElementById("profileCard").classList.remove("hidden");
    })
    .catch(err => alert("Invalid username or error fetching data."));
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.getElementById("flowers").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}
setInterval(createFlower, 300);
