import employeeRepository from '../repositories/employeesRepository';

export const listEmployees = async () => {
    return await employeeRepository.getEmployees()
}