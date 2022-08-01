import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlredyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error('Specification alredy exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
