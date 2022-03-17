import companiesRepository from '../repositories/companiesRepository';

export const listCompanies = async () => {
    return await companiesRepository.getCompanies()
}

export const registerCompany = async (newCompany) => {
    return await companiesRepository.postCompanies(newCompany)
}
