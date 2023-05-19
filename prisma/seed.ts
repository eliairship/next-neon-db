import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const post1 = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'First Post',
      description: 'My first post description',
    },
  });

  const post2 = await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Second Post',
      description: 'My second post description',
    },
  });

  console.log({ post1, post2 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
