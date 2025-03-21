-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Templet" (
    "id" SERIAL NOT NULL,
    "templetName" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Templet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "templetId" INTEGER NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Summery" (
    "id" SERIAL NOT NULL,
    "summery" TEXT NOT NULL,
    "templetId" INTEGER NOT NULL,

    CONSTRAINT "Summery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "allSkills" TEXT[],
    "templetId" INTEGER NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "templetId" INTEGER NOT NULL,
    "degree" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "graduationDate" TEXT NOT NULL,
    "certification" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "templetId" INTEGER NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "experienceDescription" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Templet_userRole_key" ON "Templet"("userRole");

-- AddForeignKey
ALTER TABLE "Templet" ADD CONSTRAINT "Templet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_templetId_fkey" FOREIGN KEY ("templetId") REFERENCES "Templet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Summery" ADD CONSTRAINT "Summery_templetId_fkey" FOREIGN KEY ("templetId") REFERENCES "Templet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_templetId_fkey" FOREIGN KEY ("templetId") REFERENCES "Templet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_templetId_fkey" FOREIGN KEY ("templetId") REFERENCES "Templet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_templetId_fkey" FOREIGN KEY ("templetId") REFERENCES "Templet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
