/**
 * Helpdesk Model
 * Written by Engr. Lorenzo Galante
 */

import myFetch from "./myFetch"

export default {
    async getAllHelpdeskTickets() {
        const promise1 = new Promise((resolve, reject) => {
            myFetch("/helpdesk/")
            .then(x=> {
                resolve(x.result);
            });
        })
        return await Promise.all([promise1]);
        
    }
}