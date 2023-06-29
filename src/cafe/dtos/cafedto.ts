import { IsInt, IsString } from 'class-validator';

export class CreateCafeDto {

  @IsInt()
  id:number;

  @IsString()
  food_item:string;

  @IsInt()
  Price: number;

  @IsInt()
  order_No: number;

  @IsString()
  costomer_name: string;

  @IsString()
  costomer_add: string;

  @IsInt()
  paymentNo: number;

  @IsInt()
  Costomer_phone: number;
}


export class QueryDto{
@IsInt()
id:number;

@IsString()
costomer_name: string;

@IsString()
Gmail: string;

@IsInt()
Costomer_phone: number;

@IsString()
msg:string
}