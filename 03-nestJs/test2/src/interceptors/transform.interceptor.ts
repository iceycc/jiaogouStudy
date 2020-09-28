import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data:any)=>{
      return {
        result:classToPlain(data),  // classToPlain关键的一个方法,不使用那么实体类中使用排除字段的不生效
        code:0,
        message:'请求成功'
      }
    }))
  }
}