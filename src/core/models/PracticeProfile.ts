import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Practice } from "./practice";
import { PracticeType } from "./practice-type";

@Table
export class PracticeProfile extends Model<PracticeProfile> {
    @ForeignKey(() => Practice)
    @Column
    practiceId: string;
    @Column
    url: string;
    @BelongsTo(()=>Practice)
    practice:Practice;
}
