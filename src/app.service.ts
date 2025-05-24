import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Dummy feature start
  dummyServiceProperty1 = 1;
  dummyServiceProperty2 = 2;
  dummyServiceProperty3 = 3;
  dummyServiceProperty4 = 4;
  dummyServiceProperty5 = 5;

  dummyServiceMethod1() {
    return 1;
  }
  dummyServiceMethod2() {
    return 2;
  }
  dummyServiceMethod3() {
    return 3;
  }
  dummyServiceMethod4() {
    return 4;
  }
  dummyServiceMethod5() {
    return 5;
  }
  // Dummy feature end
}
