import { execSync } from "child_process";
import path from "path";

const runnerApp = "openapi-generator";
const rootPath = ".";

type ApiUrls = {
  scriptumDeus: string;
};

const getApiEnvs = (stage: string) => {
  let urls: ApiUrls = {
    scriptumDeus:
      "https://scriptum-deus-api-v1.eu-gb.cf.appdomain.cloud/swagger.json",
  };

  if (stage === "local") {
    urls.scriptumDeus = "http://localhost:5999/swagger.json";
  }

  return urls;
};

export const generateApi = (url: string, apiName: string) => {
  const apiPath = path.join(rootPath, "src/api", apiName);
  execSync(`${runnerApp} generate -i ${url} -g typescript-axios -o ${apiPath}`);
  execSync(`rm ${path.join(apiPath, "git_push.sh")}`);
  execSync(`sed -i '' '/name:/d' ${path.join(apiPath, "base.ts")}`);
};

export const generate = () => {
  const stage = process.env.STAGE;
  if (!stage) throw new Error("bla bla bla stage not defined bla bla bla");
  const urls = getApiEnvs(stage);
  for (const [name, url] of Object.entries(urls)) {
    generateApi(url, name);
  }
};
