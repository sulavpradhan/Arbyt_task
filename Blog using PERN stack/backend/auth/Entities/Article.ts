import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./User";

@Entity("Article")
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "text",
    nullable: true,
    unique: false,
  })
  title!: string;

  @Column({
    type: "text",
    nullable: true,
    unique: false,
  })
  excerpt!: string;

  @Column({
    type: "text",
    unique: false,
  })
  content!: any;

  // @Column({
  //   type: "varchar",
  //   nullable: true,
  //   unique: false,
  // })
  // categories!: string;

  @ManyToOne(() => User, (user) => user.articles)
  user!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
