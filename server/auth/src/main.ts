import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function start() {
    const PORT = process.env.PORT || 5001;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("Learn Words Auth")
        .setDescription("Learn Words Auth")
        .setVersion('1.0.0')
        .addTag('Daloniil')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    app.setGlobalPrefix('api/auth');
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

start()
