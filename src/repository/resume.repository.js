import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class resumeRepository {
    selectAllSortedResumes = async (sort) => {
        const resumes = await prisma.resume.findMany({
            select: {
                resumeId: true,
                title: true,
                content: true,
                status: true,
                user: {
                    select: {
                        name: true,
                    },
                },
                createdAt: true,
            },
            orderBy: [
                {
                    [orderKey]: orderValue.toLowerCase(),
                },
            ],
        })
        return resumes
    }

    selectOneResumeByResumeId = async (resumeId) => {
        const resume = await prisma.resume.findFirst({
            where: {
                resumeId: +resumeId,
            },
            select: {
                resumeId: true,
                title: true,
                content: true,
                status: true,
                user: {
                    select: {
                        name: true,
                    },
                },
                createdAt: true,
            },
        })

        return resume
    }

    createResume = async (data) => {
        await prisma.resume.create({
            data,
        })
    }

    updateResumeByResumeId = async (resumeId, data) => {
        await prisma.resume.update({
            where: {
                resumeId: +resumeId,
            },
            data,
        })
    }
}

export default resumeRepository
