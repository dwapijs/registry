import { sequelize } from "./testServer";
import { PracticeType } from "../src/core/models/PracticeType";
import { Practice } from "../src/core/models/Practice";
import { PracticeProfile } from "../src/core/models/PracticeProfile";

describe("Models", () => {

    beforeAll(async () => {
        await sequelize.sync({force: true});
        let practiceType: PracticeType = new PracticeType({id: 'Facility', description: 'Health Facility'});
        await practiceType.save();
        practiceType = new PracticeType({id: 'Partner', description: 'Partner'});
        await practiceType.save();
        let practice: Practice = new Practice({name: 'Demo', practiceTypeId: 'Facility'});
        let profile = new PracticeProfile({url: 'http://demo.kenyahmis.org', practiceId: practice.id});
        await practice.save();
        await profile.save();

    });

    test("check models", async () => {

        let count = await PracticeType.findAll();
        expect(count.length).toBe(2);
        count.forEach(c => console.log(c.description));
    });
});
