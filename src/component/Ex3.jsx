import React,{useState} from 'react'

/* functional (constructor) type component */

function Ex3(props) {
    
    //const [state,handler] = useState(initial value)

    //state is initial variable -> state is privaye to component
    const[x,setX] = useState(1);//mutable states

    const[title,setTitle] = useState('welcome to state')

    const[view,setView] = useState(false)
    const[users,setUsers] =useState(['kranthi','subbu','balu','kranthi'])
    
    const[emp,setEmp] = useState({
        name:'kranthi',
        email:'kranthi@gmail.com'
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <div className='display-4 text-warening'>useState(functional component)</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h4 className='text-success'>x = {x}</h4>
                    <hr/>
                    <h3 className={view ? "text-success" : "text-danger"}>{view ? "say True" : 'say False'}</h3>
                    <hr/>
                    <ul className='list-group'>
                        {
                           users.map((item,index)=>{
                            return (
                                <li className='list-group-item' key={index}>{item}</li>
                            )
                           })
                        }
                    </ul>
                    <hr/>
                    <h4 className='text-info'>{emp.name} and {emp.email}</h4>
                </div>
            </div>
        </div>
    )
}
export default Ex3