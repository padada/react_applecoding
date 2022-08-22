import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim'
})

let cartlist = createSlice({
  name : 'cartlist',
  initialState : 
    [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
  reducers : {
    up(state, action){
      let 번호 = state.findIndex((a)=>{ return a.id == action.payload })
      state[번호].count++
    },
    down(state, action){
      let 번호 = state.findIndex((a)=>{ return a.id == action.payload })
      state[번호].count--
    },
    addItem(state, action){
      state.push(action.payload)
    },
    deleteItem(state, action){
      state.splice(action.payload, 1)
    }
  }
})

export let { up, down, addItem, deleteItem } = cartlist.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cartlist : cartlist.reducer
  }
}) 