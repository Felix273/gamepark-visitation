document.getElementById('visitorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the number of visitors
    const visitors = document.getElementById('visitors').value;

    if (visitors) {
        // Save to localStorage
        let currentVisitors = localStorage.getItem('parkVisitors') || 0;
        currentVisitors = parseInt(currentVisitors) + parseInt(visitors);
        localStorage.setItem('parkVisitors', currentVisitors);

        // Show SweetAlert popup
        Swal.fire({
            title: 'Success!',
            text: `You have successfully recorded ${visitors} visitors.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Clear the form
        document.getElementById('visitorForm').reset();
    }
});
