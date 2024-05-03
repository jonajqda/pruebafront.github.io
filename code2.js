document.addEventListener('DOMContentLoaded', function () {
    const answers = document.querySelectorAll('#answers li');

    answers.forEach(answer => {
        answer.addEventListener('click', function () {
            answers.forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});
