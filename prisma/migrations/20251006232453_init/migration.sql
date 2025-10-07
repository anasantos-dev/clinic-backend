/*
  Warnings:

  - You are about to drop the `colaboradores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."colaboradores";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "matricula" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'colaborador',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_matricula_key" ON "user"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
