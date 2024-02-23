//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
import { dataSource } from '../typeorm/index.js'

class ResumeRepository {
    selectAllSortedResumes = async (sort) => {
        const resumes = await dataSource.getRepository('Resume').find({
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
            order: {
                [sort.orderKey]: sort.orderValue,
            },
        })
        return resumes
        // const resumes = await prisma.resume.findMany({
        //     select: {
        //         resumeId: true,
        //         title: true,
        //         content: true,
        //         status: true,
        //         user: {
        //             select: {
        //                 name: true,
        //             },
        //         },
        //         createdAt: true,
        //     },
        //     orderBy: [
        //         {
        //             [sort.orderKey]: sort.orderValue.toLowerCase(),
        //         },
        //     ],
        // })
        // return resumes
    }

    selectOneResumeByResumeId = async (resumeId) => {
        // const resume = await prisma.resume.findFirst({
        //     where: {
        //         resumeId: +resumeId,
        //     },
        //     select: {
        //         resumeId: true,
        //         title: true,
        //         content: true,
        //         status: true,
        //         user: {
        //             select: {
        //                 name: true,
        //             },
        //         },
        //         createdAt: true,
        //     },
        // })
        const resume = await dataSource.getRepository('Resume').findOne({
            where: {
                resumeId: +resumeId,
            },

            select: {
                resumeId: true,
                title: true,
                content: true,
                status: true,
                userId: true,
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
        await dataSource.getRepository('Resume').insert(data)

        // await prisma.resume.create({
        //     data,
        // })
    }

    updateResumeByResumeId = async (resumeId, data) => {
        await dataSource.getRepository('Resume').update(
            {
                resumeId: +resumeId,
            },
            data
        )
        // await prisma.resume.update({
        //     where: {
        //         resumeId: +resumeId,
        //     },
        //     data,
        // })
    }

    deleteResumeByResumeId = async (resumeId) => {
        await dataSource.getRepository('Resume').delete({
            resumeId: +resumeId,
        })
        // await prisma.resume.delete({
        //     where: {
        //         resumeId: +resumeId,
        //     },
        // })
    }
}

const resumeRepository = new ResumeRepository()
export default resumeRepository
