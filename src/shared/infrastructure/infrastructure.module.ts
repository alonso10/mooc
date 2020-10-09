import * as Joi from "@hapi/joi";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserModule from "src/user/user.module";
import { databaseConfigFactory } from "./configuration/database.config";
import { NodeEnv } from "./configuration/environment/env-node.emun";

@Module({
    providers: [],
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: databaseConfigFactory,
            inject: [ConfigService]
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `env/${process.env.NODE_ENV}.env`,
            validationSchema: Joi.object({
                NODE_ENV: Joi.string()
                    .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
                    .required(),
            }),
        }),
        UserModule
    ]
})
export default class InfrastructureModule { }
