import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('animals')
export default class Animals{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('int')
    section: number;
    @Column()
    name: string;
    @Column()
    scientific_name: string;
    @Column()
    food_type: string;
    @Column('decimal')
    age: number;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}