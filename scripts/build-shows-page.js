// Shows data array
// shortcut: fixed demo dates; move them forward once they are in the past.
const showsData = [
	{
		date: "Sat Jul 17 2027",
		venue: "The Lantern Room",
		location: "Portland, OR",
	},
	{
		date: "Fri Aug 06 2027",
		venue: "Harbor & Vine",
		location: "Seattle, WA",
	},
	{
		date: "Sat Aug 21 2027",
		venue: "The Gilded Owl",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Sep 10 2027",
		venue: "Echo Parlor",
		location: "Los Angeles, CA",
	},
	{
		date: "Sat Oct 02 2027",
		venue: "The Brass Note",
		location: "Austin, TX",
	},
	{
		date: "Fri Oct 22 2027",
		venue: "Northlight Hall",
		location: "Denver, CO",
	},
];

/**
 * Creates one cell of a show row: a label (visible on mobile only,
 * hidden by CSS on tablet/desktop where the column header takes over)
 * plus the value.
 * @param {string} labelText - Column label ("Date", "Venue", "Location").
 * @param {string} value - The show's value for that column.
 * @param {string} modifier - Extra class for column-specific styling.
 * @returns {HTMLElement} The cell element.
 */
function createShowCell(labelText, value, modifier) {
	const cell = document.createElement("div");
	cell.classList.add("show-cell", modifier);

	const label = document.createElement("span");
	label.classList.add("show-cell-label");
	label.textContent = labelText;

	const text = document.createElement("p");
	text.textContent = value;

	cell.appendChild(label);
	cell.appendChild(text);

	return cell;
}

/**
 * Creates a show row element.
 * @param {Object} show - The show data object.
 * @returns {HTMLElement} The show row element.
 */
function createShowItem(show) {
	const showItem = document.createElement("article");
	showItem.classList.add("show-item");

	showItem.appendChild(createShowCell("Date", show.date, "show-cell--date"));
	showItem.appendChild(createShowCell("Venue", show.venue, "show-cell--venue"));
	showItem.appendChild(
		createShowCell("Location", show.location, "show-cell--location")
	);

	const button = document.createElement("button");
	button.classList.add("buy-tickets");
	button.type = "button";
	button.textContent = "BUY TICKETS";
	showItem.appendChild(button);

	// Click event for "selected" styling
	showItem.addEventListener("click", () => {
		document.querySelectorAll(".show-item").forEach((item) => {
			item.classList.remove("selected");
		});
		showItem.classList.add("selected");
	});

	return showItem;
}

/**
 * Renders all shows. The responsive layout (column headers vs per-cell
 * labels) is handled entirely by CSS, so this only runs once.
 */
function renderShows() {
	const showsList = document.getElementById("shows-list");
	showsList.innerHTML = "";

	showsData.forEach((show) => {
		showsList.appendChild(createShowItem(show));
	});
}

renderShows();
