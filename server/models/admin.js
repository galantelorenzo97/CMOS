function addUserQuery(Name, Role, Login, Password, User_Type_ID, Profile_Pic) 
{
    console.log('INSERT INTO Users_T ' +
    'VALUES ' +
    '(NULL,"' + Name + '","' + Role + '","' + Login + '","' + Password + '",' + User_Type_ID + ',"' + Profile_Pic + '")')
    return 'INSERT INTO Users_T ' +
    'VALUES ' +
    '(NULL,"' + Name + '","' + Role + '","' + Login + '","' + Password + '",' + User_Type_ID + ',"' + Profile_Pic + '")';
}

module.exports = {
    addUserQuery
};