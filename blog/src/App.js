import './App.css';
import { useState } from 'react';

function App() {

  let[글제목, 글제목변경] = useState(['남자코트 추천', '두류 우동 맛집', '리엑트 독학']);
  let[좋아요, 좋아요변경] = useState([0, 0, 0]);
  let[modal, setModal] = useState(false);
  let[title, setTitle] = useState(0);
  let[input, setInput] = useState('');
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  let time = {
    year: today.getFullYear(),  //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
  };
  let timehere = `${time.year}년 ${time.month}월 ${time.date}일`;

  return (
    <div className="App">

      <div className="black-nav">
        <h4>은정이 개발로그</h4>
      </div>

      {/* <button onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
        }}>글수정</button>

      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
        }}>글정렬</button> */}

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요+1) } }>👍</span> { 좋아요 } </h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>8월 1일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(true); setTitle(i) }}>{ a } <span onClick={ (e)=>{ 
                e.stopPropagation();
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy) } }
              >👍</span> { 좋아요[i] } <button onClick={ (e)=>{e.stopPropagation();
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy)
              } }>삭제</button> </h4>
              <p>{timehere} 발행</p>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ setInput(e.target.value); }}/>
      <button onClick={()=>{ 
          let copy = [...글제목];
          copy.unshift(input);
          글제목변경(copy);
          let copy2 = [...좋아요];
          copy2.unshift(0);
          좋아요변경(copy2) }}>글발행</button>

      {
        modal == true ? <Modal 글제목={글제목} title={title} 날짜={timehere}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
       <h4>{ props.글제목[props.title] }</h4>
       <p>{ props.날짜 }</p>
       <p>상세내용</p>
    </div>
  )
}

export default App;
