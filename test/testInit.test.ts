import { sequelize } from "./testServer";
import { Practice } from "../src/core/models/practice";
import { PracticeType } from "../src/core/models/practice-type";
//import { PracticeProfile } from "../src/core/models/practice-profile";

describe("Test ini", () => {


    test("check models", async () => {
        sequelize.addModels([Practice, PracticeType]);
        await sequelize.sync({force: true});
        const prac: PracticeType = new PracticeType({id: 'Fac', description: 'Facility'});
        await prac.save();
        let count =await  PracticeType.findAll();
        expect(count.length).toBe(1);
    });
});
