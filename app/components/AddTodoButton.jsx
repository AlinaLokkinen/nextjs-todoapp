
const AddToDoButton = ({ setAddNew }) => {

    return(
        <button
        className="p-3 bg-blue-200 rounded-sm mt-2"
        onClick={() => setAddNew(true)}
      >
        Add new Todo item
      </button>
    )

}

export default AddToDoButton;