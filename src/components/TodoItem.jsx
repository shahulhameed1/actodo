function TodoItem(props)
{
    const activityArr= props.activityArr
    const setActivityArr= props.setActivityArr
    function handleDelete(deleteid) 
    {
var temperr= activityArr.filter(function(item){
    if (item.id==deleteid)
    {
        return false
    }
    else{
        return true
    }
})
setActivityArr(temperr)
    }
    return(
        <div className="flex justify-between">
<p>{props.index+1}.{props.activity}</p>
<button className="text-red-700" onClick={()=>handleDelete(props.id)}>Delete</button>
</div>
    )
}
export default TodoItem