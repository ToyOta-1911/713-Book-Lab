-- AlterTable
ALTER TABLE "booklist" ADD COLUMN     "organizerId" INTEGER;

-- CreateTable
CREATE TABLE "organizer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "organizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_booklistToparticipant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_booklistToparticipant_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_booklistToparticipant_B_index" ON "_booklistToparticipant"("B");

-- AddForeignKey
ALTER TABLE "booklist" ADD CONSTRAINT "booklist_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "organizer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_booklistToparticipant" ADD CONSTRAINT "_booklistToparticipant_A_fkey" FOREIGN KEY ("A") REFERENCES "booklist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_booklistToparticipant" ADD CONSTRAINT "_booklistToparticipant_B_fkey" FOREIGN KEY ("B") REFERENCES "participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
