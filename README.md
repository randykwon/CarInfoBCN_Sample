** [Attention!!!] This is only for test & learn Hyperledger fabric & Composor!**

# Senario

Kertz is a car rental company and has more than 4,000 branches worldwide.

There are more than 800 partner companies, including auto repair companies, insurance companies, and used car dealers who sell used cars at the right time.

Consumer dissatisfaction is increasing in many parts of the world due to car breakdowns in various models.
Even with the same car model, it seems that unexpected problems are occurring depending on the region, environment, and driver habits.

In order to analyze this, it is necessary to acquire more data of the car in operation.
Based on the data analyzed through this analysis, we will sell cars with accurate information to used car dealers at the right time.

![Car Info BCN](./images/bcn00.png)

# Kertz & Partners Agony 

![Car Info BCN](./images/bcn03.png)

## Participants
| Participants | Issue |
|---|:---:|
| `Kertz` | Cost Increase |  |
| `Car Repair Company` | predict accurate parts demand |  |
| `User Car Dealer` | Need trusted Record |  |


# Car Operation Information Sharing BCN

![Car Info BCN](./images/bcn02.png)


# Getting started.

## Prerequisites
Hyperledger fabric
Hyperledger composer


# Models
## Assets
 
### CarInfo
 
asset CarInfo identified by carinfoId { <br>
  o String carinfoId <br>
  o OperatingData OperatingData optional <br>
  o String[] basic_car_info <br>
  o MaintenanceData mData optional <br>
  o String[] driver_info optional <br>
  o Status currunt_status default="None" <br>
} <br> <br>

### Contract


asset Contact identified by contractId { <br>
  o String contractId <br>
 <br>
  o String currentStatus <br>
  o String driverInformation <br>
  o String insuranceInformation <br>
  --> CarInfo carinformation optional <br>
} <br> <br>



## Transaction

### CreateContract

 transaction CreateContract { <br>
   o String driverInformation <br>
   o String insuranceInformation <br>
   o DateTime contractStartDate <br>
   o DateTime contractEndDate <br>
 } <br> <br>
### CreateCarOperationData

 transaction CreateCarOperationData { <br>
   o String carinfoId <br>
   o OperatingData OperatingData <br>
   o DateTime checkTime <br>
 } <br> <br>

### CreateMaintenanceData

 transaction CreateMaintenanceData { <br>
   o String carinfoId <br>
   o MaintenanceData mData <br>
   o DateTime checkTime <br> <br>
 } <br>
 
 
## References
....

