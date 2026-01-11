import React from 'react'
import Mainbanner from './Mainbanner'
import ProductsForYou from './ProductsForYou'
import Collections from '../Pages/Collections'


const Home = () => {
               scrollTo(0,0)
  return (
    <div>
       
        <Mainbanner></Mainbanner>
        <ProductsForYou></ProductsForYou>
         
    </div>
  )
}

export default Home
