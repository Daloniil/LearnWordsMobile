import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const auth = req.headers.authorization;
            const bearer = auth.split(" ")[0];
            const token = auth.split(" ")[1];
            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'User unauthorized'});
            }

            req.user = this.jwtService.verify(token);
            return true;
        } catch (error) {
            throw new UnauthorizedException({message: 'User unauthorized'});
        }
        return undefined;
    }

}
