# Documentation
 
 ## System User Types
- Companies
- Importers
 
 ## Features
- F01 - Register on the application – User: Importer
- F02 - Log in to the application – User: Importer
- F03 - Create a new cargo request for the merchandise – User: Importer
- F04 - Check pending requests – User: Importer
- F05 - Cancel a cargo request – User: Importer
- F06 - View statistical information – User: Importer
- F06.1 - See the percentage of cancellations against the total cargo requests – User: Importer
- F06.2 - View the calendar of upcoming arrivals with their imported cargo, sorted by arrival order to Montevideo – User: Importer
- F06.3 - See the participation of different cargo lines in their requests – User: Importer
- F07 - Log in to the application – User: Company
- F08 - Create a ship voyage – User: Company
- F09 - Assign a pending cargo request to a ship voyage bound for Montevideo – User: Company
- F10 - cargo rollover – User: Company
- F11 - cargo Manifest – User: Company
- F12 - Enable disabled importers – User: Company
- F13 - Dangerous cargo list – User: Company
 
 ## Feature Details
 
 ### F01 - Register on the application
 Access: Importer
 
 Description:
 
 - The user must enter the required data to register on the application.
 
 Validations:
 
 - The username (ID) must be unique, both among importers and companies.
 
 - The password must be at least 5 characters long and contain at least one lowercase letter, one uppercase letter, and one number.
 
 - All fields must be completed.
 
 - If an error occurs, an alert message will be displayed.
 
 ### F02 - Log in to the application
 Access: Importer
 
 Description:
 
 - The user must enter their login credentials.
 
 Validations:
 
 - The username (ID) must match a registered user (case insensitive).
 
 - The password must match the registered ID's password (case sensitive).
 
 - If an error occurs, an alert message will be displayed.
 
 ### F03 - Create a new cargo request for the merchandise
 Access: Importer
 
 Description:
 - The user must enter the cargo details.
 
 Validations:
 
 - The type of cargo must be selected:
 
 GENERAL CARGO
 
 REFRIGERATED
 
 DANGEROUS CARGO
 
 - A description of the cargo must be entered.
 
 - The port of origin must match a preloaded port.
 
 - The number of containers must be specified.
 
 - The company ID must be provided.
 
 - All fields must be completed. If any field is missing, an alert message will be displayed.
 
 - An alert will notify the user that the cargo request is pending confirmation once submitted.
 
 ### F04 - Check pending requests
 Access: Importer
 
 Description:
 
 - The user must enter the cargo details.
 
 Validations:
 
 - The user can check their pending requests.
 
 - A partial search can be performed using the cargo description (case insensitive).
 
 - The displayed results will be filtered. If no results are found, a message will be displayed.
 
 - If the request has been accepted, it will display an auto-generated request ID.
 
 ### F05 - Cancel a cargo request
 Access: Importer
 
 Description:
 
 - The user can cancel the cargo shipment.
 
 Validations:
 
 - A request can only be cancelled if it has not yet been confirmed.
 
 - If the user cancels more than three requests, they will be blocked.
 
 - The "Cancel" button will be active if the request status is "Pending." Once clicked, the status will change to "Cancelled."
 
 ### F06 - View statistical information
 Access: Importer
 
 #### F06.1 - View the percentage of cancellations against total cargo requests
 Access: Importer
 
 Description:
 
 - The percentage of cancelled requests will be displayed.
 
 Validations:
 
 - The total number of cancellations must be calculated and compared to the total number of cargo requests.
 
 #### F06.2 - View the calendar of upcoming arrivals with imported cargo sorted by arrival order to Montevideo
 Access: Importer
 
 Description:
 
 - The upcoming deliveries will be displayed in order of arrival.
 
 Validations:
 
 - The data of the next arrivals will be loaded in order of arrival.
 
 #### F06.3 - View the participation of different cargo lines in requests
 Access: Importer
 
 Description:
 
 - The user can see the number of shipments corresponding to each shipping line.
 
 Validations:
 
 - The different shipments and the total participation of companies in the requests will be displayed.
 
 - Companies with no participation will be excluded.
 
 ### F07 - Log in to the application
 Access: Company
 
 Description:
 
 - The user must enter their login credentials.
 
 Validations:
 
 - The username (ID) must match a registered user (case insensitive).
 
 - The password must match the registered ID's password (case sensitive).
 
 - If an error occurs, an alert message will be displayed.
 
 ### F08 - Create a ship voyage
 Access: Company
 
 Description:
 
 - A new cargo ship voyage can be created.
 
 Validations:
 
 - The ship must have a name.
 
 - The maximum number of containers must be specified.
 
 - The company ID (shipping line to which it belongs) must be provided.
 
 - The ship's arrival date must be displayed.
 
 - An auto-generated voyage ID will be assigned.
 
 ### F09 - Assign a pending cargo request to a ship voyage bound for Montevideo
 Access: Company
 
 Description:
 
 - Associate a pending cargo request with an available ship.
 
 Validations:
 
 - The voyage must be selected.
 
 - Cargo can only be assigned if the ship has available space and the importer is authorized.
 
 - All approved cargo loads for the ship must be verified.
 
 - The voyage must be selected from a dropdown list.
 
 - The cargo request status will automatically change to "CONFIRMED," and the voyage ID will be linked to the request.
 
 ### F10 - Cargo Rollover
 Access: Company
 
 Description:
 
 - Transfer cargo between ships.
 
 Validations:
 
 - If a request is initially confirmed but cannot be loaded, it will be transferred to another ship.
 
 - The transfer must include all cargo for the requester, so the new ship must have sufficient space for all items.
 
 ### F11 - Cargo Manifest
 Access: Company
 
 Description:
 
 - A detailed list of the ship's cargo.
 
 Validations:
 
 - The corresponding company must generate a list of the cargo for each voyage.
 
 - The manifest will include cargo details such as the port origin, number of containers, importer name, cargo description and type.
 
 - The voyage must be selected from a dropdown list to generate the manifest.
 
 ### F12 - Enable/Disabled Importers
 Access: Company
 
 Description:
 
 - Re-enable inactive importers.
 
 Validations:
 
 - A rule of three will be applied, where canceled reservations will be converted to ignored so that the rule is no longer met.
 
### F13 - Dangerous Cargo List
 Access: Company
 
 Description:
 
 - List of dangerous cargo on the ship.
 
 Validations:
 
 - An automatic list of the ship's dangerous cargo will be generated for submission to port authorities.
 
 - The "Verify Dangerous cargo" option must be selected within the cargo Manifest.
