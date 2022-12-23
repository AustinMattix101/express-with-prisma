import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.update({
    where: {
      email: 'hana@hana.io',
    },
    data: {
      lastName: 'Peters',
    },
  });
  // tslint:disable-next-line:no-console
  console.log(user);
}

main()
  // tslint:disable-next-line:no-console
  .catch(console.error)
  .finally(() => prisma.$disconnect());
