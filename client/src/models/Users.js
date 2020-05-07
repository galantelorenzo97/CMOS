/*
    Move to server side once finished under guidance of Rabbi Moshe Plotkin
    @author Engr. Lorenzo Galante
*/
/*

const Users = 
[
    {
        Name: "Lorenzo", 
        Password: "SamplePassword", 
        Email: "galantel1@hawkmail.newpaltz.edu",
        Admin: 1
    },
];

*/
import myFetch from "./myFetch";

export let CurrentUser = null;

export async function Login(username, password) 
{
    const user = await myFetch('/users/login', { username, password }) ;
    CurrentUser = user;
    return CurrentUser = user;
}

export function Logout()
{
    CurrentUser = null;
}