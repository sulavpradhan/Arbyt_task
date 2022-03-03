import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
