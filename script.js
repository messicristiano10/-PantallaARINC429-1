const instrumentos = {
    motores: [
        { nombre: "Altímetro", imagen: "images/altimetro.png" },
        { nombre: "Anemómetro", imagen: "images/anemometro.png" }
    ],
    control: [
        { nombre: "Giroscopio", imagen: "images/giroscopio.png" },
        { nombre: "Piloto Automático", imagen: "images/piloto_automatico.png" }
    ],
    navegacion: [
        { nombre: "Radar", imagen: "images/radar.png" },
        { nombre: "GPS", imagen: "images/gps.png" }
    ]
};

const grupoSelect = document.getElementById("grupo");
const instrumentoSelect = document.getElementById("instrumento");
const valorInput = document.getElementById("valor");
const agregarBtn = document.getElementById("agregar");
const imagenDiv = document.getElementById("imagen-instrumento");

grupoSelect.addEventListener("change", () => {
    const grupo = grupoSelect.value;
    instrumentoSelect.innerHTML = '<option value="">--Seleccione un instrumento--</option>';
    imagenDiv.innerHTML = '';
    valorInput.value = '';
    valorInput.disabled = true;
    agregarBtn.disabled = true;

    if(grupo) {
        instrumentoSelect.disabled = false;
        instrumentos[grupo].forEach(instr => {
            const option = document.createElement("option");
            option.value = instr.nombre;
            option.text = instr.nombre;
            instrumentoSelect.appendChild(option);
        });
    } else {
        instrumentoSelect.disabled = true;
    }
});

instrumentoSelect.addEventListener("change", () => {
    const grupo = grupoSelect.value;
    const nombreInstrumento = instrumentoSelect.value;
    imagenDiv.innerHTML = '';
    valorInput.value = '';
    valorInput.disabled = true;
    agregarBtn.disabled = true;

    if(nombreInstrumento) {
        const instr = instrumentos[grupo].find(i => i.nombre === nombreInstrumento);
        if(instr) {
            const img = document.createElement("img");
            img.src = instr.imagen;
            img.alt = instr.nombre;
            imagenDiv.appendChild(img);

            valorInput.disabled = false;
            agregarBtn.disabled = false;
        }
    }
});

agregarBtn.addEventListener("click", () => {
    alert(`Se agregó el valor: ${valorInput.value} al instrumento: ${instrumentoSelect.value}`);
    valorInput.value = '';
});
