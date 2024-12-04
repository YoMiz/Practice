function changeListType() {
    console.log("changing");
    if ($('.articles').css('display') === 'none') {
        $('.articles').css('display', 'flex');
        $('.journals').css('display', 'none');
    } else {
        $('.articles').css('display', 'none');
        $('.journals').css('display', 'flex');
        getTasks();
    }
}

let task1 = document.getElementsByClassName("task1");
let task2 = document.getElementsByClassName("task2");
let task3 = document.getElementsByClassName("task3");

function getTasks() {
    for (let i = 0; i < task1.length; i++) {
        console.log(task1[i].innerText);
    }
    for (let i = 0; i < task2.length; i++) {
        console.log(task2[i].innerText);
    }
    for (let i = 0; i < task3.length; i++) {
        console.log(task3[i].innerText);
    }
}

// Corrected code
document.querySelectorAll('.journal-title').forEach(item => {
    item.addEventListener('click', event => {
        event.target.classList.toggle('highlight');
    });
});
