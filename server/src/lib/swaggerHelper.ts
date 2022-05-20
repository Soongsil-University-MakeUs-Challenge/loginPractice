import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import swaggerUi from 'swagger-ui-express';

const SWAGGER_ENDPOINT = '/api-docs';

export class SwaggerHelper {
  static setup(app: INestApplication): void {
    const serverUrl = '/';

    const options = new DocumentBuilder()
      .setTitle('malang online API Docs')
      .setDescription('malang online API description')
      .setVersion('1.0.0')
      .addServer(serverUrl)
      .addBearerAuth(
        {
          bearerFormat: 'Bearer',
          scheme: 'Bearer',
          type: 'http',
          in: 'Header',
        },
        'access-token',
      )
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(SWAGGER_ENDPOINT.slice(1), app, document);
  }

  static routerHandlingForLambda(event: any) {
    if (event.path === '/fake-swagger-ui-express') {
      swaggerUi.setup(null);
    }

    if (event.path === SWAGGER_ENDPOINT) {
      event.path = SWAGGER_ENDPOINT + '/';
    } else if (event.path.includes('/swagger-ui')) {
      event.path = event.path.replace(
        '/swagger-ui',
        SWAGGER_ENDPOINT + '/swagger-ui',
      );
    }
  }
}
