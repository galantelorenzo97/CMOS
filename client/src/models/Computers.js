/**
 * Computers Model
 * Written by Engr. Lorenzo Galante
 */
//import {Locations} from './Locations';
//import { CurrentUser } from "./Users";

import myFetch from "./myFetch"

export let ActiveComputerList = [];
export let StoredComputerList = [];

export default {
    ActiveComputerList : [],
    getCompleteComputerList() {
        myFetch("/computers")
        .then(x=> {
            this.ActiveComputerList = x.result;
            console.log(x.result);
            console.log(this.ActiveComputerList);
        });
    }
}
//returns a whole computer based on the service tag
/*export function getComputer(service_tag)
{
    const computer = Computer_Inventory.find(computerx => computerx.Service_Tag == service_tag);

    if (!computer) throw Error("Computer not found, check service tag");

    return computer;
}

//returns the index of the computer in question
export function getComputerIndex(service_tag)
{
    const computer = getComputer(service_tag);

    const computer_Index = Computer_Inventory.findIndex(computer);

    return computer_Index;
}

//returns computer by location
export function getComputersByLocation(location)
{
    const computer_list = Computer_Inventory.filter(computerx => computerx.Location == location);

    if (computer_list.length == 0) throw Error("No computers in location specified");

    return computer_list;
}*/