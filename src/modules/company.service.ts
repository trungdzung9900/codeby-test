import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { RecipesArgs } from 'src/modules/dto/recipes.arg';

@Injectable()
export class CompanyService {
  constructor(private readonly httpService: HttpService) {}
  async getCompanyTree(recipesArgs: RecipesArgs) {
    const { skip, take } = recipesArgs;
    const companies = await this.httpService.axiosRef.get(
      'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies',
    );
    const travels = await this.httpService.axiosRef.get(
      'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels',
    );

    // map childrenValue
    const companyArray = [];
    for (let i = 0; i < companies.data.length; i++) {
      let sumCost = 0;
      for (let k = 0; k < travels.data.length; k++) {
        if (companies.data[i].id === travels.data[k].companyId) {
          sumCost += +travels.data[k].price;
        }
      }
      companyArray.push(
        Object.assign({
          ...companies.data[i],
          children: [],
          cost: sumCost,
        }),
      );
    }
    // map parentValue
    for (let i = 0; i < companyArray.length; i++) {
      for (let k = 1; k < companyArray.length; k++) {
        if (companyArray[i].id === companyArray[k].parentId) {
          companyArray[i].cost += companyArray[k].cost;
          companyArray[i].children.push(companyArray[k]);
        }
      }
    }
    return companyArray.slice(skip, take);
  }
}
