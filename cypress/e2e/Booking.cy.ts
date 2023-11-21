import page from "../pages/Booking.cy";
import networkSimulations from "../pages/NetworkSimulations.cy";


describe('template spec', () => {
  const re = new page();
  const network=new networkSimulations();



  beforeEach(()=>{
     network.networkThrottling();
      cy.visit("/");
})

  it('bookingTicket', () => {
  cy.fixture('Booking').then((data) => {
   re.bookDate(data.selectDate);
   re.bookTime(data.selectTime);
    cy.addSlots(data.line,data.quantity);
    cy.addSlots(data.line1,data.quantityAdult);
    cy.addSlots(data.line2,data.quantityChild);
    re.validate();
  })
});
})