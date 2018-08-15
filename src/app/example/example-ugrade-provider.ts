import {TestService} from './example.service';

export function testServiceFactory(i: any) {
  return i.get('serviceId');
}

export const testServiceProvider = {
  provide: TestService,
  useFactory: testServiceFactory,
  deps: ['$injector']
};
