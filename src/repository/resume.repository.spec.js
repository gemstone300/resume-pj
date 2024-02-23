import { dataSource } from '../typeorm/index.js'
import resumeRepository from './resume.repository.js'

jest.mock('../typeorm')

describe('ResumeRepository', () => {
    it('정렬된 전체 이력서 조회', async () => {
        dataSource.getRepository = (tableName) => ({
            find: jest.fn(() => [
                {
                    resumeId: 1,
                    title: '이력서 제목',
                    content: '자기소개',
                    status: 'APPLY',
                    user: {
                        name: '홍길동',
                    },
                    createdAt: new Date().toISOString(),
                },
            ]),
        })

        const sort = {
            orderKey: 'resumeId',
            orderValue: 'desc',
        }
        const result = await resumeRepository.selectAllSortedResumes(sort)

        expect(result).toBeDefined()
    })
})
