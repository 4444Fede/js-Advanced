let tickets = 10;
let users = [
  { name: "papa", ticketsRequested: 3 },
  { name: "pepe", ticketsRequested: 5 },
  { name: "pipi", ticketsRequested: 4 },
  { name: "pupu", ticketsRequested: 2 },
];

function getTicket(user) {
  return new Promise((resolve) => {
    console.log(`${user.name} esta intentando comprar ${user.ticketsRequested} ticket(s).`);
    setTimeout(() => {
      if (tickets >= user.ticketsRequested) {
        tickets -= user.ticketsRequested;
        console.log(`${user.name} compro ${user.ticketsRequested} ticket(s). Quedan ${tickets} ticket(s)`);
      } else {
        console.log(`${user.name} no pudo comprar ${user.ticketsRequested} ticket(s). Insuficiente stock. Quedan ${tickets} ticket(s)`);
      }
      resolve();
    }, Math.random() * 10000);
  });
}
  
function buyTickets() {
    users.forEach(async (user) => {
        await getTicket(user);
    });
}
buyTickets();
 