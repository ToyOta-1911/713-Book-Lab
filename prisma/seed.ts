import {createEvents} from '../src/db/createEvents';
import {prisma} from '../src/lib/prisma'
// createEvents()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
const seedData = async ()=> {
   await prisma.booklist.deleteMany();
   await prisma.organizer.deleteMany();
   await createEvents();
}
await seedData();
