import { Template } from "aws-cdk-lib/assertions";
import * as core from "aws-cdk-lib";
import * as FederatedAppsyncApi from "../lib/federated-appsync-api-stack";

test("Empty Stack", () => {
  const app = new core.App();
  // WHEN
  const stack = new FederatedAppsyncApi.FederatedAppsyncApiStack(
    app,
    "MyTestStack"
  );
  // THEN
  // 2 apollo based services behind API gateway and the federated gateway
  Template.fromStack(stack).hasResource("AWS:ApiGateway::RestApi", 3);
  // 1 AppSync based service
  Template.fromStack(stack).hasResource("AWS:AppSync::GraphQLApi", 1);
});
