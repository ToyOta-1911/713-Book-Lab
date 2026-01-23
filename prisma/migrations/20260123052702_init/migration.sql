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

    CONSTRAINT "booklist_pkey" PRIMARY KEY ("id")
);
