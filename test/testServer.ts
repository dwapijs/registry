import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';

export const sequelize = new Sequelize({
    database: 'registryTest',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory',
    operatorsAliases: Sequelize.Op as any,
    modelPaths: [path.join(__dirname, '../src/core/models')],
    logging: false
});
