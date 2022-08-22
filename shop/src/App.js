import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';
import Cart from './pages/Cart';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }} style={{color : 'skyblue'}}>MAYBE SHOES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/cart') }}>CART</Nav.Link>
            <Nav.Link href="#features">RUNNING</Nav.Link>
            <Nav.Link href="#features">SNAKERS</Nav.Link>
            <Nav.Link href="#features">SLIP-ON</Nav.Link>
            <Nav.Link href="#features">LOAFER</Nav.Link>
            <Nav.Link href="#features">BOOTS</Nav.Link>
            <Nav.Link href="#features">HEEL</Nav.Link>
            <Nav.Link href="#features">SUMMER💙🌊</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/" style={{paddingLeft: 13, textDecoration: 'none', color: 'pink'}}>HOME</Link>
      <Link to="/event/one" style={{paddingLeft: 13, textDecoration: 'none', color: 'pink'}}>EVENT1</Link>
      <Link to="/event/two" style={{paddingLeft: 13, textDecoration: 'none', color: 'pink'}}>EVENT2</Link>

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>

            <div>
              <Container>
                <Row>
                  {
                    shoes.map(function(a, i){
                      return (
                        <Col key={i}>
                          {
                            <Product shoes={shoes[i]} i={i+1} />
                          }
                        </Col>
                      )
                    })
                  }
                </Row>
              </Container>
            </div>
            
            <button onClick={()=>{
              // 서버에 데이터 요청하기
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // console.log(result.data)
                let copy = [...shoes, ...result.data];
                setShoes(copy)
              })
              // 예외처리
              .catch(()=>{
                console.log('서버와 통신 실패했습니다.')
              })
            }}>상품 더보기</button>
          </div>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes} />}/>
        <Route path='*' element={<div>없는페이지에요</div>}/>
        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div><p>첫 주문시 양배추즙 서비스</p></div> } />
          <Route path="two" element={ <div><p>생일기념 쿠폰받기</p></div> } />
        </Route>
        <Route path='/cart' element={ <Cart/> } />
      </Routes>

    </div>
  );
}

function Product(props) {
  let id = props.i - 1
  return (
    <div>
      <a href={"http://localhost:3000/detail/"+id}>
        <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width='80%'/>
      </a>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
