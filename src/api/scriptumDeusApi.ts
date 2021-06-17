import _ from "lodash";
import { Configuration } from "./scriptumDeus";
import { BaseAPI } from "./scriptumDeus/base";

export * from "./scriptumDeus";

export interface IScriptumDeusApi {
  create<T extends BaseAPI>(
    type: { new (configuration: Configuration): T },
    configuration?: Configuration
  ): T;
}

class ScriptumApi implements IScriptumDeusApi {
  create<T extends BaseAPI>(
    type: { new (configuration: Configuration): T },
    configuration?: Configuration
  ): T {
    const baseConfig: Configuration = new Configuration();

    const config: Configuration = _.merge(baseConfig, configuration);

    return new type(config);
  }
}

export const scriptumDeusApi: IScriptumDeusApi = new ScriptumApi();
export default scriptumDeusApi;
