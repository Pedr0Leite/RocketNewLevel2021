import { MigrationInterface, QueryRunner, Table, TableExclusion, TableForeignKey } from "typeorm";

export class CreateConnections1619195338799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "connections",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "admin_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "socket_id",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
        }
        ],
    })
    );
    
    //foreignKeys is to use fields from other tables to make relantionships - Another wait to create FK
      await queryRunner.createForeignKey(
          "connections",
          new TableForeignKey({
                  name: "FKConnectionsUser",
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  columnNames: ["user_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
          })
      )

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("connections", "FKConnectionsUser");
    await queryRunner.dropTable("connections");
  }
}
