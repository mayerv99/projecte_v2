import prisma from "../prisma";

export const getUsers = async (enterpriseId: string) => {
  const users = await prisma.user.findMany({
    where: {
      cod_empreendimento: enterpriseId,
    },
  });
  return users;
};

export const createUser = async (userData: any) => {
  await prisma.user.create({
    data: userData,
  });
};
