import { IWriteRepository } from '@domain/interfaces';
import { User } from '@infra/databases/typeorm/entities/user';
import { entityManager } from '@infra/databases/typeorm';
import { Repository } from 'typeorm';
import { UserCreateModel } from '@domain/usecases/user/models/UserCreate';

export class UserWriteRepository implements IWriteRepository<User> {
  private _userRepository: Repository<User>

  constructor() {
    this._userRepository = entityManager.getRepository(User)
  }

  async save(user: UserCreateModel): Promise<User | void> { 
    const userFind = await this._userRepository.findOneBy({ email: user.email })

    if (userFind) {
      return await this._userRepository.save({
        ...user,
        id: userFind.id,
        updatedAt: new Date() 
      })
    }

    return await this._userRepository.save(user)
  }

}