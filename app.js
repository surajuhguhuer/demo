document.getElementById("github-form").addEventListener("submit", async function (e) {
    e.preventDefault(); 
    
    const usernameInput = document.getElementById("username").value;
    try{
        const response = await axios.get(`https://api.github.com/users/${usernameInput}`);
    
        const userData = response.data;
    
        document.getElementById("avatar").src = userData.avatar_url;
        document.getElementById("username-display").textContent = userData.login;
        document.getElementById("profile-link").href = userData.html_url;
        document.getElementById("profile-link").textContent = userData.html_url;
        document.getElementById("public-repos").textContent = userData.public_repos;
        document.getElementById("private-repos").textContent = userData.total_private_repos;
        document.getElementById("followers").textContent = userData.followers;
        document.getElementById("following").textContent = userData.following;
    }
        
    catch{
        alert("Invalid User Input",);
    }
});
