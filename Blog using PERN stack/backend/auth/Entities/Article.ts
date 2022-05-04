import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Category } from "./Category";

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

  @ManyToOne(() => User, (user) => user.articles, { cascade: true })
  user!: User;

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
