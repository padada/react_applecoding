import { Table, Button  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { up, down, deleteItem} from '../store.js';

function Cart() {

  let state = useSelector((state)=>{ return state })
  let dispatch = useDispatch()

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cartlist.map((a, i)=>
              <tr key={i}>
                <td>{state.cartlist[i].id}</td>
                <td>{state.cartlist[i].name}</td>
                <td>{state.cartlist[i].count}</td>
                <td>
                  <Button onClick={()=>{ dispatch(up(state.cartlist[i].id)) }}
                    style={{background : '#7986CB', marginLeft : '10px', border : 'gray'}}>+</Button>
                  <Button onClick={()=>{ dispatch(down(state.cartlist[i].id)) }}
                    style={{background : '#9FA8DA', marginLeft : '10px', border : 'gray'}}>-</Button>
                  <Button onClick={()=>{ dispatch(deleteItem(i)) }} 
                    style={{background : '#C5CAE9', marginLeft : '10px', border : 'gray'}} >삭제</Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;