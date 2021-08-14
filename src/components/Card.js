import React from 'react'
import Carditem from './Carditem'
import './Card.css';

function Card() {
    return (
        <div className='cards'>
            <h1>Check out these epic cars</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className='cards__items'>

                    <Carditem
                      src='images/08.jpg'
                      text='CARS'
                      lable='adventure'
                      path='/services'
                    />

                    <Carditem
                      src='images/48831.jpg'
                      text='Lamborghini'
                      lable='adventure'
                      path='/services'
                    />
                    </ul>
                    <ul className='cards__items'>
                     <Carditem
                      src='images/224682.jpg'
                      text='ferrari'
                      lable='adventure'
                      path='/services'
                    />
                     <Carditem
                      src='images/cars.jpg'
                      text='mclaren'
                      lable='adventure'
                      path='/services'
                    />
                    <Carditem
                      src='images/unnamed.jpg'
                      text='wonderfull car'
                      lable='adventure'
                      path='/services'
                    />
                     
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Card
