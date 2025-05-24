import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('dummy test 1', () => {
    expect(true).toBe(true);
  });
  it('dummy test 2', () => {
    expect(true).toBe(true);
  });
  it('dummy test 3', () => {
    expect(true).toBe(true);
  });
  it('dummy test 4', () => {
    expect(true).toBe(true);
  });
  it('dummy test 5', () => {
    expect(true).toBe(true);
  });
  it('dummy test 6', () => {
    expect(true).toBe(true);
  });
  it('dummy test 7', () => {
    expect(true).toBe(true);
  });
  it('dummy test 8', () => {
    expect(true).toBe(true);
  });
  it('dummy test 9', () => {
    expect(true).toBe(true);
  });
  it('dummy test 10', () => {
    expect(true).toBe(true);
  });
});
