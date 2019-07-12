import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from 'reactstrap';

class Login extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('login-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('login-page');
  }
  render() {
    return (
      <div className="login-page" style={{backgroundColor:"red"}}>
        {/* <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="First Name..." type="text" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                      />
                    </InputGroup>
                    <br />
                    <FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                          Subscribe to newsletter
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="btn-round mb-3"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container> */}
        
        {/* <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("../../assets/img/bg/fabio-mangione.jpg")})`
          }}
        />*/}
        <Row>
          <Col lg="6" md="6" sm="6" xs="6" >
              tdst fd
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <p> ipsum, dolor sit amet consectetur adipisicing elit. Ea, ipsa!</p>
          </Col>
        </Row>
      </div> 
    );
  }
}

export default Login;
