// Array of comments data
const comments = [
	{
		name: "Maya Castellanos",
		timestamp: "06/12/2026",
		text: "Caught the Lantern Room warm-up show last week and they closed with the whole crowd singing unplugged. No phone recording does it justice. If the tour comes anywhere near you, go.",
	},
	{
		name: "Dario Fields",
		timestamp: "05/30/2026",
		text: "Glass Horizon has been on repeat in my car for a month straight. Track four hits different at 1am on an empty highway. Cannot wait to hear it live in Seattle.",
	},
	{
		name: "Priya Raman",
		timestamp: "05/17/2026",
		text: "I found their homemade EP years ago in a friend's playlist and it's been so fun watching the Flock grow. They still sound like themselves, just bigger. Proud of these four.",
	},
];

// Self-contained placeholder avatar (inline SVG) — no external requests
const AVATAR_PLACEHOLDER =
	"data:image/svg+xml;utf8," +
	encodeURIComponent(
		"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>" +
			"<rect width='64' height='64' fill='#e1e1e1'/>" +
			"<circle cx='32' cy='25' r='11' fill='#afafaf'/>" +
			"<path d='M10 60c2-13 11-19 22-19s20 6 22 19z' fill='#afafaf'/>" +
			"</svg>"
	);

/**
 * Renders a single comment.
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
	avatar.src = AVATAR_PLACEHOLDER;
	avatar.alt = `${comment.name}'s avatar`;

	const commentBody = document.createElement("div");
	commentBody.classList.add("comment-body");

	const commentHeader = document.createElement("div");
	commentHeader.classList.add("comment-header");

	const name = document.createElement("h3");
	name.textContent = comment.name;

	const timestamp = document.createElement("small");
	timestamp.textContent = comment.timestamp;

	const text = document.createElement("p");
	text.textContent = comment.text;

	commentHeader.appendChild(name);
	commentHeader.appendChild(timestamp);
	commentBody.appendChild(commentHeader);
	commentBody.appendChild(text);

	commentDiv.appendChild(avatar);
	commentDiv.appendChild(commentBody);

	commentsList.appendChild(commentDiv);
}

/**
 * Renders all comments, newest first.
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

		const name = nameInput.value.trim();
		const text = commentInput.value.trim();
		if (!name || !text) {
			return;
		}

		// Newest comments appear at the top of the list
		comments.unshift({
			name: name,
			timestamp: new Date().toLocaleDateString(),
			text: text,
		});
		renderComments();

		// Clear form inputs
		nameInput.value = "";
		commentInput.value = "";
	});
