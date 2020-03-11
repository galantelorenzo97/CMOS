/*
    Move to server side once finished under guidance of Rabbi Moshe Plotkin
    @author Engr. Lorenzo Galante
*/
const Users = 
[
    {
        Name: "Lorenzo", Password: "SamplePassword", Email: "galantel1@hawkmail.newpaltz.edu"
    },
];

export let CurrentUser = null;

export function Login(email, password) 
{
    const user = Users.find(x => x.Email == email);
    
    if(!user) throw Error("User not found");
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}