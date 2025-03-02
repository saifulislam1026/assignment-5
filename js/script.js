const main = document.getElementById('btn-first');
main.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'main.html';
});

const buttons = document.querySelectorAll('.btn-task');
for (let q = 0; q < buttons.length; q++) {
    const button = buttons[q];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Board Updated Successfully');
        button.disabled = true;
        const taskCount = document.getElementById('task-count');
        let addTask = parseInt(taskCount.innerText);
        const taskPlus = document.getElementById('task-plus');
        let plusTask = parseInt(taskPlus.innerText);
        if (!isNaN(addTask)) {
            const sum = addTask - 1;
            document.getElementById('task-count').innerText = sum;
        }
        if (!isNaN(plusTask)) {
            const sum = plusTask + 1;
            document.getElementById('task-plus').innerText = sum;
        }
        const text = document.createElement('p');
        text.textContent = 'You have completed the task Fix Mobile Button Issue at 12:10:20 AM'
        const newText = document.getElementById('clear-container');
        text.classList.add('bg-indigo-200', 'p-3', 'rounded-lg', 'mt-8');
        if (text) {
            newText.appendChild(text)
        }
        else {
            alert('Do not excess data');
        }
        document.getElementById('btn-remove').addEventListener('click', function () {
            text.remove();
        })
    })
}
document.getElementById('end-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Congrats!! You Have Completed all The Current Task');
})

const currentDate = new Date();

const formattedDate = currentDate.toDateString();

document.getElementById("date-current").innerText = formattedDate;
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor() {
    document.documentElement.style.backgroundColor = getRandomColor();
}