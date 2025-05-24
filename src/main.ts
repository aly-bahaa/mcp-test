import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Dummy feature start
declare function dummyFunc1(): void;
declare function dummyFunc2(): void;
declare function dummyFunc3(): void;
declare function dummyFunc4(): void;
declare function dummyFunc5(): void;
// Dummy feature end

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
