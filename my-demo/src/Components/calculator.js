import React, { Component } from 'react'
import Button from "./button";
import { Container, Row, Col } from "react-bootstrap";

export class Calculator extends Component {
    constructor() { 
        super(); 
      
        this.state = { 
          ansOnScreen: ' '
        } 
      
        this.handleClick = this.handleClick.bind(this); 
      } 

      handleClick(event){ 
        console.log("inside");
        // console.log(<div/>);
        console.log(document.createElement('div', null))
        const value = event.target.value; 
       
        switch (value) { 

            case '=': { 

                if (this.state.ansOnScreen!== '') 
                { 
                    var ans=''; 
                      try
                        { 
                            ans = eval(this.state.ansOnScreen); 
                        } 
                        catch(err) 
                        { 
                            this.setState({ansOnScreen: "Math Error"}); 
                        } 
                        if (ans===undefined) 
                            this.setState({ansOnScreen: "Math Error"}); 
                        else
                            this.setState({ ansOnScreen: ans }); 
                        break; 
                } 
            }   
            case '+/-': { 
                if(value === '+'){
                       this.setState({ansOnScreen: '-'}); 
                }
                else if(value === '-'){
                    this.setState({ansOnScreen: '+'}); 
                }
                break;
            }
            case 'AC': { 
                this.setState({ansOnScreen: ' '});
                break;
            }
            default: { 
                this.setState({ ansOnScreen: this.state.ansOnScreen += value})
                console.log("default"); 
                break; 
            }  
        }
    }

    render() {
        return (
            <div className="main-cal">
                <input type="text" className="screen-input" value={this.state.ansOnScreen}/>
                <div className="button-row">
                    <Container fluid class="btn-container">
                        <Row className="btn-row">
                            <Col className="btn-col">
                                <Button label={'AC'} handleClick = {this.handleClick}/>
                            </Col>
                            <Col className="btn-col">
                                <Button label={'+/-'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'%'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'/'} handleClick = {this.handleClick}/> 
                            </Col>
                        </Row>

                        <Row className="btn-row">
                            <Col className="btn-col">
                                <Button label={'7'} handleClick = {this.handleClick}/>
                            </Col>
                            <Col className="btn-col">
                                <Button label={'8'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'9'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'*'} handleClick = {this.handleClick}/> 
                            </Col>
                        </Row>

                        <Row className="btn-row">
                            <Col className="btn-col">
                                <Button label={'4'} handleClick = {this.handleClick}/>
                            </Col>
                            <Col className="btn-col">
                                <Button label={'5'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'6'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'-'} handleClick = {this.handleClick}/> 
                            </Col>
                        </Row>

                        
                        <Row className="btn-row">
                            <Col className="btn-col">
                                <Button label={'1'} handleClick = {this.handleClick}/>
                            </Col>
                            <Col className="btn-col">
                                <Button label={'2'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'3'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'+'} handleClick = {this.handleClick}/> 
                            </Col>
                        </Row>

                        <Row className="btn-row">
                            <Col style={{width: "200%"}} className="btn-col">
                                <Button label={'0'} handleClick = {this.handleClick}/>
                            </Col>
                            <Col className="btn-col">
                                <Button label={'.'} handleClick = {this.handleClick}/> 
                            </Col>
                            <Col className="btn-col">
                                <Button label={'='} handleClick = {this.handleClick}/> 
                            </Col>
                        </Row>
                    </Container> 
            </div>
        </div> 
        )
    }
}

export default Calculator
