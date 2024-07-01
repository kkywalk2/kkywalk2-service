import { Body, Controller, Post } from "@nestjs/common";
import { LoginRequestDto } from "@app/api/auth/dto/login-request.dto";
import { AuthService } from "@app/entity/domain/auth/auth.service";
import { TokenResponseDto } from "./dto/token-response.dto";
import { plainToInstance } from "class-transformer";

@Controller("/auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("/token")
    async create(@Body() req: LoginRequestDto): Promise<TokenResponseDto> {
        const token = await this.authService.signIn(req.email, req.password);
        return plainToInstance(TokenResponseDto, token);
    }

}
