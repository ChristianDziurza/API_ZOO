"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnimals1776893323132 = void 0;
class CreateAnimals1776893323132 {
    name = 'CreateAnimals1776893323132';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "animals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "section" integer NOT NULL, "name" character varying NOT NULL, "scientific_name" character varying NOT NULL, "food_type" character varying NOT NULL, "age" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "animals"`);
    }
}
exports.CreateAnimals1776893323132 = CreateAnimals1776893323132;
//# sourceMappingURL=1776893323132-CreateAnimals.js.map