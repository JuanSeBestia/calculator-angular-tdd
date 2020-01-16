import { myInterceptor } from './myInterceptor';

describe('HttpInterceptor', () => {
  it('should create an instance', () => {
    expect(new myInterceptor()).toBeTruthy();
  });
});
