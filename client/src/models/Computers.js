/**
 * Computers Model
 * Written by Engr. Lorenzo Galante
 * 
 * Many Thanks to my friend Vinston Guillaume for the help with Promises,
 * and a big thanks to my friend Anthony Allwood (@AnthonyAllwood) for putting 
 * me in touch with him!
 */

import myFetch from "./myFetch"

export let ActiveComputerList = [];
export let StoredComputerList = [];

export let ActiveListLength = 0;
export let StoredListLength = 0;

export default {
    async getCompleteComputerList() {
        const promise1 = new Promise((resolve, reject) => {
            myFetch("/computers/verbose/active")
            .then(x=> {
                this.ActiveComputerList = x.result;
                resolve(x.result);
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
        
    }
}