/*
    Move to server side once finished under guidance of Rabbi Moshe Plotkin
    @author Engr. Lorenzo Galante
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