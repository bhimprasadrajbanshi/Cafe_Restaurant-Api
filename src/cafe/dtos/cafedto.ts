import { IsInt, IsString } from 'class-validator';

export class CreateCafeDto {

  @IsInt()
  id:number;

  @IsString()
  food_item:string;

  @IsString()
  Price: string;

  @IsString()
  order_No: string;

  @IsString()
  costomer_name: string;

  @IsString()
  costomer_add: string;

  @IsInt()
  paymentNo: number;

  @IsInt()
  Costomer_phone: number;
}
