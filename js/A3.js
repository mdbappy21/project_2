// A.js

document.addEventListener('DOMContentLoaded', function () {
    const selectAssignment = document.getElementById('selectAssignment');

    selectAssignment.addEventListener('change', function () {
        const selectedOption = selectAssignment.options[selectAssignment.selectedIndex].value;

        // Perform redirection based on the selected option
        switch (selectedOption) {
            case 'assignment1':
                window.location.href = 'https://docs.google.com/document/d/1FvSbGbv1fobsfYiwL_8PVxxyUtTYriuW/edit?usp=sharing&ouid=104593746959853275849&rtpof=true&sd=true';
                break;
            case 'assignment2':
                window.location.href = '#';
                break;
            case 'assignment3':
                window.location.href = '#';
                break;
            case 'assignment4':
                window.location.href = '#';
                break;
            case 'assignment5':
                window.location.href = '#';
                break;
            default:
                // Handle the default case or show an error message
                alert('Please select an assignment.');
        }
    });
});
