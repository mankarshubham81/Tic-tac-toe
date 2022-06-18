import React, {useState} from 'react';
import Icon from './components/Icon';
// react-tostify import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// bootstrap import
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap';

const itemArray = new Array(9).fill("empty");

const App = () => {
  
  const [isCross, setIsCross] = useState(false);
  const [winningMessage, setWinningMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinningMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] && itemArray[0] !== "empty") {
        return setWinningMessage(`${itemArray[0]} Wins !!!`);
    } 
    else if(itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5] && itemArray[3] !== "empty") {
          return  setWinningMessage(`${itemArray[3]} Wins !!!`);
    }
    else if(itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] && itemArray[6] !== "empty") {
        return setWinningMessage(`${itemArray[6]} Wins !!!`);
    }
    else if(itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] && itemArray[0] !== "empty") {
        return setWinningMessage(`${itemArray[0]} Wins !!!`);
    }
    else if(itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] && itemArray[1] !== "empty") {
        return setWinningMessage(`${itemArray[1]} Wins !!!`);
    }
    else if(itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] && itemArray[2] !== "empty") {
        return setWinningMessage(`${itemArray[2]} Wins !!!`);
    }
    else if(itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] && itemArray[0] !== "empty") {
        return setWinningMessage(`${itemArray[0]} Wins !!!`);
    }
    else if(itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] && itemArray[2] !== "empty") {
        return setWinningMessage(`${itemArray[2]} Wins !!!`);
    }
  };

  const changeItem = itemNumber => {
    if (winningMessage) {
      return toast(winningMessage, {type : "success"})
    }

    if(itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross  ? "Cross" : "Circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", {type: "error"})
    }

    checkIsWinner();
  }

  return (
    <React.Fragment>
      <Container className='p-4 bod'>
      {/* <ToastContainer position='bottom-center' /> */}
      <Row>
        <Col md={6} className="offset-md-3 clr">
          {winningMessage ? (
          <div className='mb-2 mt-2 clr'>
            <h2 className=" rounded ccc text-uppercase text-center">
              {winningMessage}
            </h2>
            <Button
            color='success'
            block
            onClick={reloadGame}
            >Reload The Game</Button>
          </div>) : (
            <h1 className="mb-3 p-2 text-center rounded clr2 ">
              {isCross ? "Cross" : "Circle" } Turns
            </h1> 
          ) }
          <div className='grid clr' >
            {itemArray.map((item, index) => (
              <Card onClick={() => { changeItem(index) }} >
                <CardBody className='box clr3'>
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
        { winningMessage ?
         <ToastContainer className={{paddingTop: "26px"}} position='position-relative' /> : ""
        }
    </React.Fragment>
  );
}

export default App;
