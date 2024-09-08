function convertirKmAMillas() {
    const km = document.getElementById('km').value;
    const millas = km * 0.621371; // Conversión de kilómetros a millas
    document.getElementById('millasReusltado').innerText = `${km} kilómetros son ${millas.toFixed(2)} millas.`;
}

function convertirMetrosAPies() {
    const metros = document.getElementById('metros').value;
    const pies = metros * 3.28084; // Conversión de metros a pies
    document.getElementById('piesResultado').innerText = `${metros} metros son ${pies.toFixed(2)} pies.`;
}
