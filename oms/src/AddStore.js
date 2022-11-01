import React from 'react'

function AddStore(props) {

  const saveStore = (event)=>{
    event.preventDefault()
    props.setShowAddForm(false)
  }

  const cancleStore = ()=>{
    props.setShowAddForm(false)
  }

  return (
    <div>
      <br/>
        <br/>
      <form>
        <input type="text" placeholder="Store Name" />
        <br/>
        <br/>
        <input type="text" placeholder="Store owner" />
        <br/>
        <br/>
        <input type="submit" value="Save" onClick={saveStore}/>
        <input type="button" value="Cancle" onClick={cancleStore}/>
      </form>
      <br/>
        <br/>
    </div>
  )
}

export default AddStore