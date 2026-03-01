import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddVirtualToolTable1745000000000 implements MigrationInterface {
    name = 'AddVirtualToolTable1745000000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "virtual_tool" (
                "id" character varying(21) NOT NULL,
                "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "mcpId" character varying(21) NOT NULL,
                "name" character varying NOT NULL,
                "description" character varying NOT NULL,
                "baseActions" jsonb NOT NULL,
                "ruleSets" jsonb NOT NULL DEFAULT '[]',
                "status" character varying DEFAULT 'ENABLED' NOT NULL,
                CONSTRAINT "pk_virtual_tool" PRIMARY KEY ("id"),
                CONSTRAINT "fk_virtual_tool_mcp_id" FOREIGN KEY ("mcpId") REFERENCES "mcp"("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `)
        await queryRunner.query(`
            CREATE INDEX "idx_virtual_tool_mcp_id" ON "virtual_tool" ("mcpId")
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "idx_virtual_tool_mcp_id"
        `)
        await queryRunner.query(`
            DROP TABLE "virtual_tool"
        `)
    }
}
