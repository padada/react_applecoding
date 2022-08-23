import './App.css';
import { Card, ListGroup } from 'react-bootstrap'
import bg from './img_tylenol_238.jpg'

function App() {
  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={ bg } />
        {/* <Card.Img variant="top" style={{ backgroundImage : 'url(' + bg + ')' }} /> */}
        <Card.Body>
          <Card.Title>타이레놀정 500밀리그램</Card.Title>
          <Card.Text>
            감기로 인한 발열 및 동통(통증), 두통, 신경통, 근육통, 월경통, 염좌통(삔 통증), 
            치통, 관절통, 류마티양 동통(통증)시 복용
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>1회 1~2정씩 1일 3-4회 (4-6시간 마다) 필요시 복용</ListGroup.Item>
          <ListGroup.Item>
            1) 이 약에 과민증 환자<br/>
            2) 소화성궤양 환자<br/>
            3) 심한 혈액 이상 환자<br/>
            4) 심한 간장애 환자<br/>
            5) 심한 신장(콩팥)장애 환자<br/>
            6) 심한 심장기능저하 환자<br/>
            7) 아스피린 천식(비스테로이드성 소염(항염)제에 의한 천식발작 유발) 또는 그 병력이 있는 환자<br/>
            8) 다음의 약물을 복용한 환자 : 바르비탈계 약물, 삼환계 항우울제<br/>
            9) 알코올을 복용한 사람
          </ListGroup.Item>
          <ListGroup.Item>2022년 8월 23일 오후 8시 23분</ListGroup.Item>
          <Card.Body>
            <Card.Link href="#">지난기록보기</Card.Link>
            <Card.Link href="#">의약품 촬영하기</Card.Link>
          </Card.Body>
        </ListGroup>
    </Card>
    </div>
  );
}

export default App;