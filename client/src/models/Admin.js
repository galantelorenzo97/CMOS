import myFetch from "./myFetch"

export default {
    addUser(user)
    {
        myFetch('/admin/methods/addUser', {
            Name: user.Name,
            Role: user.Role,
            Login: user.Login,
            Password: user.Password,
            Type_ID: user.Type_ID,
            Profile_Pic: user.Profile_Pic
        })
    }
}