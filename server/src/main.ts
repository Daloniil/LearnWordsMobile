import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5001;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());


    const config = new DocumentBuilder()
        .setTitle("Learn Words Auth")
        .setDescription("Learn Words Auth")
        .setVersion('1.0.0')
        .addTag('Daloniil')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    app.setGlobalPrefix('api/auth');
    await app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

start()
