import React from 'react';
import Seller from '../components/seller/seller';
import Buyer from '../components/buyer/buyer';
import {Routes,Route} from 'react-router-dom';


const Router = () => (
	<Routes>
		<Route path='/buyer' element={<Buyer/>}/>
		<Route path='/seller' element={<Seller/>}/>
	</Routes>
)

export default Router;