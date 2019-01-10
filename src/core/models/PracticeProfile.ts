import { BelongsTo, Column, ForeignKey, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Practice } from "./Practice";

@Table
export class PracticeProfile extends Model<PracticeProfile> {
    @PrimaryKey
    @ForeignKey(() => Practice)
    @Column
    practiceId: string;

    @Column
    url: string;

    @BelongsTo(()=>Practice)
    practice:Practice;
}
