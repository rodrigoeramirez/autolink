import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola este es el nuevo proyecto desdasAutLink';
  }
}
