import React from 'react'
import Bigcard from '../Home/Home/Bigcard'
import Latest from '../Home/Home/Latest'
import Prediction from '../Home/Predictions/Prediction'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
	<div>

		<div className="container">
			<div className="row">
				<div className="col-md-9">

					<Latest/>
					<Bigcard/>
					<Prediction/>
				</div>
				<div className="col-md-3">
					<Sidebar/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Home