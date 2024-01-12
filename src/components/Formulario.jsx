import { useState, useEffect } from "react";
import Error from "./Error";
import Paciente from "./Paciente";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  const handleSubmit = e => {

    e.preventDefault();

    //Validar formulario, campos vacios
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }

    setError(false);


    //Objeto de paciente
    const objPaciente = {
      //Como la variable que contiene el valor es igual al nombre de la propiedad solo con dejar uno solo alcanza
      nombre,
      propietario,
      email,
      fecha,
      sintomas

    }


    if(paciente.id){
      //Editando el registro

      objPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({})
    }
    else{      
      //Nuevo registro

      //Genero el id del paciente, anted de guardarlo    
      objPaciente.id = generarId();

      //Tomar una copia de lo que ya hay para no reescribirlo, debemos hacerlo siempre con metodos inmutables
    setPacientes([...pacientes, objPaciente]);
    }    

    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-10">Añadir paciente y <span className="text-indigo-600 font-bold">Administralos</span></p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" >
        <div className="mb-5">
          <label htmlFor="txtNombre" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name=""
            id="txtNombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="txtPropietario" className="block text-gray-700 uppercase font-bold">Dueño</label>
          <input
            type="text"
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name=""
            id="txtPropietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="txtEmail" className="block text-gray-700 uppercase font-bold">Correo Electrónico</label>
          <input
            type="email"
            placeholder="Correo electrónico del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="" id="txtEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="txtAlta" className="block text-gray-700 uppercase font-bold">Fecha</label>
          <input
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name=""
            id="txtAlta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="txtSintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea
            type="date"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name=""
            id="txtSintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer rounded-md"
        />
        {error &&
          <Error
            mensaje="Todos los campos son obligatorio"
          />
        }
      </form>
    </div>
  )
}

export default Formulario