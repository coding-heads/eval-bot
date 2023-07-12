import { updateProblems } from '../queries';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const test = async () => {
    const twoSum = await updateProblems(
        'Two Sum',
        'content',
        'Updated content'
    );
    console.log({ twoSum });
};

test()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
