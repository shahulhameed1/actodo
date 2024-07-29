import { useState } from "react"

function AddTodoForm(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    const [newactivity, setNewactivity] = useState(" ")

    function handleChange(evt)
     {
        setNewactivity(evt.target.value)
    }
    function addActivity() 
    {
setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
setNewactivity("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activity</h1>
            <div>
                <input type="text" onChange={handleChange} value={newactivity} className="border  border-black  bg-transparent p-1" placeholder="Next Activity"></input>
                <button onClick={addActivity } className="bg-black  text-white border border-black p-1">Add</button>
            </div>
        </div>
    )
}
export default AddTodoForm