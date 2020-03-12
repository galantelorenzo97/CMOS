/**
 * Computers Model
 * Written by Engr. Lorenzo Galante
 */
import {Locations} from './Locations';

const Computer_Inventory = [
    {
        Service_Tag: "FNG123",
        Assigned_User: "Engr. Lorenzo Galante",
        Location: Locations[1],
        Status: 1
    },
    {
        Service_Tag: "BH5270",
        Assigned_User: "Rabbi Moshe Plotkin",
        Location: Locations[0],
        Status: 1
    },
    {
        Service_Tag: "RET234",
        Assigned_User: "",
        Location: Locations[2],
        Status: -1
    },
    {
        Service_Tag: "INA000",
        Assigned_User: "",
        Location: Locations[2],
        Status: 0
    }
];

//returns a whole computer based on the service tag
export function getComputer(service_tag)
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
}

//puts the computer status in human terms
export function verbalizeStatus(computer)
{
    if (computer.Status == 0)
    {
        return "Inactive";
    }
    else if (computer.Status == 1)
    {
        return "Active";
    }
    else
    {
        return "Retired";
    }
}