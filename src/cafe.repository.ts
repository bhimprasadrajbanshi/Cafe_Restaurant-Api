import { readFile, writeFile } from 'fs/promises';
import { CreateCafeDto } from './cafe/dtos/cafedto';


export class CafeRepository {
  async getOrderByID(id: string) {
    const contents = await readFile('data.json', 'utf8');
    const orderData = JSON.parse(contents);
    return orderData [id];
  }
  async getAllOrder() {
    const contents = await readFile('cafe.json', 'utf8');
    const orderData = JSON.parse(contents);
    return orderData;
  }
  async createNewOrder(data: CreateCafeDto) {
    //use cafe.json file and get raw data
    const CafeJson = await readFile('data.json', 'utf8');
    //convert the raw data to JSON
    const cafedata = JSON.parse(CafeJson);
    //create a new cafe json to store in the file
    cafedata[data.id] = {
      food_item: data.food_item,
      price: data.Price,
      costmerName: data.costomer_name,
      costomer_add:data.costomer_add,
      pymentId: data.paymentNo,
      costomerPhone: data.Costomer_phone,
    };
    //store the cafeJson
    await writeFile('cafe.json', JSON.stringify(cafedata));
  }
}