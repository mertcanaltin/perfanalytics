import { ExposeId } from '@core/decorators/expose-id.decorator';
import { TagDTO } from '@modules/tag/dtos/tag.dto';
import { UserDTO } from '@modules/user/etc/user.dto';
import { Expose, Type } from 'class-transformer';
import { Types } from 'mongoose';
import { Device } from '../enums';

export class PageDTO {
  @ExposeId()
  @Expose()
  readonly _id: Types.ObjectId;

  @Expose()
  readonly url: string;

  @Expose()
  readonly device: Device;

  @Expose()
  @Type(() => TagDTO)
  readonly tag: TagDTO;

  @Expose()
  @Type(() => UserDTO)
  readonly owner: UserDTO;
}
