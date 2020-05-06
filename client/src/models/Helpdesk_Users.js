/**
 * Helpdesk User Model
 * Written by Engr. Lorenzo Galante
 */

import myFetch from "./myFetch"

let completeUserList = [];

export default {
    completeUserList,
    async getCompleteUserList() {
        const promise1 = new Promise((resolve, reject) => {
            myFetch("/users/")
            .then(x=> {
                this.completeUserList = x.result;
                resolve(x.result);
            });
        })
        return await Promise.all([promise1]);   
    }
}