import {
    Table,
    Column,
    Model,
    HasMany,
    PrimaryKey,
    BelongsTo,
    ForeignKey,
    HasOne,
    DataType, Sequelize
} from 'sequelize-typescript';
import { PracticeType } from "./PracticeType";
import { PracticeProfile } from "./PracticeProfile";

@Table
export class Practice extends Model<Practice> {

    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.UUIDV1
    })
    id: string;

    @Column
    code: string;

    @Column
    name: string;

    @HasOne(() => PracticeProfile)
    profile: PracticeProfile;

    @ForeignKey(() => PracticeType)
    @Column
    practiceTypeId: string;

    @BelongsTo(() => PracticeType, 'practiceTypeId')
    practiceType: PracticeType;
}
