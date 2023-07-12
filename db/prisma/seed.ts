import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    const twoSum = await prisma.problem.upsert({
        where: { title: 'Two Sum' },
        update: {},
        create: {
            title: 'Two Sum',
            content: 'Given an array of integers nums',
            solution: '2',
        },
    });
    const threeSum = await prisma.problem.upsert({
        where: { title: 'Three Sum' },
        update: {},
        create: {
            title: 'Three Sum',
            content: 'Given an integer array nums',
            solution: '3',
        },
    });
    console.log({ twoSum, threeSum });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
