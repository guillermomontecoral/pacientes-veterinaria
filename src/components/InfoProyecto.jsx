import React from 'react'

const InfoProyecto = () => {
  return (
    <div className='bg-white shadow-md rounded-t-lg p-5 mx-5'>
      <h2 className='font-semibold'>
        Proyecto realizado por el curso <span>React - La Guía Completa: Hooks Context Redux MERN +15 Apps
        </span> de <span>Juan Pablo De la Torre Valdez</span>
      </h2>
      <p>Tecnologías utilizadas: <span className="text-indigo-600 font-bold">JavaScript - React - Vite - Tailwind CSS</span></p>
      <p>La información se guarda en el Local Storage del navegador.</p>
      <p>Acceder al curso <a href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/" className='font-semibold text-indigo-600'>clic aquí</a></p>
    </div>
  )
}

export default InfoProyecto