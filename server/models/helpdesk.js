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

module.exports = {
    fullTicketJoinQuery
}