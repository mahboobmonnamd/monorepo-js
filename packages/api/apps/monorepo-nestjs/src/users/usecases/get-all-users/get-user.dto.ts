import { UserProps } from '@app/users/domain/dto/user.dto';

export interface GetUserDTO extends UserProps {
  userId: string;
}
