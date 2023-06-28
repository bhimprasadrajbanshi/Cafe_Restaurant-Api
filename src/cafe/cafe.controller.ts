import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCafeDto } from './dtos/cafedto';
import { CafeService } from 'src/cafe.service';

@Controller('cafe')
export class CafeController {
  cafeService: CafeService;

  constructor() {
    this.cafeService = new CafeService();
  }

  @Get('/:id')
  getOrderById(@Param('id') id: string) {
    return this.cafeService.getOrderById(id);
  }

  @Get()
  listOrder() {
    return this.cafeService.getAllOrder();
  }

  @Post()
  createNewOrder(@Body() cafe: CreateCafeDto) {
    return this.cafeService.createFoodOrder(cafe) ;
   /* return this.cafeService.createFoodOrder(cafe); */
  }

}