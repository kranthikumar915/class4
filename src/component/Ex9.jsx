import React,{useState, useCallback, useEffect } from 'react'
import Comment from  './screen/Comments'
import ReactPaginate from 'react-paginate'



//API
const URL = 'https://jsonplaceholder.typicode.com'

//const EX9 =(props)=> {}
//const Ex9n= functional(props){}

//useCallback will return a memoized version of the callback(function) that only changes if one of the inputs (states/props) has changed

//state => state input can chnage through handler functions within the component

// props => props  input can change only when the component is rendered

function Ex9(props){
    const [comments,setComments] = useState([])

    //offset data
    const [offData,setoffData] = useState([])
    const [start,setStart] = useState(0) //starting offsets
    const end = start + props.itemPerPage;//ending oofset
    const pCount = Math.ceil(comments.length / props.itemPerPage) /* total page count */

    //api call in callback hook
    const getComments =useCallback(()=>{
        //async method
        const readComments = async()=>{
           fetch(`${URL}/comments`)
           .then(out => out.json())
           .then(res => {
            // console.log(`comments=`,res)
            setComments(res)
           }).catch(err => console.log(err.message))
        }
         readComments() //async method call
    },[])

    
    useEffect(()=>{
        getComments() //callback ref method call
        setoffData(comments.slice(start,end))
    },[comments])

    //handler to change pAGE item
    const handleClick = (e)=>{
        console.log('item = ', e.selected);
        let nOffset = Number(e.selected * props.itemPerPage) % comments.length;
        setStart(nOffset)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-3 text-success'>useCallback</h3>
                </div>
            </div>
            <div className='row'>
                {
                    offData && offData.map((item,index)=>{
                        return (
                            <Comment key={index} {...item}/>
                        )
                    })
                }
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <ReactPaginate
                    pageCount={pCount}
                    className='pagination'
                    activeClassName='active'
                    activeLinkClassName='active'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    onPageChange={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}
export default Ex9