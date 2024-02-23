import Dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import UserEntity from './entity/user.entity.js'
import ResumeEntity from './entity/resume.entity.js'

Dotenv.config()

export const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: [UserEntity, ResumeEntity],
})

dataSource.initialize()
