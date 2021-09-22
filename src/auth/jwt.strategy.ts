import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { ExtractJwt } from "passport-jwt";
import { UserService } from "src/user/user.service";

@Injectable()

// PassportStrategy(Strategy, 'jwt') = jwt name strategy nya bisa di rubah sesuai keinginan
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private userService :UserService
    ){
        super({
            JwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),  // ini merima tokenya dari mana , kalo ini dari authorization : Bearer <token>
            ignoreExpiration : false, // ini setting ada waktu ato tidak untuk expires nya (sama aja expires_in)
            secretOrKey : process.env.JWT_SECRET_KEY , // secretkey untuk generate token
        })
    }

    async validate(payload : any) {
        let user = await this.userService.findOne(payload.id)
        if(user){
            return user
        }
        else {
            throw new UnauthorizedException()
        }
    }

}