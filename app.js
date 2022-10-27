const correctAnswers = ["B", "B", "B", "B"];
const resultDiv = document.querySelector(".result");

// Reference to form
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", (event) => {
    // Prevent the page from immediatly refresh on submit
    event.preventDefault();

    let score = 0;
    //"form" is the reference to the html form tag
    // q1, q2, q3, q4 are the radio buttons, we can access them because we gave them a "name" attribute (works with IDs too)
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        // We check each iteration if the answer is equal to the ones stored in the correctAnswers array.
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    console.log("TOTAL SCORE IS: ", score);

    // Here we remove the bootstrap class d-none in order to display the result div
    resultDiv.classList.remove("d-none");
    // We don't need to get a reference to the span itself. We can chain another querySelector on the parent element
    // resultDiv.querySelector(".score").textContent = score + "%";

    // This is a window object's method. Same as typing window.scrollTo(0,0)
    scrollTo(0, 0);

    let output = 0;
    const animation = setInterval(() => {
        if (output === score) {
            clearInterval(animation);
        } else {
            output++;
        }
        resultDiv.querySelector(".score").textContent = output + "%";
    }, 24);
});