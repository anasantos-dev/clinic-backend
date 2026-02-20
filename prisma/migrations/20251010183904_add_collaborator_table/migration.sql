-- CreateTable
CREATE TABLE "collaborator" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "admissionDate" TEXT NOT NULL,
    "corporateEmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accessLevel" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_cpf_key" ON "collaborator"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_registration_key" ON "collaborator"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_corporateEmail_key" ON "collaborator"("corporateEmail");
