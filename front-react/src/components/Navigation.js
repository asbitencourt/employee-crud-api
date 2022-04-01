
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
const Navigation = () => {
    return (
        <>

<Navbar collapseOnSelect bg="dark" fixed="top" expand="sm" variant="dark">
        <Container>
				
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<Nav.Link href="/list">Listar</Nav.Link>
            <Nav.Link href="/create">Create Employee</Nav.Link>
					
					</Nav>
				</Navbar.Collapse>
        </Container>
	</Navbar>
     </>
    );
}
export default Navigation;