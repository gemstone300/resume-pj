import authService from '../service/auth.service.js'

export default class authController {
    generateNewAccessTokenByFreshToken = async (req, res) => {
        const { refreshToken } = req.body

        const token = authService.verifyFreshToken(refreshToken)
        return res.json(token)
    }
}
