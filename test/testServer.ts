import { Sequelize } from 'sequelize-typescript';
import { Practice } from "../src/core/models/practice";

export const sequelize = new Sequelize({
    database: 'registryTest',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory',
    operatorsAliases: Sequelize.Op as any,
    logging: true
});
