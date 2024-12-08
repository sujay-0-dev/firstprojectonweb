document.addEventListener('DOMContentLoaded', function() {
    feather.replace();

    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            navItems.forEach(navItem => navItem.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Bus Scheduling
    const scheduleForm = document.getElementById('schedule-form');
    const scheduleTable = document.getElementById('schedule-table').getElementsByTagName('tbody')[0];

    scheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const newRow = scheduleTable.insertRow();
        formData.forEach(value => {
            const cell = newRow.insertCell();
            cell.textContent = value;
        });
        this.reset();
    });

    // Route Management
    const routeForm = document.getElementById('route-form');
    const routeTable = document.getElementById('route-table').getElementsByTagName('tbody')[0];

    routeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const newRow = routeTable.insertRow();
        formData.forEach(value => {
            const cell = newRow.insertCell();
            cell.textContent = value;
        });
        this.reset();
    });

    // Crew Management
    const crewForm = document.getElementById('crew-form');
    const crewTable = document.getElementById('crew-table').getElementsByTagName('tbody')[0];

    crewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const newRow = crewTable.insertRow();
        formData.forEach(value => {
            const cell = newRow.insertCell();
            cell.textContent = value;
        });
        const assignedBusCell = newRow.insertCell();
        assignedBusCell.textContent = 'Not Assigned';
        this.reset();
    });
        // Add placeholder values for Name and Role
        newRow.insertCell(2).textContent = 'John Doe';
        newRow.insertCell(3).textContent = 'Driver';
        this.reset();
    });
    // Profile Editing
const editProfileButton = document.getElementById('edit-profile-button');
const editProfileForm = document.getElementById('edit-profile-form');
const profileDetails = document.querySelector('.profile-details');

editProfileButton.addEventListener('click', () => {
    profileDetails.style.display = 'none';
    editProfileForm.style.display = 'block';
});

editProfileForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('edit-name').value;
    const contact = document.getElementById('edit-contact').value;
    const email = document.getElementById('edit-email').value;

    alert(`Profile updated:\nName: ${name}\nContact: ${contact}\nEmail: ${email}`);
    
    // Update the profile details (simulate database update)
    document.querySelector('.profile-details').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Employee ID:</strong> D12345</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assigned Bus:</strong> DL 01 AB 1234</p>
        <div class="profile-actions">
            <button id="edit-profile-button" class="profile-action-btn">Edit Profile</button>
        </div>
    `;
    editProfileForm.style.display = 'none';
    profileDetails.style.display = 'block';
});

