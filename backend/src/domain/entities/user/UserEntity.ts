import { BaseEntity } from "@domain/entities/BaseEntity";
import { PostEntity } from '@domain/entities/post/PostEntity';
import { Role } from "@common/utils/enum";

export abstract class UserEntity extends BaseEntity {
  protected name!: string
  protected email!: string
  protected role?: Role
  protected posts?: PostEntity[]
}