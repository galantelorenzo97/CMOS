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
    },
    async getHelpdeskTicketsAssignedToUser(userID) {
        const promise = new Promise((resolve, reject) => {
            myFetch("/helpdesk/assignedTo/" + userID)
            .then(x=> {
                resolve(x.result);
            });
        })
        return await Promise.all([promise]);
    },
    async getComments(ticketID) {
        const promise = new Promise((resolve, reject) => {
            myFetch("/helpdesk/methods/getComments/" + ticketID)
            .then(x=> {
                resolve(x.result);
            });
        })
        return await Promise.all([promise]);
    },
    postComment(ticketID, commentID, userID, commentToPost)
    {
        myFetch("/helpdesk/methods/postComment", {ticketID, commentID, userID, Comment: commentToPost})
    },
    disownTicket(ticketID)
    {
        myFetch("/helpdesk/methods/disownTicket/"+ticketID);
    },
    acceptTicket(userID, ticketID)
    {
        myFetch("/helpdesk/methods/assignTicket/"+userID+"/"+ticketID);
    },
    waitForUser(ticketID)
    {
        myFetch("/helpdesk/methods/waitForUser/"+ticketID);
    },
    closeTicket(ticketID)
    {
        myFetch("/helpdesk/methods/closeTicket/"+ticketID);
    },    
    reopenTicket(ticketID)
    {
        myFetch("/helpdesk/methods/reopenTicket/"+ticketID);
    }    
}