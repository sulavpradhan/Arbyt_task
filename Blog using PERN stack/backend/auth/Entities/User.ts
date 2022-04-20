import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

export type status = "pending" | "active";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  firstname!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  lastname!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  username!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  password!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: true,
  })
  useremail!: string;

  @Column({
    type: "enum",
    enum: ["pending", "active"],
    default: "pending",
  })
  status!: status;

  // error must set some value

  @Column({
    type: "varchar",
    unique: true,
  })
  confirmation_code!: string;

  @Column({
    type: "varchar",
    unique: true,
    nullable: true,
  })
  resetToken!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
