Following assignment is submitted by Pushpanjali Dokania for Cypress automation for Automaited.

**How to Run:**

        - Download code from git. Branch- main

        - run `npm install --save-dev typescript` in your terminal to install node_modules.

        - run `npx cypress open` to run the tests.

Following e2e tests & Test Cases are Covered. The focus of the tests is to validate basic scenario of Booking Ticket and validation on falilure of Test Cases in terms of unavailability of date and time for the ticket booking.

1. **cypress.config.ts**

   
        - Stores variable networkBandwidth (default=20KB) which throttles network response.
        - Stores baseURL of the page.


2. **Booking.cy.ts**

    - **`it('bookingTicket',callback)`**

        - Opens the ticketlouvre Booking Page (https://www.ticketlouvre.fr/louvre/b2c/index.cfm/calendar/eventCode/MusWeb).

        - Clicks on the date provided in the test /fixtures/Booking.json.

        - Fails the Test case if the provided date is unavailable for the Booking.

        - Clicks on the time slot provided in the test /fixtures/Booking.json.

        - Fails the Test case if the provided time slot is unavailable for the Booking.

        - select the total number of tickets for each category available from the Drop down.

        - Click on the valider button to validate the selected ticket.


**Code Highlights:**

1. Code does not use any hardcoded waits but ensures cypress waits till elements are visible.This allows test Cases to work under slow networks.
2. data-testid has been used wherever available to ensure no flaky tests.
3. BaseUrl is configured via Config file.
4. All Requests are throttled with throttling speeds (in KB) driven by an Environment Variable (configurable in config file).
5. Page Object Model have been used for easier code reuse.
6. Test Data is maintained in the fixtures folder.
7. Custom Commands have been used to ensure Code Modularity.


**Assumptions & Shortcomings in Project:**

In the interest of time, few things are not implemented in the project but can be thoroughly explained during the interview process:
1. I have used Cypress instead of PlayWright as I have very little experience in Playwright still. I am open to exploring it further & learning it.
2. Sign in /Sign up is not implemented.
2. Tickets are not actually booked. Selections are made on the landing page & "Confirm" Button is clicked.
3. Calendar Navigation is not implemented. Hence the input is a Date of the current month and not DD.MM.YYYY format.


**Challenges Expected During Automation:**

1. Payment System is a 3rd party System. Test Accounts need to be procured & tested against.
2. Multi Language support needs to be tested.
3. Slots available at time of Selection might not be available at time of booking causing Intermittent Failures especially if tested on a non isolated Database. This can be resolved by replacing Real APIs with stubbed responses.
4. Data Test-id is not available while using some selectors which can cause test flakiness.
