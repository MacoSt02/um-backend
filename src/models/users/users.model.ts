import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ type: 'varchar', length: 50, nullable: false })
    username!: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false })
    password!: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci' })
    email!: string;
  
    @Column({ type: 'tinyint', nullable: false, default: () => '1' })
    isActive!: boolean;
  
    @Column({ type: 'varchar', length: 50, default: 'user', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci' })
    role!: string;
  
    @Column({ type: 'varchar', length: 50, nullable: false })
    firstname!: string;
  
    @Column({ type: 'varchar', length: 50, nullable: false })
    lastname!: string;
  
    @Column({ type: 'date', nullable: true })
    birthdate!: Date;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}