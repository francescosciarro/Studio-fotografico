
//Messaggio di prenotazione effettuata
document.getElementById("prenota").addEventListener("submit", (event) => {
    event.preventDefault()
    document.getElementById("success").style.display = "block"
})

//Cambio colore appuntamento
const appuntamentoSpan = document.getElementById('appuntamento');
const inputFields = document.querySelectorAll('#prenota input');

function calculateCompletionPercentage(inputs) {
    const totalInputs = inputs.length;
    let filledInputs = 0;
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            filledInputs++;
        }
    });
    if (filledInputs == 0) {
        return null
    }

    return filledInputs / totalInputs;
}
inputFields.forEach(input => {
    input.addEventListener('input', () => {
        const completionPercentage = calculateCompletionPercentage(inputFields);
        console.log(completionPercentage)
        appuntamentoSpan.style.fontSize = `${100 + completionPercentage * 50}%`;
        appuntamentoSpan.style.color = `rgb(0,${completionPercentage * 200} ,0 )`;
    });
});
