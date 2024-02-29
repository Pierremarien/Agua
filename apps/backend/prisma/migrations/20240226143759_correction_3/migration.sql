/*
  Warnings:

  - You are about to drop the column `fileTypeId` on the `File` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_fileTypeId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "fileTypeId";

-- CreateTable
CREATE TABLE "FileTypeOnFile" (
    "fileId" INTEGER NOT NULL,
    "fileTypeId" INTEGER NOT NULL,

    CONSTRAINT "FileTypeOnFile_pkey" PRIMARY KEY ("fileId","fileTypeId")
);

-- AddForeignKey
ALTER TABLE "FileTypeOnFile" ADD CONSTRAINT "FileTypeOnFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileTypeOnFile" ADD CONSTRAINT "FileTypeOnFile_fileTypeId_fkey" FOREIGN KEY ("fileTypeId") REFERENCES "File_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
