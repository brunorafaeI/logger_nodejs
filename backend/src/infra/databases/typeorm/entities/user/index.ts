import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

import { PostEntity } from "@domain/entities";
import { Role } from "@common/utils/enum";

@Entity("users")
export class User {

  @PrimaryGeneratedColumn("uuid")
  id?: string

  @Column("varchar", { name: "name", nullable: false, length: 80 })
  name!: string

  @Column("varchar", { name: "email", nullable: false, unique: true, length: 80 })
  email!: string;

  @Column("varchar", { name: "role", nullable: false, unique: true, length: 80 })
  role?: Role;

  @Column("varchar", { name: "role", nullable: false, unique: true, length: 80 })
  posts?: PostEntity[];

  @Column("timestamp without time zone", { name: "created_at", nullable: true, default: "now" })
  createdAt?: Date

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt?: Date
}