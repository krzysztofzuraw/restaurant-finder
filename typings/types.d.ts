import * as services from '~src/services';

declare module 'Types' {
  export type Services = typeof services;
}
