import prisma from '../lib/prisma.js';

async function main() {
  await prisma.user.updateMany({
    data: {
      credits: 100,
    },
  });
  console.log('All users credits updated to 100');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
