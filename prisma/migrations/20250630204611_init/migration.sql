-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "idPost" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("idPost")
);

-- CreateTable
CREATE TABLE "Comment" (
    "idComment" SERIAL NOT NULL,
    "idPost" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "contents" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("idComment")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_email_key" ON "Comment"("email");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "Post"("idPost") ON DELETE RESTRICT ON UPDATE CASCADE;
