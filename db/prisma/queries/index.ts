import { PrismaClient, Problem } from '@prisma/client';

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
 * @returns updated problem or null if no problem was found
 */
export const updateProblems = async (
    title: string,
    key: string,
    data: string
): Promise<Problem | null> => {
    try {
        const problem = await prisma.problem.update({
            where: {
                title: title,
            },
            data: {
                [key]: data,
            },
        });
        return problem;
    } catch (error) {
        console.error(error);
        return null;
    }
};

/**
 * Delete a problem from the database
 * @param title unique title of problem
 * @returns deleted problem or nul if no problem was found
 */
export const deleteProblem = async (title: string): Promise<Problem | null> => {
    try {
        const problem = await prisma.problem.delete({
            where: {
                title: title,
            },
        });
        return problem;
    } catch (error) {
        console.error(error);
        return null;
    }
};
