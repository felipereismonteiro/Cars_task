import { prismaDb } from "../config/database.js";

async function getCars() {
  const result = await prismaDb.cars.findMany();
  return result;
}

async function getCar(id: number) {
  const result = await prismaDb.cars.findFirst({
    where: {id: id}   
  })
  return result;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prismaDb.cars.findUnique({
    where:{
      licensePlate
    }
  })
  
  return data;
// findUNique retorna somente um objeto, enquanto findMany retorna um array;
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {
    return await prismaDb.cars.create({
      data:{
        model,
        licensePlate,
        year,
        color
      }
    })
}

async function deleteCar(id: number) {
  return await prismaDb.cars.delete({
    where: {
      id: id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;