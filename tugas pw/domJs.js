
        const changeColorButton = document.getElementById('changeColorButton');
        const dataTable = document.getElementById('dataTable');

        changeColorButton.addEventListener('click', function() {
            dataTable.classList.toggle('highlight');
        });
