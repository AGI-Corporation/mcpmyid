import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddVirtualToolsToMcp1745000000000 implements MigrationInterface {
    name = 'AddVirtualToolsToMcp1745000000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "mcp"
            ADD "virtualTools" jsonb
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "mcp" DROP COLUMN "virtualTools"
        `)
    }

}
