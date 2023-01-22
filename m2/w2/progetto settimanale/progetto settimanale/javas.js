var toggleBtn = document.getElementById('toggle-btn');
    toggleBtn.onclick = function() {
        this.classList.toggle('toggle-btn--dark');
        document.body.classList.toggle('dark-mode');
        document.getElementById("demo").innerHTML = '<img class="divisorio" src="./assets/img/home/marro.png">';

    };