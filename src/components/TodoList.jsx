
import TodoItem from "./TodoItem"

function TodoList(props){
    const activityArr= props.activityArr
const setActivityArr=props.setActivityArr
    return(
        <div className=" bg-[#BD84EA] border rounded-md p-3 flex-grow">
        <h1 className="text-2xl font-medium">  Today's Activity</h1>
       {activityArr.length===0?<p>You haven't added anything yet</p>:""}
{
    activityArr.map(function(item,index)
{return<TodoItem   id={item.id} activity={item.activity} index={index} activityArr={activityArr}  setActivityArr={setActivityArr}></TodoItem>
})
}
    </div>
    )
}
export default TodoList