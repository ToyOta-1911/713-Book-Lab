-- CreateTable
CREATE TABLE "booklist" (
    "id" SERIAL NOT NULL,
    "book_title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "author_affiliation" TEXT NOT NULL,
    "member_code" TEXT NOT NULL,
    "member_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "borrow_date" TIMESTAMP(3) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "returned_date" TIMESTAMP(3) NOT NULL,
    "organizerId" INTEGER,

    CONSTRAINT "booklist_pkey" PRIMARY KEY ("id")
);

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
