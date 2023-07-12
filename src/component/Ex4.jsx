import React, {useState} from 'react'

function Ex4(props){
    const[num,setNum] = useState(0)

    const incValue = (val)=>{
        console.log('value=',val)
        setNum(num + val)
    }
    const decValue =(value)=>{
        console.log('value=',value)
       setNum(num - value && num ==0 )
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-3 text-danger'>state Handler</h3>
                </div>
            </div>
            <div className='col-md-12'>
                <h2 className='text-success'>Num = {num}</h2>
                <hr/>
                <button onClick = {()=>incValue(50)} className='btn btn-success'> add+50</button>
                <hr/>
                <button onClick = {()=>decValue(50)} className='btn btn-success'> dec-50</button>
            </div>
        </div> 
    )
}
export default Ex4