import "dotenv/config"
import { TGetEnvReturn } from "./types";
import StringUtil from "@common/utils/string"

export function getEnvRaw(env: string, fallback?: any): TGetEnvReturn {
  const envVar = process.env[env] || fallback;

  if (envVar === undefined) {
    throw new ReferenceError(`Environment variable "${env}" is not defined.`);
  }

  return envVar;
}

export function getEnvBoolean(env: string, fallback?: boolean): boolean {
  const envVar = StringUtil.toBoolean(getEnvRaw(env, fallback));

  if (typeof envVar !== 'boolean') {
    throw new TypeError(`Environment variable "${env}" is not of type boolean.`);
  }

  return envVar;
}

export function getEnvFloat(env: string, fallback?: number): number {
  const envVar = StringUtil.toFloat(getEnvRaw(env, fallback));

  if (typeof envVar !== 'number') {
    throw new TypeError(`Environment variable "${env}" is not of type float.`);
  }

  return envVar;
}

export function getEnvInteger(env: string, fallback?: number): number {
  try {
    const envVar = getEnvFloat(env, fallback)

    if (isNaN(envVar)) {
      throw new Error()
    }

    return envVar
  } catch {
    throw new TypeError(`Environment variable "${env}" is not of type integer.`);
  }
}

export function getEnvString(env: string, fallback?: string): string {
  const envVar = StringUtil.toString(getEnvRaw(env, fallback));

  if (typeof envVar !== 'string') {
    throw new TypeError(`Environment variable "${env}" is not of type string.`);
  }

  return envVar;
}

export function getEnv<T extends TGetEnvReturn = string>(
  env: string,
  fallback?: T
): T {

  if (fallback !== undefined) {
    const fallbackType = typeof fallback;

    switch (fallbackType) {
      case 'boolean':
        return getEnvBoolean(env, fallback as boolean) as T;
      case 'number':
        return getEnvInteger(env, fallback as number) as T;
      case "string":
        break;

      default:
        throw new Error(
          `Conversion type "${fallbackType}" is not supported for conversion of environment variables.`
        );
    }
  }

  return getEnvString(env, fallback as string) as T;
}