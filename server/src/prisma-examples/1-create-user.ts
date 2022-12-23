import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hana = await prisma.user.create({
    data: {
      email: 'hana@hana.io',
      firstName: 'Hana',
      lastName: 'Gold',
    },
  });

  // tslint:disable-next-line:no-console
  console.log(hana);
}

main()
  // tslint:disable-next-line:no-console
  .catch(console.error)
  .finally(() => prisma.$disconnect());
