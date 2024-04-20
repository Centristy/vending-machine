import react from 'react'
import Item from './Item'
import './VendingM.css'





function VendingM(){


    return(

        <>
        <h1> Vending Machine</h1>
        <div className='row vendingmachine'>


            <Item name='Cola' url='https://as2.ftcdn.net/v2/jpg/02/31/29/75/1000_F_231297579_pG8PGsUVEBh0vCcMrOiLLpdGipDbUxsA.jpg'/>
            <Item name= 'Chips' url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg'/>
            <Item name= 'Bagel' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMckSx504kLGByw1F-V1PlwolhjJX9Mg6_3rxAF9sSyQ&s'/>
            <Item name= 'Sprite' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQXtJD1p8_ncLkOStPh_cCXo-4hQHP576xcP0hXaBMw&s'/>
            <Item name='Bananas' url='https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400'/>
            <Item name = 'Peanuts' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm-4pxWLJXvxvL1Pp9VlSfheOMZjcr0dTnhr2NVylgw&s'/>

        </div>
        </>


    )
}

export default VendingM