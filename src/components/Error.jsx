
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-2 font-semibold mt-3 rounded-md">
      <p>
        {mensaje}
      </p>
    </div>
  )
}

export default Error