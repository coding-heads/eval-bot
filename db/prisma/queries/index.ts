import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProblem = async (
    title: string,
    content: string,
    solution: string
) => {
    const problem = await prisma.problem.create({
        data: {
            title: title,
            content: content,
            solution: solution,
        },
    });
    return problem;
};

export const getProblems = async () => {
    const problems = await prisma.problem.findMany();
    return problems;
};

/**
 * Update a problem in the database
 * @param title unique title of the problem
 * @param key key being updated
 * @param data value that will be updated to
 * @returns updated problem
 */
export const updateProblems = async (
    title: string,
    key: string,
    data: string
) => {
    const problem = await prisma.problem.update({
        where: {
            title: title,
        },
        data: {
            [key]: data,
        },
    });
    return problem;
};
