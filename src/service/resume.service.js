import resumeRepository from '../repository/resume.repository.js'

class resumeService {
    findAllSortedResumes = async (sort) => {
        const resumes = await resumeRepository.selectAllSortedResumes(sort)
        return resumes
    }

    findOneResumeByResumeId = async (resumeId) => {
        const resumes = await resumeRepository.selectOneResumeByResumeId(
            resumeId
        )
        return resumes
    }

    createResume = async ({ title, content, userId }) => {
        await resumeRepository.create({
            title,
            content,
            status: 'APPLY',
            userId,
        })
    }

    updateResumeByResumeId = async (resumeId, data, byUser) => {
        const resume = await resumeRepository.selectOneResumeByResumeId(
            resumeId
        )

        if (!resume) {
            throw {
                code: 401,
                message: '존재하지 않는 이력서 입니다.',
            }
        }

        if (byUser.grade === 'user' && resume.userId !== byUser.userId) {
            throw {
                code: 401,
                message: '올바르지 않은 요청입니다.',
            }
        }

        // 내가 작성한 이력서이거나 권한 등급이 admin이다.
        const { title, content, status } = data
        await resumeRepository.updateResumeByResumeId(resumeId, {
            title,
            content,
            status,
        })

        //await resumeRepository.updateResumeByResumeId(resumeId,data)
    }
}

export default resumeService
