import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      email: 'hana@hana.io'
    }
  });
  // tslint:disable-next-line:no-console
  console.log(user);
}

main()
  // tslint:disable-next-line:no-console
  .catch(console.error)
  .finally(() => prisma.$disconnect());
