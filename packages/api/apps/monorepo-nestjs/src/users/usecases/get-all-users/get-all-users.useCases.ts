import { User } from '@app/users/domain/entities/user';
import { Either, left, Result, right } from '@ddd/ddd';
import { Inject, Injectable } from '@nestjs/common';
import { IUserRepo } from '@app/users/repo/user-repo.interface';
import { GetUserDTO } from './get-user.dto';
import { UserMap } from '@app/users/mappers/UserMap';

type Response = Either<Result<any> | Result<void>, Result<GetUserDTO[]>>;
@Injectable()
export class GetAllUsersUseCases {
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  async execute(): Promise<Response> {
    const user = await this.userRepo.findAll();
    if (user.isFailure) {
      return left(Result.fail('Domain model creation failed'));
    }
    const response = new UserMap().toRawUser(user.getValue());
    return right(Result.ok<GetUserDTO[]>(response));
  }
}
