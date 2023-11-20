import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export default function override(config: any, env: any) {
  if (!config.resolve) {
    config.resolve = { plugins: [] };
  }
  if (config.resolve.plugins) {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
  } else {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
  }
  return config;
}
