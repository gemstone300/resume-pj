import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class userRepository {
    findOneUserByUserId = async (userId) => {
        const user = await prisma.user.findFirst({
            where: {
                userId: userId,
            },
        })

        return user
    }
}
export default userRepository
