import {ObjectFactory} from 'typescript-ioc';

const baseUrl: string = 'inventory-backend-project-team2.apps.cooper.coc-ibm.com' || 'localhost:9080';

export const stockItemConfigFactory: ObjectFactory = () => ({
  baseUrl,
});
