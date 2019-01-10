import { Table, Column, Model, HasMany, PrimaryKey, BelongsTo, ForeignKey, HasOne } from 'sequelize-typescript';
import { PracticeType } from "./practice-type";
// import { PracticeProfile } from "./practice-profile";

@Table
export class Practice extends Model<Practice> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    code: string;

    @Column
    name: string;

    @ForeignKey(() => PracticeType)
    @Column
    practiceTypeId: string;

    @BelongsTo(() => PracticeType, 'practiceTypeId')
    practiceType: PracticeType;
}
