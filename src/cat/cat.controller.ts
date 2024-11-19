import { Controller, Get } from '@nestjs/common';
import {CatService} from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get()
  getHelloCat(): string {
    return this.catService.getHelloCat();
  }
  @Get('introduce')
  introduce(): string {
    return this.catService.introduce();
  }
}
