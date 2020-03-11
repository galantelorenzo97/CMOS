/**
 * Computers Model
 * Written by Engr. Lorenzo Galante
 */

const Computer_Inventory = [
    {
        Service_Tag: "FNG123",
        Assigned_User: "Engr. Lorenzo Galante",
        Status: 1
    },
    {
        Service_Tag: "BH5270",
        Assigned_User: "Rabbi Moshe Plotkin",
        Status: 1
    },
    {
        Service_Tag: "RET234",
        Assigned_User: "",
        Status: -1
    },
    {
        Service_Tag: "INA000",
        Assigned_User: "",
        Status: 0
    }
];

export function getComputer(service_tag)
{
    const computer = Computer_Inventory.find(computerx => computerx.Service_Tag == service_tag);

    if (!computer) throw Error("Computer not found, check service tag");

    return computer;
}

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