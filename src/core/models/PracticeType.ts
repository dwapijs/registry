import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import { Practice } from "./Practice";

@Table
export  class PracticeType extends Model<PracticeType> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    description: string;

    @HasMany(() => Practice)
    practices: Practice[];
}
