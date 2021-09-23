import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
// import { Strategy } from "passport"; // ini karena autocomplite dari vscode , disable untuk BUG FIX   @UseGuards(JwtGuard) src\auth\auth.controller.ts
import { ExtractJwt, Strategy } from "passport-jwt";  // Strategy untuk BUG FIX   @UseGuards(JwtGuard) src\auth\auth.controller.ts
import { UserService } from "src/user/user.service";

@Injectable()

// PassportStrategy(Strategy, 'jwt') = jwt name strategy nya bisa di rubah sesuai keinginan
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private userService: UserService
    ) {
        super({
            // ======================== ERROR 2, import { Strategy } from "passport-jwt"; 
            //    TypeError: JwtStrategy requires a function to retrieve jwt from requests (see option jwtFromRequest)
            //    at new JwtStrategy (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\passport-jwt\lib\strategy.js:55:15)
            //    at new MixinStrategy (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\passport\dist\passport\passport.strategy.js:32:13)
            //    at new JwtStrategy (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\src\auth\jwt.strategy.ts:14:9)
            //    at Injector.instantiateClass (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:291:19)
            //    at callback (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:43:41)
            //    at processTicksAndRejections (internal/process/task_queues.js:95:5)
            //    at Injector.resolveConstructorParams (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:119:24)
            //    at Injector.loadInstance (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:47:9)
            //    at Injector.loadProvider (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:69:9)
            //    at async Promise.all (index 4)
            // ======================== /ERROR 2, import { Strategy } from "passport-jwt"; 
            
            // ======================== SOLUSI ERROR 2
            // SEBELUMNYA : // JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  
            // SEHARUSNYA : (menggunakan j kecil)
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),      // ini merima tokenya dari mana , kalo ini dari authorization : Bearer <token>
             // ======================== /SOLUSI ERROR 2
            ignoreExpiration: false, // ini setting ada waktu ato tidak untuk expires nya (sama aja expires_in)
            secretOrKey: process.env.JWT_SECRET_KEY, // secretkey untuk generate token
        })
    }

    async validate(payload: any) {
        let user = await this.userService.findOne(payload.id)
        if (user) {
            return user
        }
        else {
            throw new UnauthorizedException()
        }
    }

}