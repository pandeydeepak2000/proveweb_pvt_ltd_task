// Variable to keep track of the currently active card index
let activeCardIndex = null;

// Function to toggle the display of options for a card
function toggleOptions(cardIndex) {
    // Get the options element for the clicked card
    const options = document.querySelector(`#options-${cardIndex}`);

    // If there's an active card, hide its options and uncheck its radio button
    if (activeCardIndex !== null) {
        const activeOptions = document.querySelector(`#options-${activeCardIndex}`);
        activeOptions.style.display = 'none'; // Hide options of the active card
        const activeRadio = document.querySelector(`#radio-${activeCardIndex}`);
        activeRadio.checked = false; // Uncheck radio button of the active card
    }

    // If the clicked card is the same as the active card, reset activeCardIndex
    if (activeCardIndex === cardIndex) {
        activeCardIndex = null; // Reset active card index
    } else {
        options.style.display = 'block'; // Show options of the clicked card
        activeCardIndex = cardIndex; // Update active card index
    }
}
