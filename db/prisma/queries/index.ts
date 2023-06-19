import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createProblem = async (title: string, content: string, solution: string) => {
    const problem = await prisma.problem.create({
        data: {
            title: title,
            content: content,
            solution: solution,
        },
    })
    return problem;
}

export const getProblems = async () => {
    const problems = await prisma.problem.findMany();
    return problems;
}
