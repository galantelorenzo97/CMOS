const fullUserQuery =
`
SELECT
    ut.User_ID,
    ut.Name AS "User_Name",
    ut.Role,
    ut.User_Login,
    ut.Plaintext_Password,
    ut.User_Type_ID,
    utt.User_Type_Verbose
FROM Users_T ut
INNER JOIN Users_Type_T utt ON ut.User_Type_ID = utt.User_Type_ID
WHERE ut.User_ID IS NOT NULL
GROUP BY ut.User_ID;
`

module.exports = {
    fullUserQuery,
    Login(username, password) {
        const query = "SELECT * FROM Users_T WHERE (User_Login = '" +
        username + "' AND Plaintext_Password = '" + password + "')";
        return query;
    }
}