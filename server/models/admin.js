function addUserQuery(Name, Role, Login, Password, User_Type_ID, Profile_Pic) {
    return 'INSERT INTO Users_T ' +
        'VALUES ' +
        '(NULL,"' + Name + '","' + Role + '","' + Login + '","' + Password + '",' + User_Type_ID + ',"' + Profile_Pic + '")';
}

function findTopFiveUsers(Name) {
    query =
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
        WHERE ut.Name LIKE '` + Name + `%'
        GROUP BY ut.User_ID
        LIMIT 5;
        `
    console.log(query);
    return query;
}

module.exports = {
    addUserQuery,
    findTopFiveUsers
};