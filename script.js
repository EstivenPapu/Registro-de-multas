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

    let htmlMultas = "";
    let totalMultas = 0;
    let contador = 0;

    const numero = Number(numeroCasa.value.trim()) 

    if (numero === 0) {

        alert('Por favor, ingrese su número de casa.');
        return;
        
    }else {

        const vecinoEncontrado = vecinos.find(vecino => vecino.casa === numero);

        console.log(vecinoEncontrado);
        // Mostrar el resultado de la consulta
        document.getElementById('resultado').classList.remove('oculto');
        if (vecinoEncontrado !== undefined){
            vecinoEncontrado.multas.forEach(multa => {
                htmlMultas += `
                    <div class="tarjeta-multa">

                        <div class="info">
                            <h5>Motivo: ${multa.motivo}</h5>
                            <h5>${multa.fecha}</h5>
                        </div>
                        <div class="values">
                            <h5 class="estado">${multa.estado}</h5>
                            <h5 class="valor">$${multa.valor}</h5>
                        </div>
            
                    </div>
                `
                contador++;
                totalMultas += Number(multa.valor);
            })

            let htmlGenerado = `
                <h1>Resultado de la consulta</h1>
                <div class="tarjeta-vecino">
                    <h4>Numero casa: ${vecinoEncontrado.casa}</h4>
                    <h4>Propietario: ${vecinoEncontrado.nombre}</h4>
                    
                    <div class="titulo-multas">
                        <h2>Multas registradas</h2>
                        <h4>Multas pendientes (${contador})</h4>
                    </div>

                    <hr>
                    
                    <div class="multas">
                        ${htmlMultas || `<p>Este vecino no tiene multas registradas</p>`}
                    </div>
                    <div class="total">
                        <h4>Total multas</h4> <h3>$${totalMultas}</h3>
                    </div>

                </div>
            `;

            contenedor.innerHTML = htmlGenerado;
        }else{
            contenedor.innerHTML = `
            <p class="error">Dijite un numero de casa existente</p>
            `;
        }
    }
});   