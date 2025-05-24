import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Dummy feature start
  dummyProperty1 = 'dummy1';
  dummyProperty2 = 'dummy2';
  dummyProperty3 = 'dummy3';
  dummyProperty4 = 'dummy4';
  dummyProperty5 = 'dummy5';
  dummyProperty6 = 'dummy6';
  dummyProperty7 = 'dummy7';
  dummyProperty8 = 'dummy8';
  dummyProperty9 = 'dummy9';
  dummyProperty10 = 'dummy10';

  dummyMethod1() {
    return 'dummy1';
  }
  dummyMethod2() {
    return 'dummy2';
  }
  dummyMethod3() {
    return 'dummy3';
  }
  dummyMethod4() {
    return 'dummy4';
  }
  dummyMethod5() {
    return 'dummy5';
  }
  dummyMethod6() {
    return 'dummy6';
  }
  dummyMethod7() {
    return 'dummy7';
  }
  dummyMethod8() {
    return 'dummy8';
  }
  dummyMethod9() {
    return 'dummy9';
  }
  dummyMethod10() {
    return 'dummy10';
  }
  // Dummy feature end
}
