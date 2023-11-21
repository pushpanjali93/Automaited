class page {

    elements = {
        dateDialogBox: () => cy.get("[id='top-left']"),
        date: () => cy.get("[data-handler='selectDay']>a"),
        timeDialogBox: () => cy.get("[id='top-left-perf']"),
        time: () => cy.get("[data-performancename='Musée Web']"),
        validateDialogBox: () => cy.get("[id='bottom-left']"),
        validate: () => cy.get("[class='stepTitle'] a").eq(1),
    }

    //Fetch the available date for booking.
    bookDate(selectDate: string) {
        this.elements.dateDialogBox().should('be.visible').within(() => {
            let bookAvailable = false;
            this.elements.date().should('be.visible').each(($el) => {
                let date = $el.text();
                if (date === `${selectDate}`) {
                    cy.wrap($el).should('be.visible').click();
                    bookAvailable = true;
                    return false; // returning false to break the loop early.
                }
            })
                .then(() => {
                    expect(bookAvailable).to.equal(true);
                })
        })
    }


    //Fetch all the available and unavailable time displayed.
    bookTime(selectTime: String) {
        this.elements.timeDialogBox().should('be.visible').within(() => {
            let timeAvailable = false;
            this.elements.time().should('be.visible').each(($el) => {
                let time = $el.text();
                if (time === `${selectTime}`) {
                    cy.wrap($el).should('be.visible').contains('14:30').click();
                    timeAvailable = true;
                    return false; // returning false to break the loop early.
                }
            })
                .then(() => {
                    expect(timeAvailable).to.equal(true);
                })
        })
    }

    validate() {
        this.elements.validateDialogBox().scrollIntoView().should('be.visible').within(() => {
            this.elements.validate().invoke('removeAttr', 'target').click();
            cy.url()
                .should('include', 'https://www.ticketlouvre.fr');
        })
    }
}

export default page;
