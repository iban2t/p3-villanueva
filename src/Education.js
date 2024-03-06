import * as React from "react"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

function Education() {
    const [activeTab, setActiveTab] = React.useState("#primary");

    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };
    
    return (
        <div className="educ">
            <h2>Education</h2>
            <div className="spacer"></div>
            <Card style={{ width: '100%', height: 'auto'}} >
                <Card.Header>
                    <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="#primary">Primary</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="#elementary">Elementary</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="#juniorHigh">Junior High</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="#seniorHigh">Senior High</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="#college">College</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {activeTab === "#primary" && (
                        <div>
                            <Card.Img variant="top" src="/images/educ1.jpg" style={{ width: '25%' }} className="d-block mx-auto"/>
                            <div className="spacer"></div>
                            <Card.Title>Bethel Christian Learning Center, Inc.</Card.Title>
                            <Card.Text>
                                Atty. Abalos St., Poblacion, Mangaldan, Pangasinan
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Years: 2006-2008</ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                            <a href ="https://www.facebook.com/BCLC1987" target="_blank">
                                <Button variant="success">Learn more</Button>
                            </a>
                        </div>
                    )}
                    {activeTab === "#elementary" && (
                        <div>
                            <Card.Img variant="top" src="/images/educ2.png" style={{ width: '25%' }} className="d-block mx-auto"/>
                            <div className="spacer"></div>
                            <Card.Title>Balogo Baptist Christian School, Inc.</Card.Title>
                            <Card.Text>
                                Zone 1, Balogo, Pasacao, Camarines Sur
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Years: 2008-2015</ListGroup.Item>
                                <ListGroup.Item>Highest Achievement: Class Valedictorian</ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                            <a href ="https://www.facebook.com/profile.php?id=100057417701056" target="_blank">
                                <Button variant="success">Learn more</Button>
                            </a>
                        </div>
                    )}
                    {activeTab === "#juniorHigh" && (
                        <div>
                            <Card.Img variant="top" src="/images/educ2.png" style={{ width: '25%' }} className="d-block mx-auto"/>
                            <div className="spacer"></div>
                            <Card.Title>Balogo Baptist Christian School, Inc.</Card.Title>
                            <Card.Text>
                                Zone 1, Balogo, Pasacao, Camarines Sur
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Years: 2015-2019</ListGroup.Item>
                                <ListGroup.Item>Highest Achievement: Top 1</ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                            <a href ="https://www.facebook.com/profile.php?id=100057417701056" target="_blank">
                                <Button variant="success">Learn more</Button>
                            </a>
                        </div>
                    )}
                    {activeTab === "#seniorHigh" && (
                        <div>
                            <Card.Img variant="top" src="/images/educ3.jpg" style={{ width: '25%' }} className="d-block mx-auto"/>
                            <div className="spacer"></div>
                            <Card.Title>Dr. Lorenzo P. Ziga Memorial High School</Card.Title>
                            <Card.Text>
                                Zone 1, Balogo, Pasacao, Camarines Sur
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Years: 2019-2021</ListGroup.Item>
                                <ListGroup.Item>Highest Achievement: Class Salutatorian</ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                            <a href ="https://www.facebook.com/DLPZMHS" target="_blank">
                                <Button variant="success">Learn more</Button>
                            </a>
                        </div>
                    )}
                    {activeTab === "#college" && (
                        <div>
                            <Card.Img variant="top" src="/images/educ4.jpg" style={{ width: '25%' }} className="d-block mx-auto"/>
                            <div className="spacer"></div>
                            <Card.Title>Naga College Foundation, Inc.</Card.Title>
                            <Card.Text>
                                M.T. Villanueva Avenue (Magsaysay Extension), Naga City
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Years: 2021-Present</ListGroup.Item>
                                <ListGroup.Item>Highest Achievement: Dean's Lister (1.31 GWA)</ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                            <a href ="https://www.ncf.edu.ph/" target="_blank">
                                <Button variant="success">Learn more</Button>
                            </a>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Education;
