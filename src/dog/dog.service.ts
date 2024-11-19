import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  sayHelloDog(): string {
    return "Hello from Dog's Page";
  }
  intoduce(): string {
    return 'I am REX';
  }
  greet(): string {
    return 'How Are you ';
  }
}
