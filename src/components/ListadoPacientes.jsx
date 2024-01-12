import Paciente from "./Paciente";
import { useEffect } from "react";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  useEffect(() => {
    if (pacientes.length > 0) console.log("nuevo paciente")

  }, [pacientes])

  console.log(pacientes.length)

  return (
    <div className="md:w-1/2 lg:w-3/5">

      {pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">
            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id} //Nos genera como un id unico
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes</p>
        </>
      )

      }

    </div>
  )
}

export default ListadoPacientes