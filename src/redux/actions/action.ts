import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
    DEPOSIT_MONEY,
} from "../constants/postConstans";
import {
    doc,
    getDocs,
    collection,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { async } from "@firebase/util";

export const loadPost = () => async (dispatch: any)  => {
    try {
        dispatch({type: FETCH_POST_REQUEST})
        // const url = "https://jsonplaceholder.typicode.com/posts";
        const dbGetDocs = await getDocs(collection(db, "banks"))
        const dataBanks = await dbGetDocs.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        dispatch({
            type: FETCH_POST_SUCCESS,
            data: dataBanks
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_POST_ERROR,
            message: error
        });
    }
}

export const depositMoney = (id: string, money: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: DEPOSIT_MONEY,
            message: "co tien"
        })
        const banksDocs = doc(db, "banks", id)
        const newFields = {money: Number(money + 1000)}
        console.log()
        await updateDoc(banksDocs, newFields)
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_POST_ERROR,
            message: error
        });
    }
}