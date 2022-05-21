import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';

export abstract class BaseResponse {
  abstract statusCode: number;
  abstract statusMsg: string;
}

export type ApiResponse<T extends BaseResponse> = Promise<T>;

export const ApiResponseDecoratorFactory = <T extends Type<any>>(
  ApiResponseDecorator: (
    options?: ApiResponseOptions,
  ) => MethodDecorator & ClassDecorator,
  ExtraResponse?: T,
) => {
  return applyDecorators(
    ApiExtraModels(ExtraResponse),
    ApiResponseDecorator({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ExtraResponse) },
          { $ref: getSchemaPath(BaseResponse) },
        ],
      },
    }),
  );
};
