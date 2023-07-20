import prisma from "../prisma"

export const getInterferences = async (enterpriseId: string) => {
  if (enterpriseId === "all") {
    const interferences = await prisma.interference.findMany()

    return interferences
  }
  const interferences = await prisma.interference.findMany({
    where: {
      cod_empreendimento: enterpriseId,
    },
  })
  return interferences
}

export const createInterference = async (interferenceData: any) => {
  await prisma.interference.create({
    data: interferenceData,
  })
}
