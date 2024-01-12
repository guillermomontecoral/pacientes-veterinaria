
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  //Destructuring de paciente
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente')

    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mb-10 mx-5 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700">Nombre Mascota: {''}<span className="font-normal normal-case">{nombre}</span></p>
      <p className="font-bold mb-3 text-gray-700">Propietario: {''}<span className="font-normal normal-case">{propietario}</span></p>
      <p className="font-bold mb-3 text-gray-700">Correo Electrónico: {''}<span className="font-normal normal-case">{email}</span></p>
      <p className="font-bold mb-3 text-gray-700">Fecha de Registro: {''}<span className="font-normal normal-case">{fecha}</span></p>
      <p className="font-bold mb-3 text-gray-700">Síntomas: {''}<span className="font-normal normal-case">{sintomas}</span></p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 md:px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 md:px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente