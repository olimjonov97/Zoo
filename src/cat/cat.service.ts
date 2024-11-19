import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHelloCat(): string {
    return 'Hello from Cat World!';
  }
  introduce(): string {
    return 'I am Tom!';
  }
 
}
