const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach((item) => {
    item.addEventListener('click', function() {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        dropdownToggle.textContent = item.textContent;
    });
});