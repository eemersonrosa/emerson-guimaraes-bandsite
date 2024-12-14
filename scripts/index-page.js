// Array of comments data
const comments = [
	{
		name: "Victor Pinto",
		timestamp: "11/02/2023",
		text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
	},
	{
		name: "Christina Cabrera",
		timestamp: "10/28/2023",
		text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		name: "Isaac Tadesse",
		timestamp: "10/20/2023",
		text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
];

/**
 * Function to render a single comment.
 * @param {Object} comment - The comment data object.
 * @param {string} comment.name - The name of the commenter.
 * @param {string} comment.timestamp - The timestamp of the comment.
 * @param {string} comment.text - The text of the comment.
 */
function renderComment(comment) {
	const commentsList = document.getElementById("comments-default-list");

	const commentDiv = document.createElement("div");
	commentDiv.classList.add("comment");

	const avatar = document.createElement("img");
	avatar.src =
		"https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1733892763~exp=1733896363~hmac=76ad2184c1ff85c9e59d3d4027f49131e745146163b93e6e7f5f0445b74a81d7&w=1380";
	avatar.alt = `${comment.name}'s avatar`;

	const commentContent = document.createElement("div");

	const name = document.createElement("h3");
	name.textContent = comment.name;

	const timestamp = document.createElement("small");
	timestamp.textContent = comment.timestamp;

	const text = document.createElement("p");
	text.textContent = comment.text;

	commentContent.appendChild(name);
	commentContent.appendChild(timestamp);
	commentContent.appendChild(text);

	commentDiv.appendChild(avatar);
	commentDiv.appendChild(commentContent);

	commentsList.appendChild(commentDiv);
}

/**
 * Function to render all comments.
 */
function renderComments() {
	const commentsList = document.getElementById("comments-default-list");
	commentsList.innerHTML = ""; // Clear existing comments
	comments.forEach(renderComment); // Render each comment
}

// Initial render of comments on page load
renderComments();

/**
 * Event listener for the comment form submission.
 * Prevents the default form submission behavior and adds a new comment.
 */
document
	.getElementById("comment-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		const nameInput = document.getElementById("name");
		const commentInput = document.getElementById("comment");

		const newComment = {
			name: nameInput.value,
			timestamp: new Date().toLocaleDateString(),
			text: commentInput.value,
		};

		comments.push(newComment); // Add new comment to the comments array
		renderComments(); // Re-render comments

		// Clear form inputs
		nameInput.value = "";
		commentInput.value = "";
	});
