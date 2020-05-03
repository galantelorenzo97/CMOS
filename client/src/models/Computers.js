/**
 * Computers Model
 * Written by Engr. Lorenzo Galante
 */
//import {Locations} from './Locations';
//import { CurrentUser } from "./Users";

import myFetch from "./myFetch"

export let ActiveComputerList = [];
export let StoredComputerList = [];

export default {
    ActiveComputerList : [],
    StoredComputerList : [],
    getCompleteComputerList() {
        myFetch("/computers/verbose/active")
        .then(x=> {
            this.ActiveComputerList = x.result;
        });
        myFetch("/computers/verbose/stored")
        .then(x=> {
            this.StoredComputerList = x.result;
        });
    },
    getLength(list) {
        return list.length;
    }
}