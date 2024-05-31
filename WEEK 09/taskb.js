const guestForm = document.getElementById('guestForm');
const invitationsDiv = document.getElementById('invitations');
const guests = [];

guestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const rsvp = document.getElementById('rsvp').value === 'true';

    guests.push({ name, age: parseInt(age), rsvp });

    guestForm.reset();
    displayInvitations();
});

function displayInvitations() {
    invitationsDiv.innerHTML = guests.map(guest => `
        <div class="invitation">
            <p><strong>Name:</strong> ${guest.name}</p>
            <p><strong>Age:</strong> ${guest.age}</p>
            <p><strong>RSVP Status:</strong> ${guest.rsvp ? 'Confirmed' : 'Pending'}</p>
        </div>
    `).join('');
}