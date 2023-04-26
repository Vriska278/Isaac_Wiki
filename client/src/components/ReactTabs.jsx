import Nav from 'react-bootstrap/Nav';

function ReactTabs({ setFilter }) {

    const handleClick = (e) => {
        setFilter(e.target.id)
    }

    return (
        <Nav className='border-bottom-0' fill variant="tabs" defaultActiveKey="All">
            <Nav.Item>
                <Nav.Link className='link-danger' id='All' eventKey="All" onClick={handleClick}>All Bosses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link-danger' id='1' eventKey="Chapter 1" onClick={handleClick}>Chapter 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link-danger' id='2' eventKey="Chapter 2" onClick={handleClick}>Chapter 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link-danger' id='3' eventKey="Chapter 3" onClick={handleClick}>Chapter 3</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default ReactTabs;