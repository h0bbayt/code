document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            alert('Место выбрано!');
        });
    });
});