import React from 'react';
import Geosuggest from 'react-geosuggest';
import { Well, Button } from 'React-Bootstrap';

class LandingPage extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-offset-3 col-sm-6">
						<Well>
							<div className="row">
								<div className="col-sm-10">
									<Geosuggest placeholder="What spot do you want to check out?"/>
								</div>
								<div className="col-sm-2">
									<Button>Search</Button>
								</div>
							</div>
							
						</Well>
					</div>
				</div>
				
			</div>
		)
	}
}

export default LandingPage; 
