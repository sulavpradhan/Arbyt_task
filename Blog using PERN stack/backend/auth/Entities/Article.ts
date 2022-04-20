import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Article")
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  title!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  excerpt!: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false,
  })
  categories!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
