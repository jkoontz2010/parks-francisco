import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'React-Bootstrap';

class Main extends React.Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <Link to="/">Spots</Link>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">Log In</NavItem>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
				<h1 className="text-center header">
					The one-stop shop for all your pictures of a spot
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default Main; 
