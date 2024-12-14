// Shows data array
const showsData = [
	{
		date: "Mon Sept 09 2024",
		venue: "Ronald Lane",
		location: "San Francisco, CA",
	},
	{
		date: "Tue Sept 17 2024",
		venue: "Pier 3 East",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Oct 12 2024",
		venue: "View Lounge",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Nov 16 2024",
		venue: "Hyatt Agency",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Nov 29 2024",
		venue: "Moscow Center",
		location: "San Francisco, CA",
	},
	{
		date: "Wed Dec 18 2024",
		venue: "Press Club",
		location: "San Francisco, CA",
	},
];

/**
 * Function to create a header row for the shows list.
 * @returns {HTMLElement} The header row element.
 */
function createHeaderRow() {
	const headerRow = document.createElement("div");
	headerRow.classList.add("show-header");

	const dateHeader = document.createElement("p");
	dateHeader.classList.add("show-date");
	dateHeader.textContent = "Date";

	const venueHeader = document.createElement("p");
	venueHeader.classList.add("show-venue");
	venueHeader.textContent = "Venue";

	const locationHeader = document.createElement("p");
	locationHeader.classList.add("show-location");
	locationHeader.textContent = "Location";

	// Append headers to the header row
	headerRow.appendChild(dateHeader);
	headerRow.appendChild(venueHeader);
	headerRow.appendChild(locationHeader);

	return headerRow;
}

/**
 * Function to create a show item element.
 * @param {Object} show - The show data object.
 * @param {string} show.date - The date of the show.
 * @param {string} show.venue - The venue of the show.
 * @param {string} show.location - The location of the show.
 * @returns {HTMLElement} The show item element.
 */
function createShowItem(show) {
	const showItem = document.createElement("div");
	showItem.classList.add("show-item");

	const date = document.createElement("p");
	date.classList.add("show-date");
	date.textContent = show.date;

	const venue = document.createElement("p");
	venue.classList.add("show-venue");
	venue.textContent = show.venue;

	const location = document.createElement("p");
	location.classList.add("show-location");
	location.textContent = show.location;

	const button = document.createElement("button");
	button.classList.add("buy-tickets");
	button.textContent = "BUY TICKETS";

	// Append elements to the show item
	showItem.appendChild(date);
	showItem.appendChild(venue);
	showItem.appendChild(location);
	showItem.appendChild(button);

	// Add hover and click styles
	showItem.addEventListener("click", () => {
		document.querySelectorAll(".show-item").forEach((item) => {
			item.classList.remove("selected");
		});
		showItem.classList.add("selected");
	});

	return showItem;
}

/**
 * Function to render all shows on the page.
 */
function renderShows() {
	const showsList = document.getElementById("shows-list");

	// Create and append the header row
	const headerRow = createHeaderRow();
	showsList.appendChild(headerRow);

	// Create and append each show item
	showsData.forEach((show) => {
		const showItem = createShowItem(show);
		showsList.appendChild(showItem);
	});
}

// Render shows on page load
renderShows();
