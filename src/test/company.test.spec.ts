import gql from 'graphql-tag';
import { IntegrateTestManage } from './setup.test';
import request from 'supertest-graphql';
import { Company } from 'src/modules/company.model';
describe('getCompany', () => {
  const integrateTestManage = new IntegrateTestManage();
  beforeAll(async () => {
    await integrateTestManage.beforeAll();
  });
  afterAll(async () => {
    await integrateTestManage.afterAll();
  });
  let companies: [Company];
  describe('when a get company query is executed', () => {
    beforeAll(async () => {
      const response = await request<{ company: [Company] }>(
        integrateTestManage.httpServer,
      )
        .query(
          gql`
            query Company($recipesArgs: RecipesArgs!) {
              company(skip: $skip, take: $take) {
                id
                cost
                createdAt
                name
                parentId
                children {
                  cost
                  createdAt
                  parentId
                  name
                }
              }
            }
          `,
        )
        .variables({
          skip: 0,
          take: 10,
        })
        .expectNoErrors();
      companies = response.data.company;
    });
  });
  describe('test response is correct', () => {
    expect(companies).toHaveLength(10);
  });
});
