import React from 'react'
import { useNavigate } from "react-router-dom";

function UpdateItem(props) {
  const [updateMode, setUpdateMode] = React.useState(false)
  const [storeName, setStoreName] = React.useState(props.store?.name)
  const [ownerName, setOwnerName] = React.useState(props.store?.owner)
  const navigate = useNavigate();
  const viewItem = (store) => {
    // console.log(store)
    navigate(`/home/item/${store?.name}`);
  };

  const deleteItem = (store) => {
    console.log(store)
    alert("deleted")
  };

  const updateItem = (store) => {
    console.log(store)
    setUpdateMode(true)
  };

  const storeNameChange = (event)=>{
    setStoreName(event.target.value)
  }

  const ownerNameChange = (event)=>{
    setOwnerName(event.target.value)
  }

  const saveStore = ()=>{
    console.log({"Name":storeName,"Owner":ownerName})
    setUpdateMode(false)
  }

  return (
    <tr>
      <td>{updateMode?<input type="text" value={storeName} onChange={storeNameChange} size="15"/>:storeName}</td>
      <td>{updateMode?<input type="text" value={ownerName} onChange={ownerNameChange} size="15"/>:ownerName}</td>
      {updateMode?
      <td>
      <input type="button" value="Save" onClick={saveStore} />
      &nbsp;
      <input type="button" value="Cancle" onClick={() => { setUpdateMode(false) }} />
    </td>
    :
      <td>
        <input type="button" value="View" onClick={() => { viewItem(props.store) }} />
        &nbsp;
        <input type="button" value="Update" onClick={() => { updateItem(props.store) }} />
        &nbsp;
        <input type="button" value="Delete" onClick={() => { deleteItem(props.store) }} />
      </td>
      }

    </tr>
  )
}

export default UpdateItem