const outputHtml = document.querySelector('.row');

let background;
let content;


for (let i=1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        content = 'FizzBuz';
        background = 'bg-red';
    } else if (i % 5 === 0) {
        content = 'Buz';
        background = 'bg-yellow';
    } else if (i % 3 === 0) {
        content = 'Fizz';
        background = 'bg-aqua';
    } else {
        content = `${i}`;
        background = 'bg-blue';
    }


    outputHtml.innerHTML +=`<div class="col py-3">
        <div class="box ${background} d-flex justify-content-center align-items-center font-weight-bold">
            ${content}
        </div>
    </div>`;

}