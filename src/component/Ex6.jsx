import React, {useLayoutEffect,useState} from 'react'

//The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. 

function Ex6(props){
    const[num,setNum] = useState(0)
    const[log,setLog] = useState([])

    const getNum = () => {
        let random = Math.round((Math.random() * 10000))
        setNum(random)
    }
    useLayoutEffect(()=>{
        setLog(x=>[...x,`effect has invoked ${num}`])
    },[num])//update stage in lifecycle hook
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-container'>
                    <h3 className='display-3 text-success'>useLayoutEffect</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <button onClick={getNum} className='btn btn-success'>Generate a random</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <ul className='list-group'>
                        {
                            log && log.map((item,index)=>{
                                return (
                                    <li key={index} className='list-group-item'>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Ex6