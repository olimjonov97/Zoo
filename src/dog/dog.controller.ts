import { Controller, Get, Param, Query } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get()
  sayHelloDog(): string {
    return this.dogService.sayHelloDog();
  }
  @Get('intoduce')
  intoduce(): string {
    return this.dogService.intoduce();
  }

  @Get('greet/:id')
  greet(@Param() params: any, @Query() query:any): string {
    console.log('params', params)

    console.log('query', query)
    return this.dogService.greet() 
  }
}
