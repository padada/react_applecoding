import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../store.js';

function Detail(props) {

  // useEffect는 컴포넌트가 mount 혹은 updata시 코드 실행
  useEffect(()=>{
    let time = setTimeout(()=>{ setBtn(false) }, 3000)
    setFade('end')

    // useEffect 동작 전에 return안의 코드 실행 (mount는 실행안되나 unmount에는 실행됨)
    return ()=>{
      clearTimeout(time);
    }
  }, []) // [] => 안에 있는 state가 변할때 실행 (비워져있으면 mount때만 1회 실행됨)

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  })
  let [btn, setBtn] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState('');
  let dispatch = useDispatch()

  return(
    <div className="container">
      {
        btn == true ? <div class={"alert alert-warning start " + fade}>3초이내 구매시 할인</div> : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(찾은상품.id+1)+'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" 
            onClick={()=>{ dispatch(addItem( {id : 찾은상품.id, name : 찾은상품.title, count : 1} )) }}>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0" style = {{marginTop : '30px'}}>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />

    </div>
    )
  }

  function TabContent(props) {

    let [fade, setFade] = useState('');
  
    useEffect(()=>{
      let a = setTimeout(()=>{ setFade('end') }, 10)

      return ()=>{
        clearTimeout(a)
        setFade('')
      }
    }, [props.tab])

    if (props.tab == 0) {
      return <div className={`start ${fade}`}>내용0</div>
    }
    if (props.tab == 1) {
      return <div className={'start ' + fade}>내용1</div>
    }
    if (props.tab == 2) {
      return <div className={'start ' + fade}>내용2</div>
    }
  }

export default Detail;