import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { db } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

import "./App.css";

import { useDispatch, useSelector } from "react-redux"
import { loadPost, depositMoney } from './redux/actions/action';
import { stringify } from "querystring";
type loadPostProps = () => void
function App() {
  const data = useSelector((state:any)=> state.posts.data)
  const requesting = useSelector((state:any)=> state.posts.requesting)

  console.log(data, requesting)
  const dispatch: any = useDispatch()
  useEffect(()=>{
    dispatch(loadPost())
    dispatch(depositMoney)
  }, [data])


  return (
    <div className="App">
      <ul>
      </ul>
        {data.map((item: any)=> {
          return (
            <div>
              <li key={item.id}>{item.name}: {item.money}</li>
              <button onClick={()=> {dispatch(depositMoney(item.id, item.money))}}>Deposit</button>
            </div>
          )
        })}
    </div>
  );
}

export default App;
