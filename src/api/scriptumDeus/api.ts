// tslint:disable
/**
 * Scriptum Deus
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosInstance, AxiosPromise } from "axios";
import * as globalImportUrl from "url";
// Some imports not used depending on template conditions
// @ts-ignore
import { BaseAPI, BASE_PATH, RequestArgs } from "./base";
import { Configuration } from "./configuration";

/**
 *
 * @export
 * @interface DailyResponse
 */
export interface DailyResponse {
  /**
   *
   * @type {string}
   * @memberof DailyResponse
   */
  forToday: string;
  /**
   *
   * @type {DailyResponseDisplay}
   * @memberof DailyResponse
   */
  display?: DailyResponseDisplay;
  /**
   *
   * @type {string}
   * @memberof DailyResponse
   */
  text: string;
}
/**
 *
 * @export
 * @interface DailyResponseDisplay
 */
export interface DailyResponseDisplay {
  /**
   *
   * @type {string}
   * @memberof DailyResponseDisplay
   */
  _static: string;
  /**
   *
   * @type {string}
   * @memberof DailyResponseDisplay
   */
  date: string;
}
/**
 *
 * @export
 * @interface HealthCheckResponse
 */
export interface HealthCheckResponse {
  /**
   *
   * @type {string}
   * @memberof HealthCheckResponse
   */
  status: string;
}

/**
 * BibleApi - axios parameter creator
 * @export
 */
export const BibleApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * get daily passage
     * @summary get daily passage
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDaily: async (
      date?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/daily`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication jwt required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("Authorization")
            : await configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (date !== undefined) {
        localVarQueryParameter["date"] =
          (date as any) instanceof Date
            ? (date as any).toISOString().substr(0, 10)
            : date;
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      // @ts-ignore
      delete localVarUrlObj.search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * BibleApi - functional programming interface
 * @export
 */
export const BibleApiFp = function (configuration?: Configuration) {
  return {
    /**
     * get daily passage
     * @summary get daily passage
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDaily(
      date?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<DailyResponse>
    > {
      const localVarAxiosArgs = await BibleApiAxiosParamCreator(
        configuration
      ).getDaily(date, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * BibleApi - factory interface
 * @export
 */
export const BibleApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * get daily passage
     * @summary get daily passage
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDaily(date?: string, options?: any): AxiosPromise<DailyResponse> {
      return BibleApiFp(configuration)
        .getDaily(date, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * BibleApi - object-oriented interface
 * @export
 * @class BibleApi
 * @extends {BaseAPI}
 */
export class BibleApi extends BaseAPI {
  /**
   * get daily passage
   * @summary get daily passage
   * @param {string} [date]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BibleApi
   */
  public getDaily(date?: string, options?: any) {
    return BibleApiFp(this.configuration)
      .getDaily(date, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * HealthCheckApi - axios parameter creator
 * @export
 */
export const HealthCheckApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * api health check
     * @summary api health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHealthcheck: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/health-check`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication jwt required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("Authorization")
            : await configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      // @ts-ignore
      delete localVarUrlObj.search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * HealthCheckApi - functional programming interface
 * @export
 */
export const HealthCheckApiFp = function (configuration?: Configuration) {
  return {
    /**
     * api health check
     * @summary api health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getHealthcheck(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<HealthCheckResponse>
    > {
      const localVarAxiosArgs = await HealthCheckApiAxiosParamCreator(
        configuration
      ).getHealthcheck(options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * HealthCheckApi - factory interface
 * @export
 */
export const HealthCheckApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * api health check
     * @summary api health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHealthcheck(options?: any): AxiosPromise<HealthCheckResponse> {
      return HealthCheckApiFp(configuration)
        .getHealthcheck(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * HealthCheckApi - object-oriented interface
 * @export
 * @class HealthCheckApi
 * @extends {BaseAPI}
 */
export class HealthCheckApi extends BaseAPI {
  /**
   * api health check
   * @summary api health check
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HealthCheckApi
   */
  public getHealthcheck(options?: any) {
    return HealthCheckApiFp(this.configuration)
      .getHealthcheck(options)
      .then((request) => request(this.axios, this.basePath));
  }
}