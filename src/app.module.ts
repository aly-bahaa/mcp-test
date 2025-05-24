import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyProvider1 {}
@Injectable()
export class DummyProvider2 {}
@Injectable()
export class DummyProvider3 {}
@Injectable()
export class DummyProvider4 {}
@Injectable()
export class DummyProvider5 {}
@Injectable()
export class DummyProvider6 {}
@Injectable()
export class DummyProvider7 {}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    DummyProvider1,
    DummyProvider2,
    DummyProvider3,
    DummyProvider4,
    DummyProvider5,
    DummyProvider6,
    DummyProvider7,
  ],
})
export class AppModule {}
