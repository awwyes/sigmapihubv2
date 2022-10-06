const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // Create a single user record
    await prisma.user.create({
        data: {
            firstName: 'Tony',
            lastName: 'Burks',
            email: 'tonyburks123@gmail.com',
            profile: {
                create: { bio: 'This is my bio'},
            },
        },
    })

    // Create many user records
    const createMany = await prisma.user.createMany({
        data: [
            { name: 'Jacob', email: 'test@test.com' },
            { name: 'Kevin', email: 'test2@test.com' },
            { name: 'Paul', email: 'test3@test.com' },
            { name: 'Andrew', email: 'test4@test.com' },
        ],
        skipDuplicates: true, // Skip if it finds same values
    })

    // const post = await prisma.post.update({
    //     where: { id: 1 },
    //     data: { published: true },
    // })
    // console.log(post)
    

    const allUsers = await prisma.user.findMany({
        include: {
            profile: true,
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })