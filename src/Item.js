import react from 'react'
import './Item.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Picture from "./Picture"




function Item({name="item", url}){

const path = `/${name}`

    return(
        
        <div className='col-3 item'>
            

        <BrowserRouter>
            <Link to={path}><p className='m-5'>{name}</p></Link>
        <Routes>
            <Route path={path} element={<Picture url={url}/>}/>
        
        </Routes>
        </BrowserRouter>
        </div>
        
    )


}


export default Item