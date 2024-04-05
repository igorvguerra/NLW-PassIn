import { prisma } from '../src/lib/prisma';

async function seed() {
    await prisma.event.create({
        data: {
            id: '1103622e-42a6-4768-8e53-a9d682fb2134',
            title: 'United Summit',
            details: 'Um evento para devs apaixonados por código.',
            slug: 'united-summit',
            maximumAttendees: 120,            
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})