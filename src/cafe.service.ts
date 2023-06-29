import { CafeRepository } from './cafe.repository';
import { CreateCafeDto, QueryDto } from './cafe/dtos/cafedto';


export class CafeService {
  cafeRepository: CafeRepository;

  constructor() {
    this.cafeRepository = new CafeRepository();
  }
 
  getOrderById(id: string) {
    return this.cafeRepository.getOrderByID(id);
  }
  
  getAllOrder() {
    return this.cafeRepository.getAllOrder();
  }

  createNewOrder(cafe: CreateCafeDto) {
    return this.cafeRepository.createNewOrder(cafe);
  }

  chatQuery(data: QueryDto) {
    return this.cafeRepository.chatQuery(data);
  }
  feedback(data: QueryDto) {
    return this.cafeRepository.feedback(data);
  }

}

