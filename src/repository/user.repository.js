// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
import { dataSource } from '../typeorm/index.js'

class UserRepository {
    findOneUserByUserId = async (userId) => {
        // const user = await prisma.user.findFirst({
        //     where: {
        //         userId: userId,
        //     },
        // })

        const user = await dataSource.getRepository('User').findOne({
            where: {
                userId,
            },
        })

        return user
    }

    selectOneUserbyClientId = async (clientId) => {
        // const user = await prisma.user.findFirst({
        //     where: {
        //         clientId,
        //     },
        // })

        const user = await dataSource.getRepository('User').findOne({
            where: {
                clientId,
            },
        })

        return user
    }

    selectOneUserbyEmail = async (email) => {
        // const user = await prisma.user.findFirst({
        //     where: {
        //         email,
        //     },
        // })

        const user = await dataSource.getRepository('User').findOne({
            where: {
                email,
            },
        })

        return user
    }

    selectOneUserbyEmailAndPassword = async (email) => {
        // const user = await prisma.user.findFirst({
        //     where: {
        //         email,
        //         password,
        //     },
        // })

        const user = await dataSource.getRepository('User').findOne({
            where: {
                email,
                password,
            },
        })

        return user
    }

    createUser = async (data) => {
        // await prisma.user.create({
        //     data,
        // })
        await dataSource.getRepository('User').insert(data)
    }
}
const userRepository = new UserRepository()
export default userRepository
