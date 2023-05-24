import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'company ' })
export class Company {
  @Field((type) => String)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  parentId?: string;

  @Field({ nullable: true })
  createdAt?: string;

  @Field({ nullable: true })
  cost?: number;

  @Field(type => [Company])
  children: Company[];
}

// [
//     {
//       "id": "uuid-1",
//       "createdAt": "2021-02-26T00:55:36.632Z",
//       "name": "Webprovise Corp",
//       "parentId": "0",
//       "cost": 66888,
//       "children": [
//         {
//           "id": "uuid-2",
//           "createdAt": "2021-02-25T10:35:32.978Z",
//           "name": "Stamm LLC",
//           "parentId": "uuid-1",
//           "cost": 5199,
//           "children": []
//         }
//       ]
//     }
//   ]
