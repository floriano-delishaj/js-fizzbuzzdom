const outputHtml = document.querySelector('.row');


for (let i=1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        outputHtml.innerHTML += `<div class="col py-3">
                                    <div class="box bg-red d-flex justify-content-center align-items-center font-weight-bold">
                                        FizzBuzz
                                    </div>
                                 </div>`;
    } else if (i % 5 === 0) {
        outputHtml.innerHTML += `<div class="col py-3">
                                    <div class="box bg-yellow d-flex justify-content-center align-items-center font-weight-bold">
                                        Buzz
                                    </div>
                                 </div>`;
    } else if (i % 3 === 0) {
        outputHtml.innerHTML += `<div class="col py-3">
                                    <div class="box bg-aqua d-flex justify-content-center align-items-center font-weight-bold">
                                        Fizz
                                    </div>
                                 </div>`;
    } else {
        outputHtml.innerHTML += `<div class="col py-3">
                                    <div class="box bg-blue d-flex justify-content-center align-items-center font-weight-bold">
                                        ${i}
                                    </div>
                                 </div>`;
    }

}