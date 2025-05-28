-- CreateEnum
CREATE TYPE "EstadoAuto" AS ENUM ('Disponible', 'Reservado', 'Vendido');

-- CreateTable
CREATE TABLE "Auto" (
    "id" TEXT NOT NULL,
    "patente" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "fechaBaja" TIMESTAMP(3),
    "estado" "EstadoAuto" NOT NULL DEFAULT 'Disponible',

    CONSTRAINT "Auto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foto" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "autoId" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auto_patente_key" ON "Auto"("patente");

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_autoId_fkey" FOREIGN KEY ("autoId") REFERENCES "Auto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
