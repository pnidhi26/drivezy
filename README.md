# Car-Rental-API

Car Rental API Management System using MongoDB and Node.js

Problem Statement: 

Consider the following description\requirement given by a Car Rental agency-

“Our company owns several Cars in various cities available for rent on a daily basis. Every Car has a vehicle number, model, seating capacity, rent per day etc. People make reservations/booking for these cars. Booking status of these cars include the customer details (name, Ph No.), issue date (the date on which car is given on rent) and return date (the date on which customer returns the car) of the car.” 

You have to make a basic system having the following features – 
• Add new cars 
• Book a specific car based on its availability. A car can have multiple bookings
• Show the cars that are available to book on a date, time, seating capacity or other filters
• Using Car Model (only) show the details of a particular car and its currently active booking

Update/Delete a Car from the system and ensure that the car is not already booked. Explanation of this point: Build endpoints to update and delete a rental car object from the database while ensuring the condition that update or delete operations are not allowed in case the status of the car is 'booked'.
