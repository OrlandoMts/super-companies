import companiesRepository from '../repositories/companiesRepository';

export const listCompanies = async () => {
    return await companiesRepository.getCompanies()
}
