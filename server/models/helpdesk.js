/**
 * Helpdesk Ticket Model
 * Written by Lorenzo Galante
 */

const fullTicketJoinQuery =
    `
SELECT 
    htt.Ticket_ID,
    ut_a.Name AS User,
    htt.Summary,
    htt.Description,
    htt.Submitted,
    htt.Assigned_User_ID,
    ut_b.Name AS Assigned_User,
    ct.Category_Name,
    htt.Status_ID,
    tst.Verbose AS "Status_Verbose"
FROM Helpdesk_Tickets_T htt
LEFT JOIN Users_T ut_a ON htt.User_ID = ut_a.User_ID
LEFT JOIN Users_T ut_b ON htt.Assigned_User_ID = ut_b.User_ID
LEFT JOIN Categories_T ct ON htt.Category_ID = ct.Category_ID
LEFT JOIN Ticket_Status_T tst ON htt.Status_ID = tst.Status_ID
WHERE htt.Ticket_ID IS NOT NULL
GROUP BY htt.Ticket_ID
`

function assignTicket(userID, ticketID) {
    return "UPDATE Helpdesk_Tickets_T SET Assigned_User_ID = " + userID +
        ", Status_ID = 1 WHERE Ticket_ID = " + ticketID;
}

function openTicketsAssignedTo(userID) {
return `
    SELECT
    htt.Ticket_ID,
        ut_a.Name AS User,
            htt.Summary,
            htt.Description,
            htt.Submitted,
            htt.Assigned_User_ID,
            ut_b.Name AS Assigned_User,
            ct.Category_Name,
            htt.Status_ID,
            tst.Verbose AS "Status_Verbose"
    FROM Helpdesk_Tickets_T htt
    LEFT JOIN Users_T ut_a ON htt.User_ID = ut_a.User_ID
    LEFT JOIN Users_T ut_b ON htt.Assigned_User_ID = ut_b.User_ID
    LEFT JOIN Categories_T ct ON htt.Category_ID = ct.Category_ID
    LEFT JOIN Ticket_Status_T tst ON htt.Status_ID = tst.Status_ID
    WHERE htt.Assigned_User_ID = ` + userID + `
          AND (htt.Status_ID < 3) AND (htt.Status_ID > 0)
    GROUP BY htt.Ticket_ID
    `
}

function getComments(ticketID) {
//TABLE WAS MISSPELLED, Sticking with it due to too many issues
return `
    SELECT
        htct.Ticket_ID,
        htct.Comment_ID,
        ut.Name AS "User_Name",
        ut.Role,
        ut.Profile_Pic,
        htct.Ticket_Comment,
        htct.Submitted
    FROM Helpesk_Ticket_Comments_T htct
    INNER JOIN Users_T ut ON htct.User_ID = ut.User_ID
    WHERE Ticket_ID =  ` + ticketID + `
    ORDER BY htct.Comment_ID DESC
    `
}
module.exports = {
    fullTicketJoinQuery,
    assignTicket,
    openTicketsAssignedTo,
    getComments
}