const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const db = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    db.save(email, price, timestamp);
})

ticketManager.on("error", (error) => {
    console.error(error.message);
})


console.log(`We now have: ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
ticketManager.buy("test@email", 20);
ticketManager.buy("test@email", 20);
ticketManager.buy("test@email", 20);
ticketManager.buy("test@email", 20);