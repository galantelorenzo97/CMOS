
const allComputersQuery = "SELECT * from Computer_Inventory_T;"

const verboseJoinQuery = 
`
SELECT 
    Computer_Inventory_T.Computer_ID,
    Users_T.Name AS User,
    Locations_T.Location_Name AS Location,
    Computer_Inventory_T.Service_Tag,
    Processors_T.Name AS Processor,
    Operating_Systems_T.Name AS OS_Name,
    Computer_Status_T.Verbose AS Status
FROM Computer_Inventory_T
INNER JOIN Users_T ON Computer_Inventory_T.User_ID = Users_T.User_ID
INNER JOIN Locations_T ON Computer_Inventory_T.Location_ID = Locations_T.Location_ID
INNER JOIN Processors_T ON Computer_Inventory_T.Processor_ID = Processors_T.Processor_ID
INNER JOIN Operating_Systems_T ON Computer_Inventory_T.OS_ID = Operating_Systems_T.OS_ID
INNER JOIN Computer_Status_T ON Computer_Inventory_T.Status_ID = Computer_Status_T.Status_ID
WHERE Computer_Inventory_T.Computer_ID IS NOT NULL
GROUP BY Computer_Inventory_T.Computer_ID;
`

const verboseActiveQuery = 
`
SELECT 
    Computer_Inventory_T.Computer_ID,
    Users_T.Name AS User,
    Locations_T.Location_Name AS Location,
    Computer_Inventory_T.Service_Tag,
    Processors_T.Name AS Processor,
    Operating_Systems_T.Name AS OS_Name,
    Computer_Status_T.Verbose AS Status
FROM Computer_Inventory_T
INNER JOIN Users_T ON Computer_Inventory_T.User_ID = Users_T.User_ID
INNER JOIN Locations_T ON Computer_Inventory_T.Location_ID = Locations_T.Location_ID
INNER JOIN Processors_T ON Computer_Inventory_T.Processor_ID = Processors_T.Processor_ID
INNER JOIN Operating_Systems_T ON Computer_Inventory_T.OS_ID = Operating_Systems_T.OS_ID
INNER JOIN Computer_Status_T ON Computer_Inventory_T.Status_ID = Computer_Status_T.Status_ID
WHERE Computer_Inventory_T.Status_ID = 1
GROUP BY Computer_Inventory_T.Computer_ID;
`

const verboseStoredQuery = 
`
SELECT 
    Computer_Inventory_T.Computer_ID,
    Users_T.Name AS User,
    Locations_T.Location_Name AS Location,
    Processors_T.Name AS Processor,
    Operating_Systems_T.Name AS OS_Name,
    Computer_Status_T.Verbose AS Status
FROM Computer_Inventory_T
INNER JOIN Users_T ON Computer_Inventory_T.User_ID = Users_T.User_ID
INNER JOIN Locations_T ON Computer_Inventory_T.Location_ID = Locations_T.Location_ID
INNER JOIN Processors_T ON Computer_Inventory_T.Processor_ID = Processors_T.Processor_ID
INNER JOIN Operating_Systems_T ON Computer_Inventory_T.OS_ID = Operating_Systems_T.OS_ID
INNER JOIN Computer_Status_T ON Computer_Inventory_T.Status_ID = Computer_Status_T.Status_ID
WHERE Computer_Inventory_T.Status_ID = 0
GROUP BY Computer_Inventory_T.Computer_ID;
`

function singleVerboseComputerQuery(computerID) 
{
    const query = 
    `
    SELECT 
        Computer_Inventory_T.Computer_ID,
        Users_T.Name AS User,
        Locations_T.Location_Name AS Location,
        Processors_T.Name AS Processor,
        Operating_Systems_T.Name AS OS_Name,
        Computer_Status_T.Verbose AS Status
    FROM Computer_Inventory_T
    INNER JOIN Users_T ON Computer_Inventory_T.User_ID = Users_T.User_ID
    INNER JOIN Locations_T ON Computer_Inventory_T.Location_ID = Locations_T.Location_ID
    INNER JOIN Processors_T ON Computer_Inventory_T.Processor_ID = Processors_T.Processor_ID
    INNER JOIN Operating_Systems_T ON Computer_Inventory_T.OS_ID = Operating_Systems_T.OS_ID
    INNER JOIN Computer_Status_T ON Computer_Inventory_T.Status_ID = Computer_Status_T.Status_ID
    WHERE Computer_Inventory_T.Computer_ID =` + computerID + `
    GROUP BY Computer_Inventory_T.Computer_ID;
    `
    console.log(query);
    return query;
}

function verboseColValCheck(col, val)
{
    const query = 
    `
    SELECT 
        Computer_Inventory_T.Computer_ID,
        Users_T.Name AS User,
        Locations_T.Location_Name AS Location,
        Processors_T.Name AS Processor,
        Operating_Systems_T.Name AS OS_Name,
        Computer_Status_T.Verbose AS Status
    FROM Computer_Inventory_T
    INNER JOIN Users_T ON Computer_Inventory_T.User_ID = Users_T.User_ID
    INNER JOIN Locations_T ON Computer_Inventory_T.Location_ID = Locations_T.Location_ID
    INNER JOIN Processors_T ON Computer_Inventory_T.Processor_ID = Processors_T.Processor_ID
    INNER JOIN Operating_Systems_T ON Computer_Inventory_T.OS_ID = Operating_Systems_T.OS_ID
    INNER JOIN Computer_Status_T ON Computer_Inventory_T.Status_ID = Computer_Status_T.Status_ID
    WHERE Computer_Inventory_T.` + col +` = ` + val + `
    GROUP BY Computer_Inventory_T.Computer_ID;
    `
    console.log(query);
    return query;
}

module.exports = {
    allComputersQuery,
    verboseJoinQuery,
    verboseActiveQuery,
    verboseStoredQuery,
    singleVerboseComputerQuery,
    verboseColValCheck
};