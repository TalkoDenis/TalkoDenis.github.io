function calculateDaysSince(dateString) {
    const startDate = new Date(dateString);
    if (isNaN(startDate)) {
        console.error("Invalid date provided");
        return 0;
    }

    const today = new Date();
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const diffTime = current - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function updateDaysCounter(dateString, elementId) {
    const days = calculateDaysSince(dateString);
    const counterElement = document.getElementById(elementId);
    if (!counterElement) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
    }
    counterElement.textContent = `The war has been going on for ${days} days.`;
}

updateDaysCounter("2022-02-24", "days-counter");
