import { readFile, writeFile } from 'fs/promises';
import { CreateCafeDto, QueryDto } from './cafe/dtos/cafedto';


export class CafeRepository {
  async getOrderByID(id: string) {
    const contents = await readFile('data.json', 'utf8');
    const orderData = JSON.parse(contents);
    return orderData [id];
  }
  async getAllOrder() {
    const contents = await readFile('data.json', 'utf8');
    const orderData = JSON.parse(contents);
    return orderData;
  }
  async createNewOrder(data: CreateCafeDto) {
    //use cafe.json file and get raw data
    const CafeJson = await readFile('data.json', 'utf8');
    //convert the raw data to JSON
    const cafedata = JSON.parse(CafeJson);
    //create  cafe order data  store in data the file
    cafedata[data.id] = {
      id : data.id,
      food_item: data.food_item,
      order_no: data.order_No,
      price: data.Price,
      costmerName: data.costomer_name,
      costomer_add:data.costomer_add,
      pymentId: data.paymentNo,
      costomerPhone: data.Costomer_phone,
    };
    //store the cafeJson
    await writeFile('data.json', JSON.stringify(cafedata));
  }
  
  async chatQuery(data: QueryDto) {
    //use cafeQuery.json file and get raw data
    const CafeJson = await readFile('cafeQuery.json', 'utf8');
    //convert the raw data to JSON
    const cafedata = JSON.parse(CafeJson);
    //create  cafe order data  store in data the file
    cafedata[data.id] = {
      id : data.id,
      costmerName: data.costomer_name,
      costomerPhone: data.Costomer_phone,
      gmail: data.Gmail,
      msg: data.msg,
    };
    //store the cafeJson
    await writeFile('cafeQuery.json', JSON.stringify(cafedata));
  }

}