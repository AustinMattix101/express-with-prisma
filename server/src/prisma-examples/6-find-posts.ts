import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // tslint:disable-next-line:no-console
  console.dir(posts, { depth: Infinity });
}

main()
  // tslint:disable-next-line:no-console
  .catch(console.error)
  .finally(() => prisma.$disconnect());
