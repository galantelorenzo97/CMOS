/**
 * Computers Model
 * Written by Engr. Lorenzo Galante
 */
//import {Locations} from './Locations';
//import { CurrentUser } from "./Users";

import myFetch from "./myFetch"

export let ActiveComputerList = [];
export let StoredComputerList = [];

export let ActiveListLength = 0;
export let StoredListLength = 0;

export default {
    /*ActiveComputerList : [],
    StoredComputerList : [],
    ActiveListLength : 0,
    StoredListLength: 0,*/
    async getCompleteComputerList() {
        const promise1 = new Promise((resolve, reject) => {
            myFetch("/computers/verbose/active")
            .then(x=> {
                this.ActiveComputerList = x.result;
                resolve(x.result);
                console.log(x.result);
            });
        })
        const promise2 = new Promise((resolve, reject) => {
            myFetch("/computers/verbose/stored")
            .then(x=> {
                this.StoredComputerList = x.result;
                resolve(x.result);
            });
        })
        return await Promise.all([promise1, promise2]);
        
    },
    getLength() {
        console.log("getLength() called")
        this.ActiveListLength = this.ActiveComputerList.length;
        this.StoredComputerList = this.StoredComputerList.length;
    }
}