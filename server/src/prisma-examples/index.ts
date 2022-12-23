import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
//     // Connect the client
//     await prisma.$connect().then(() => { console.log("> Connected!"); });
//     // ... you will write your Prisma Client queries here
//     // const allUsers = await prisma.user.findMany();
//     // console.log(allUsers);

//     // await prisma.user.create({
//     //     data: {
//     //         name: 'Rich',
//     //         email: 'hello@prisma.com',
//     //         firstName: "Austin",
//     //         lastName: "Mattix",
//     //         posts: {
//     //             create: {
//     //                 title: 'My first post',
//     //                 body: 'Lots of really interesting stuff',
//     //                 slug: 'my-first-post',
//     //             },
//     //         },
//     //     },
//     // });

//     // const allUsers = await prisma.user.findMany({
//     //     include: {
//     //         posts: true,
//     //     },
//     // });
//     // console.dir(allUsers, { depth: null });


// }

async function main() {
    // await prisma.post.update({
    //     where: {
    //         slug: 'my-first-post',
    //     },
    //     data: {
    //         comments: {
    //             createMany: {
    //                 data: [
    //                     { comment: 'Great post!' },
    //                     { comment: "Can't wait to read more!" },
    //                 ],
    //             },
    //         },
    //     },
    // });
    // const posts = await prisma.post.findMany({
    //     include: {
    //         comments: true,
    //     },
    // });

    // console.dir(posts, { depth: Infinity });

    // const filteredPosts = await prisma.post.findMany({
    //     where: {
    //       OR: [{ title: { contains: 'hello' } }, { body: { contains: 'hello' } }],
    //     },
    //   })

    // const post = await prisma.post.create({
    //     data: {
    //         title: 'Join us for Prisma Day 2020',
    //         slug: 'prisma-day-2020',
    //         body: 'A conference on modern application development and databases.',
    //         author: {
    //             connect: { email: 'hello@prisma.com' },
    //         },
    //     },
    // });

    // const user = await prisma.comment
    //     .findUnique({
    //         where: { id: '60ff4e9500acc65700ebf470' },
    //     });
    // // .post()
    // // .user();

    // const deletedUser = await prisma.user.delete({
    //     where: { email: 'sarah@prisma.io' },
    // });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        // tslint:disable-next-line:no-console
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });