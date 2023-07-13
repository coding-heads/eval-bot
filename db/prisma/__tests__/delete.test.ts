import { deleteProblem } from '../queries';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const test = async () => {
    const problem = await deleteProblem('Two Sum');
    console.log(problem);
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
