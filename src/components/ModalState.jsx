const ModalState = ({ isShowModal }) => {
  return (
    <article
      className={`fixed h-screen left-0 top-0 right-0 flex justify-center items-center  bg-gray-500/70 text-white ${
        isShowModal ? 'opacity-100 visible' : 'opacity-0 invisible'
      } `}
    >
      <form className="flex flex-col bg-tertiary p-5   rounded-xl text-lg font-semibold">
        <div className="mx-auto pb-2">
          <i className="bx bxs-check-circle text-primary text-4xl"></i>
        </div>
        <p className="mt-0 pb-6">Usuario creado exitosamente</p>
        <button
          type="button"
          className="rounded-xl py-1 w-20 mx-auto bg-secondary hover:bg-primary hover:transition-all duration-300 ease-in text-black"
        >
          OK
        </button>
      </form>
    </article>
  )
}
export default ModalState
