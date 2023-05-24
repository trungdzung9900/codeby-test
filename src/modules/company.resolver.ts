import { Resolver, Query, Args } from '@nestjs/graphql';
import { Company } from './company.model';
import { CompanyService } from './company.service';
import { RecipesArgs } from 'src/modules/dto/recipes.arg';

@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [Company])
  async company(@Args() recipesArgs: RecipesArgs): Promise<Company[]> {
    return this.companyService.getCompanyTree(recipesArgs);
    // return this.authorsService.findOneById(id);
  }
}
