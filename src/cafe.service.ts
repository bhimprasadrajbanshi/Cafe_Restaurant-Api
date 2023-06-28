import { CafeRepository } from './cafe.repository';
import { CreateCafeDto } from './cafe/dtos/cafedto';


export class CafeService {
  cafeRepo: CafeRepository;

  constructor() {
    this.cafeRepo = new CafeRepository();
  }
 
  getOrderById(id: string) {
    return this.cafeRepo.getOrderByID(id);
  }
  
  getAllOrder() {
    return this.cafeRepo.getAllOrder();
  }

  createFoodOrder(cafe: CreateCafeDto) {
    return this.cafeRepo.createNewOrder(cafe);
  }

}

