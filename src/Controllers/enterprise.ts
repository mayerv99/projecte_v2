import prisma from "../prisma";

export const getAllEnterprises = async () => {
  const enterprises = await prisma.enterprise.findMany();
  return enterprises;
};

export const createNewEnterprise = async (enterpriseData: any) => {
  await prisma.enterprise.create({
    data: enterpriseData,
  });
};
