const formulario = document.getElementById('formulario');
const numeroCasa = document.getElementById('casa');
const contenedor = document.getElementById('resultado');

const vecinos = [
    {
        casa: 15,
        nombre: "Juan Pérez",
        multas: [
            {
                motivo: "Jornada de aseo",
                fecha: "15/08/2026",
                valor: 12000,
                estado: "Pendiente"
            }
        ]
    },

    {
        casa: 27,
        nombre: "María Gómez",
        multas: [
            {
                motivo: "Jornada de aseo",
                fecha: "15/08/2026",
                valor: 12000,
                estado: "Pendiente"
            },
            {
                motivo: "Asamblea general",
                fecha: "30/08/2026",
                valor: 12000,
                estado: "Pendiente"
            },
            {
                motivo: "Actividad comunitaria",
                fecha: "05/09/2026",
                valor: 12000,
                estado: "Pendiente"
            }
        ]
    },

    {
        casa: 32,
        nombre: "Carlos Rodríguez",
        multas: []
    }
];

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = Number(numeroCasa.value.trim()) 

    if (numero === 0) {

        alert('Por favor, ingrese su número de casa.');
        return;

    }else {

        const vecinoEncontrado = vecinos.find(vecino => vecino.casa === numero);
        console.log(vecinoEncontrado);
        // Mostrar el resultado de la consulta
        document.getElementById('resultado').classList.remove('oculto');

        

        let htmlMultas = "";
        let totalMultas = 0;

        vecinoEncontrado.multas.forEach(multa => {
            htmlMultas += `
                <div class="tarjeta-multa">
                    <h5>Motivo: ${multa.motivo}</h5>
                    <h5>fecha: ${multa.fecha}</h5>
                    <h5>valor: ${multa.valor}</h5>
                    <h5>Estado: ${multa.estado}</h5>
                </div>
            `
            totalMultas += Number(multa.valor);
        })

        let htmlGenerado = `
            <h2>Resultado de la consulta</h2>
            <div class="tarjeta-vecino">
                <h4>Numero casa: ${vecinoEncontrado.casa}</h4>
                <h4>Propietario: ${vecinoEncontrado.nombre}</h4>
                <h4>Multas registradas</h4>
                <div class="multas">
                    ${htmlMultas || `<p>Este vecino no tiene multas registradas</p>`}
                </div>
                <h4>Total multas: ${totalMultas}</h4>
            </div>
        `;

        contenedor.innerHTML = htmlGenerado;

    }
});   