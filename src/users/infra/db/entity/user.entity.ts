import { Authority } from 'src/entities/authority.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { UserWord } from 'src/entities/user-word.entity';
import { Gender } from 'src/users/common/user.union';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  Entity,
  JoinTable,
  Unique,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
@Unique(['id', 'email'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'PK_USER',
  })
  seq: number;

  @Column({ type: 'varchar', length: 16 })
  id: string;

  @Column('varchar', { length: 72 })
  password: string;

  @Column('varchar', { length: 40 })
  name: string;

  @Column('varchar', { length: 45 })
  email: string;

  @Column('varchar', { length: 1 })
  gender: Gender;

  @Column('varchar', { length: 13 })
  tel: string;

  @CreateDateColumn({ type: 'datetime' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updatedDate: Date;

  @DeleteDateColumn({ type: 'datetime' })
  deletedDate: Date;

  @Column('uuid', { nullable: true })
  signUpVerificationToken: string;

  @ManyToMany(() => Authority, (autority) => autority.users, {
    cascade: true,
  })
  @JoinTable()
  authorities: Authority[];

  @OneToMany(() => Sentence, (sentence) => sentence.user, {
    cascade: true,
  })
  sentences: Sentence[];

  @OneToMany(() => UserWord, (userWord) => userWord.user, { cascade: true })
  userWords: UserWord[];
}
