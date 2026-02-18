
/**
 * Client
**/


declare global {
  namespace PrismaJson {
    // This namespace will always be empty. Definitions should be done by
    // you manually, and merged automatically by typescript. Make sure that
    // your declaration merging file is included in your tsconfig.json
    //
    // Learn more: https://github.com/arthurfiorette/prisma-json-types-generator/issues/143
    // Declaration Merging: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
  }
}

/** A filter to be used against nullable List types. */
export type NullableListFilter<T> = {
  equals?: T | T[] | null;
  has?: T | null;
  hasEvery?: T[];
  hasSome?: T[];
  isEmpty?: boolean;
};

/** A type to determine how to update a json field */
export type UpdateInput<T> = T extends object ? { [P in keyof T]?: UpdateInput<T[P]> } : T;

/** A type to determine how to update a json[] field */
export type UpdateManyInput<T> = T | T[] | { set?: T[]; push?: T | T[] };

/** A type to determine how to create a json[] input */
export type CreateManyInput<T> = T | T[] | { set?: T[] };

/**
 * A typed version of NestedStringFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedNestedStringFilter<S extends string> =
  //@ts-ignore - When Prisma.StringFilter is not present, this type is not used
  Prisma.StringFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringFilter<S> | S;
  };

/**
 * A typed version of StringFilter, allowing narrowing of string types to discriminated
 * unions.
 */
export type TypedStringFilter<S extends string> =
  //@ts-ignore - When Prisma.StringFilter is not present, this type is not used
  Prisma.StringFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringFilter<S> | S;
  };

/**
 * A typed version of NestedStringNullableFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedNestedStringNullableFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableFilter is not present, this type is not used
  Prisma.StringNullableFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableFilter<S> | S | null;
  };

/**
 * A typed version of StringNullableFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringNullableFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableFilter is not present, this type is not used
  Prisma.StringNullableFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableFilter<S> | S | null;
  };

/**
 * A typed version of NestedStringWithAggregatesFilter, allowing narrowing of string types
 * to discriminated unions.
 */
export type TypedNestedStringWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.NestedStringWithAggregatesFilter is not present, this type is not used
  Prisma.NestedStringWithAggregatesFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringWithAggregatesFilter<S> | S;
  };

/**
 * A typed version of StringWithAggregatesFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.StringWithAggregatesFilter is not present, this type is not used
  Prisma.StringWithAggregatesFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringWithAggregatesFilter<S> | S;
  };

/**
 * A typed version of NestedStringNullableWithAggregatesFilter, allowing narrowing of
 * string types to discriminated unions.
 */
export type TypedNestedStringNullableWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.NestedStringNullableWithAggregatesFilter is not present, this type is not used
  Prisma.NestedStringNullableWithAggregatesFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableWithAggregatesFilter<S> | S | null;
  };

/**
 * A typed version of StringNullableWithAggregatesFilter, allowing narrowing of string
 * types to discriminated unions.
 */
export type TypedStringNullableWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableWithAggregatesFilter is not present, this type is not used
  Prisma.StringNullableWithAggregatesFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableWithAggregatesFilter<S> | S | null;
  };

/**
 * A typed version of StringFieldUpdateOperationsInput, allowing narrowing of string types
 * to discriminated unions.
 */
export type TypedStringFieldUpdateOperationsInput<S extends string> =
  //@ts-ignore - When Prisma.StringFieldUpdateOperationsInput is not present, this type is not used
  Prisma.StringFieldUpdateOperationsInput & {
    set?: S;
  };

/**
 * A typed version of NullableStringFieldUpdateOperationsInput, allowing narrowing of
 * string types to discriminated unions.
 */
export type TypedNullableStringFieldUpdateOperationsInput<S extends string> =
  //@ts-ignore - When Prisma.NullableStringFieldUpdateOperationsInput is not present, this type is not used
  Prisma.NullableStringFieldUpdateOperationsInput & {
    set?: S | null;
  };

/**
 * A typed version of StringNullableListFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringNullableListFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableListFilter is not present, this type is not used
  Prisma.StringNullableListFilter & {
    equals?: S[] | null;
    has?: S | null;
    hasEvery?: S[];
    hasSome?: S[];
  };

/**
 * A typed version of the input type to update a string[] field, allowing narrowing of
 * string types to discriminated unions.
 */
export type UpdateStringArrayInput<S extends string> = {
  set?: S[];
  push?: S | S[];
};

/**
 * A typed version of the input type to create a string[] field, allowing narrowing of
 * string types to discriminated unions.
 */
export type CreateStringArrayInput<S extends string> = {
  set?: S[];
};
import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model TerminalSession
 * 
 */
export type TerminalSession = $Result.DefaultSelection<Prisma.$TerminalSessionPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskExecution
 * 
 */
export type TaskExecution = $Result.DefaultSelection<Prisma.$TaskExecutionPayload>
/**
 * Model ApiClient
 * 
 */
export type ApiClient = $Result.DefaultSelection<Prisma.$ApiClientPayload>
/**
 * Model ApiSecret
 * 
 */
export type ApiSecret = $Result.DefaultSelection<Prisma.$ApiSecretPayload>
/**
 * Model ApiCallLog
 * 
 */
export type ApiCallLog = $Result.DefaultSelection<Prisma.$ApiCallLogPayload>
/**
 * Model SessionPresence
 * 
 */
export type SessionPresence = $Result.DefaultSelection<Prisma.$SessionPresencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TerminalSessionStatus: {
  pending: 'pending',
  starting: 'starting',
  running: 'running',
  stopped: 'stopped'
};

export type TerminalSessionStatus = (typeof TerminalSessionStatus)[keyof typeof TerminalSessionStatus]


export const SessionRelationType: {
  fork: 'fork',
  stack: 'stack'
};

export type SessionRelationType = (typeof SessionRelationType)[keyof typeof SessionRelationType]


export const AgentProvider: {
  opencode: 'opencode',
  claude: 'claude',
  codex: 'codex',
  cursor: 'cursor'
};

export type AgentProvider = (typeof AgentProvider)[keyof typeof AgentProvider]


export const TaskStatus: {
  todo: 'todo',
  doing: 'doing',
  done: 'done',
  canceled: 'canceled'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskSource: {
  web: 'web',
  api: 'api'
};

export type TaskSource = (typeof TaskSource)[keyof typeof TaskSource]


export const TaskExecutionStatus: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed',
  needs_input: 'needs_input'
};

export type TaskExecutionStatus = (typeof TaskExecutionStatus)[keyof typeof TaskExecutionStatus]


export const PresenceStatus: {
  active: 'active',
  viewing: 'viewing',
  inactive: 'inactive'
};

export type PresenceStatus = (typeof PresenceStatus)[keyof typeof PresenceStatus]

}

export type TerminalSessionStatus = $Enums.TerminalSessionStatus

export const TerminalSessionStatus: typeof $Enums.TerminalSessionStatus

export type SessionRelationType = $Enums.SessionRelationType

export const SessionRelationType: typeof $Enums.SessionRelationType

export type AgentProvider = $Enums.AgentProvider

export const AgentProvider: typeof $Enums.AgentProvider

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskSource = $Enums.TaskSource

export const TaskSource: typeof $Enums.TaskSource

export type TaskExecutionStatus = $Enums.TaskExecutionStatus

export const TaskExecutionStatus: typeof $Enums.TaskExecutionStatus

export type PresenceStatus = $Enums.PresenceStatus

export const PresenceStatus: typeof $Enums.PresenceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.terminalSession`: Exposes CRUD operations for the **TerminalSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TerminalSessions
    * const terminalSessions = await prisma.terminalSession.findMany()
    * ```
    */
  get terminalSession(): Prisma.TerminalSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskExecution`: Exposes CRUD operations for the **TaskExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskExecutions
    * const taskExecutions = await prisma.taskExecution.findMany()
    * ```
    */
  get taskExecution(): Prisma.TaskExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiClient`: Exposes CRUD operations for the **ApiClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiClients
    * const apiClients = await prisma.apiClient.findMany()
    * ```
    */
  get apiClient(): Prisma.ApiClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiSecret`: Exposes CRUD operations for the **ApiSecret** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiSecrets
    * const apiSecrets = await prisma.apiSecret.findMany()
    * ```
    */
  get apiSecret(): Prisma.ApiSecretDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiCallLog`: Exposes CRUD operations for the **ApiCallLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiCallLogs
    * const apiCallLogs = await prisma.apiCallLog.findMany()
    * ```
    */
  get apiCallLog(): Prisma.ApiCallLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionPresence`: Exposes CRUD operations for the **SessionPresence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionPresences
    * const sessionPresences = await prisma.sessionPresence.findMany()
    * ```
    */
  get sessionPresence(): Prisma.SessionPresenceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    TerminalSession: 'TerminalSession',
    Project: 'Project',
    UserPreferences: 'UserPreferences',
    Task: 'Task',
    TaskExecution: 'TaskExecution',
    ApiClient: 'ApiClient',
    ApiSecret: 'ApiSecret',
    ApiCallLog: 'ApiCallLog',
    SessionPresence: 'SessionPresence'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "terminalSession" | "project" | "userPreferences" | "task" | "taskExecution" | "apiClient" | "apiSecret" | "apiCallLog" | "sessionPresence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      TerminalSession: {
        payload: Prisma.$TerminalSessionPayload<ExtArgs>
        fields: Prisma.TerminalSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerminalSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerminalSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>
          }
          findFirst: {
            args: Prisma.TerminalSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerminalSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>
          }
          findMany: {
            args: Prisma.TerminalSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>[]
          }
          create: {
            args: Prisma.TerminalSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>
          }
          createMany: {
            args: Prisma.TerminalSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TerminalSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>[]
          }
          delete: {
            args: Prisma.TerminalSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>
          }
          update: {
            args: Prisma.TerminalSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>
          }
          deleteMany: {
            args: Prisma.TerminalSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerminalSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TerminalSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>[]
          }
          upsert: {
            args: Prisma.TerminalSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalSessionPayload>
          }
          aggregate: {
            args: Prisma.TerminalSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerminalSession>
          }
          groupBy: {
            args: Prisma.TerminalSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerminalSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TerminalSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TerminalSessionCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskExecution: {
        payload: Prisma.$TaskExecutionPayload<ExtArgs>
        fields: Prisma.TaskExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          findFirst: {
            args: Prisma.TaskExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          findMany: {
            args: Prisma.TaskExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>[]
          }
          create: {
            args: Prisma.TaskExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          createMany: {
            args: Prisma.TaskExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>[]
          }
          delete: {
            args: Prisma.TaskExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          update: {
            args: Prisma.TaskExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          deleteMany: {
            args: Prisma.TaskExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>[]
          }
          upsert: {
            args: Prisma.TaskExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskExecutionPayload>
          }
          aggregate: {
            args: Prisma.TaskExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskExecution>
          }
          groupBy: {
            args: Prisma.TaskExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskExecutionCountAggregateOutputType> | number
          }
        }
      }
      ApiClient: {
        payload: Prisma.$ApiClientPayload<ExtArgs>
        fields: Prisma.ApiClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          findFirst: {
            args: Prisma.ApiClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          findMany: {
            args: Prisma.ApiClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>[]
          }
          create: {
            args: Prisma.ApiClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          createMany: {
            args: Prisma.ApiClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>[]
          }
          delete: {
            args: Prisma.ApiClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          update: {
            args: Prisma.ApiClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          deleteMany: {
            args: Prisma.ApiClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>[]
          }
          upsert: {
            args: Prisma.ApiClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          aggregate: {
            args: Prisma.ApiClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiClient>
          }
          groupBy: {
            args: Prisma.ApiClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiClientCountArgs<ExtArgs>
            result: $Utils.Optional<ApiClientCountAggregateOutputType> | number
          }
        }
      }
      ApiSecret: {
        payload: Prisma.$ApiSecretPayload<ExtArgs>
        fields: Prisma.ApiSecretFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiSecretFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiSecretFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>
          }
          findFirst: {
            args: Prisma.ApiSecretFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiSecretFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>
          }
          findMany: {
            args: Prisma.ApiSecretFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>[]
          }
          create: {
            args: Prisma.ApiSecretCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>
          }
          createMany: {
            args: Prisma.ApiSecretCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiSecretCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>[]
          }
          delete: {
            args: Prisma.ApiSecretDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>
          }
          update: {
            args: Prisma.ApiSecretUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>
          }
          deleteMany: {
            args: Prisma.ApiSecretDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiSecretUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiSecretUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>[]
          }
          upsert: {
            args: Prisma.ApiSecretUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiSecretPayload>
          }
          aggregate: {
            args: Prisma.ApiSecretAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiSecret>
          }
          groupBy: {
            args: Prisma.ApiSecretGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiSecretGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiSecretCountArgs<ExtArgs>
            result: $Utils.Optional<ApiSecretCountAggregateOutputType> | number
          }
        }
      }
      ApiCallLog: {
        payload: Prisma.$ApiCallLogPayload<ExtArgs>
        fields: Prisma.ApiCallLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiCallLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiCallLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>
          }
          findFirst: {
            args: Prisma.ApiCallLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiCallLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>
          }
          findMany: {
            args: Prisma.ApiCallLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>[]
          }
          create: {
            args: Prisma.ApiCallLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>
          }
          createMany: {
            args: Prisma.ApiCallLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCallLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>[]
          }
          delete: {
            args: Prisma.ApiCallLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>
          }
          update: {
            args: Prisma.ApiCallLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiCallLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiCallLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiCallLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiCallLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallLogPayload>
          }
          aggregate: {
            args: Prisma.ApiCallLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiCallLog>
          }
          groupBy: {
            args: Prisma.ApiCallLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiCallLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCallLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCallLogCountAggregateOutputType> | number
          }
        }
      }
      SessionPresence: {
        payload: Prisma.$SessionPresencePayload<ExtArgs>
        fields: Prisma.SessionPresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionPresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionPresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>
          }
          findFirst: {
            args: Prisma.SessionPresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionPresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>
          }
          findMany: {
            args: Prisma.SessionPresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>[]
          }
          create: {
            args: Prisma.SessionPresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>
          }
          createMany: {
            args: Prisma.SessionPresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionPresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>[]
          }
          delete: {
            args: Prisma.SessionPresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>
          }
          update: {
            args: Prisma.SessionPresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>
          }
          deleteMany: {
            args: Prisma.SessionPresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionPresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionPresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>[]
          }
          upsert: {
            args: Prisma.SessionPresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPresencePayload>
          }
          aggregate: {
            args: Prisma.SessionPresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionPresence>
          }
          groupBy: {
            args: Prisma.SessionPresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionPresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionPresenceCountArgs<ExtArgs>
            result: $Utils.Optional<SessionPresenceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    terminalSession?: TerminalSessionOmit
    project?: ProjectOmit
    userPreferences?: UserPreferencesOmit
    task?: TaskOmit
    taskExecution?: TaskExecutionOmit
    apiClient?: ApiClientOmit
    apiSecret?: ApiSecretOmit
    apiCallLog?: ApiCallLogOmit
    sessionPresence?: SessionPresenceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    terminalSessions: number
    tasks: number
    apiClients: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    terminalSessions?: boolean | UserCountOutputTypeCountTerminalSessionsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    apiClients?: boolean | UserCountOutputTypeCountApiClientsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTerminalSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerminalSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type TerminalSessionCountOutputType
   */

  export type TerminalSessionCountOutputType = {
    children: number
    presences: number
  }

  export type TerminalSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TerminalSessionCountOutputTypeCountChildrenArgs
    presences?: boolean | TerminalSessionCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * TerminalSessionCountOutputType without action
   */
  export type TerminalSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSessionCountOutputType
     */
    select?: TerminalSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TerminalSessionCountOutputType without action
   */
  export type TerminalSessionCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerminalSessionWhereInput
  }

  /**
   * TerminalSessionCountOutputType without action
   */
  export type TerminalSessionCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionPresenceWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    sessions: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | ProjectCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerminalSessionWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    executions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | TaskCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskExecutionWhereInput
  }


  /**
   * Count Type ApiClientCountOutputType
   */

  export type ApiClientCountOutputType = {
    secrets: number
    callLogs: number
  }

  export type ApiClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secrets?: boolean | ApiClientCountOutputTypeCountSecretsArgs
    callLogs?: boolean | ApiClientCountOutputTypeCountCallLogsArgs
  }

  // Custom InputTypes
  /**
   * ApiClientCountOutputType without action
   */
  export type ApiClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClientCountOutputType
     */
    select?: ApiClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiClientCountOutputType without action
   */
  export type ApiClientCountOutputTypeCountSecretsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiSecretWhereInput
  }

  /**
   * ApiClientCountOutputType without action
   */
  export type ApiClientCountOutputTypeCountCallLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    bio: string | null
    avatarImageUrl: string | null
    coverImageUrl: string | null
    avatarImageUTKey: string | null
    coverImageUTKey: string | null
    timezone: string | null
    role: string | null
    banReason: string | null
    banExpires: Date | null
    banned: boolean | null
    username: string | null
    displayUsername: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    bio: string | null
    avatarImageUrl: string | null
    coverImageUrl: string | null
    avatarImageUTKey: string | null
    coverImageUTKey: string | null
    timezone: string | null
    role: string | null
    banReason: string | null
    banExpires: Date | null
    banned: boolean | null
    username: string | null
    displayUsername: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    emailVerified: number
    image: number
    bio: number
    avatarImageUrl: number
    coverImageUrl: number
    avatarImageUTKey: number
    coverImageUTKey: number
    timezone: number
    role: number
    banReason: number
    banExpires: number
    banned: number
    username: number
    displayUsername: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    bio?: true
    avatarImageUrl?: true
    coverImageUrl?: true
    avatarImageUTKey?: true
    coverImageUTKey?: true
    timezone?: true
    role?: true
    banReason?: true
    banExpires?: true
    banned?: true
    username?: true
    displayUsername?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    bio?: true
    avatarImageUrl?: true
    coverImageUrl?: true
    avatarImageUTKey?: true
    coverImageUTKey?: true
    timezone?: true
    role?: true
    banReason?: true
    banExpires?: true
    banned?: true
    username?: true
    displayUsername?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    bio?: true
    avatarImageUrl?: true
    coverImageUrl?: true
    avatarImageUTKey?: true
    coverImageUTKey?: true
    timezone?: true
    role?: true
    banReason?: true
    banExpires?: true
    banned?: true
    username?: true
    displayUsername?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date | null
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    bio: string | null
    avatarImageUrl: string | null
    coverImageUrl: string | null
    avatarImageUTKey: string | null
    coverImageUTKey: string | null
    timezone: string | null
    role: string
    banReason: string | null
    banExpires: Date | null
    banned: boolean
    username: string | null
    displayUsername: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    avatarImageUTKey?: boolean
    coverImageUTKey?: boolean
    timezone?: boolean
    role?: boolean
    banReason?: boolean
    banExpires?: boolean
    banned?: boolean
    username?: boolean
    displayUsername?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    terminalSessions?: boolean | User$terminalSessionsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    apiClients?: boolean | User$apiClientsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    sessionPresence?: boolean | User$sessionPresenceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    avatarImageUTKey?: boolean
    coverImageUTKey?: boolean
    timezone?: boolean
    role?: boolean
    banReason?: boolean
    banExpires?: boolean
    banned?: boolean
    username?: boolean
    displayUsername?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    avatarImageUTKey?: boolean
    coverImageUTKey?: boolean
    timezone?: boolean
    role?: boolean
    banReason?: boolean
    banExpires?: boolean
    banned?: boolean
    username?: boolean
    displayUsername?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    avatarImageUTKey?: boolean
    coverImageUTKey?: boolean
    timezone?: boolean
    role?: boolean
    banReason?: boolean
    banExpires?: boolean
    banned?: boolean
    username?: boolean
    displayUsername?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "emailVerified" | "image" | "bio" | "avatarImageUrl" | "coverImageUrl" | "avatarImageUTKey" | "coverImageUTKey" | "timezone" | "role" | "banReason" | "banExpires" | "banned" | "username" | "displayUsername", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    terminalSessions?: boolean | User$terminalSessionsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    apiClients?: boolean | User$apiClientsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    sessionPresence?: boolean | User$sessionPresenceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      terminalSessions: Prisma.$TerminalSessionPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      apiClients: Prisma.$ApiClientPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      sessionPresence: Prisma.$SessionPresencePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date | null
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      bio: string | null
      avatarImageUrl: string | null
      coverImageUrl: string | null
      avatarImageUTKey: string | null
      coverImageUTKey: string | null
      timezone: string | null
      role: string
      banReason: string | null
      banExpires: Date | null
      banned: boolean
      username: string | null
      displayUsername: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    terminalSessions<T extends User$terminalSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$terminalSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiClients<T extends User$apiClientsArgs<ExtArgs> = {}>(args?: Subset<T, User$apiClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionPresence<T extends User$sessionPresenceArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionPresenceArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarImageUrl: FieldRef<"User", 'String'>
    readonly coverImageUrl: FieldRef<"User", 'String'>
    readonly avatarImageUTKey: FieldRef<"User", 'String'>
    readonly coverImageUTKey: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayUsername: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.terminalSessions
   */
  export type User$terminalSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    where?: TerminalSessionWhereInput
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    cursor?: TerminalSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TerminalSessionScalarFieldEnum | TerminalSessionScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.apiClients
   */
  export type User$apiClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    where?: ApiClientWhereInput
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    cursor?: ApiClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.sessionPresence
   */
  export type User$sessionPresenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    where?: SessionPresenceWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date | null
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model TerminalSession
   */

  export type AggregateTerminalSession = {
    _count: TerminalSessionCountAggregateOutputType | null
    _avg: TerminalSessionAvgAggregateOutputType | null
    _sum: TerminalSessionSumAggregateOutputType | null
    _min: TerminalSessionMinAggregateOutputType | null
    _max: TerminalSessionMaxAggregateOutputType | null
  }

  export type TerminalSessionAvgAggregateOutputType = {
    port: number | null
  }

  export type TerminalSessionSumAggregateOutputType = {
    port: number | null
  }

  export type TerminalSessionMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    status: $Enums.TerminalSessionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    port: number | null
    wsPath: string | null
    containerName: string | null
    projectId: string | null
    parentId: string | null
    relationType: $Enums.SessionRelationType | null
  }

  export type TerminalSessionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    status: $Enums.TerminalSessionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    port: number | null
    wsPath: string | null
    containerName: string | null
    projectId: string | null
    parentId: string | null
    relationType: $Enums.SessionRelationType | null
  }

  export type TerminalSessionCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    port: number
    wsPath: number
    containerName: number
    projectId: number
    parentId: number
    relationType: number
    _all: number
  }


  export type TerminalSessionAvgAggregateInputType = {
    port?: true
  }

  export type TerminalSessionSumAggregateInputType = {
    port?: true
  }

  export type TerminalSessionMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    port?: true
    wsPath?: true
    containerName?: true
    projectId?: true
    parentId?: true
    relationType?: true
  }

  export type TerminalSessionMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    port?: true
    wsPath?: true
    containerName?: true
    projectId?: true
    parentId?: true
    relationType?: true
  }

  export type TerminalSessionCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    port?: true
    wsPath?: true
    containerName?: true
    projectId?: true
    parentId?: true
    relationType?: true
    _all?: true
  }

  export type TerminalSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TerminalSession to aggregate.
     */
    where?: TerminalSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalSessions to fetch.
     */
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerminalSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TerminalSessions
    **/
    _count?: true | TerminalSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerminalSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerminalSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerminalSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerminalSessionMaxAggregateInputType
  }

  export type GetTerminalSessionAggregateType<T extends TerminalSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTerminalSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerminalSession[P]>
      : GetScalarType<T[P], AggregateTerminalSession[P]>
  }




  export type TerminalSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerminalSessionWhereInput
    orderBy?: TerminalSessionOrderByWithAggregationInput | TerminalSessionOrderByWithAggregationInput[]
    by: TerminalSessionScalarFieldEnum[] | TerminalSessionScalarFieldEnum
    having?: TerminalSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerminalSessionCountAggregateInputType | true
    _avg?: TerminalSessionAvgAggregateInputType
    _sum?: TerminalSessionSumAggregateInputType
    _min?: TerminalSessionMinAggregateInputType
    _max?: TerminalSessionMaxAggregateInputType
  }

  export type TerminalSessionGroupByOutputType = {
    id: string
    name: string
    userId: string
    status: $Enums.TerminalSessionStatus
    createdAt: Date
    updatedAt: Date
    port: number | null
    wsPath: string | null
    containerName: string | null
    projectId: string | null
    parentId: string | null
    relationType: $Enums.SessionRelationType | null
    _count: TerminalSessionCountAggregateOutputType | null
    _avg: TerminalSessionAvgAggregateOutputType | null
    _sum: TerminalSessionSumAggregateOutputType | null
    _min: TerminalSessionMinAggregateOutputType | null
    _max: TerminalSessionMaxAggregateOutputType | null
  }

  type GetTerminalSessionGroupByPayload<T extends TerminalSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerminalSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerminalSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerminalSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TerminalSessionGroupByOutputType[P]>
        }
      >
    >


  export type TerminalSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    port?: boolean
    wsPath?: boolean
    containerName?: boolean
    projectId?: boolean
    parentId?: boolean
    relationType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | TerminalSession$projectArgs<ExtArgs>
    parent?: boolean | TerminalSession$parentArgs<ExtArgs>
    children?: boolean | TerminalSession$childrenArgs<ExtArgs>
    presences?: boolean | TerminalSession$presencesArgs<ExtArgs>
    _count?: boolean | TerminalSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terminalSession"]>

  export type TerminalSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    port?: boolean
    wsPath?: boolean
    containerName?: boolean
    projectId?: boolean
    parentId?: boolean
    relationType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | TerminalSession$projectArgs<ExtArgs>
    parent?: boolean | TerminalSession$parentArgs<ExtArgs>
  }, ExtArgs["result"]["terminalSession"]>

  export type TerminalSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    port?: boolean
    wsPath?: boolean
    containerName?: boolean
    projectId?: boolean
    parentId?: boolean
    relationType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | TerminalSession$projectArgs<ExtArgs>
    parent?: boolean | TerminalSession$parentArgs<ExtArgs>
  }, ExtArgs["result"]["terminalSession"]>

  export type TerminalSessionSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    port?: boolean
    wsPath?: boolean
    containerName?: boolean
    projectId?: boolean
    parentId?: boolean
    relationType?: boolean
  }

  export type TerminalSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "status" | "createdAt" | "updatedAt" | "port" | "wsPath" | "containerName" | "projectId" | "parentId" | "relationType", ExtArgs["result"]["terminalSession"]>
  export type TerminalSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | TerminalSession$projectArgs<ExtArgs>
    parent?: boolean | TerminalSession$parentArgs<ExtArgs>
    children?: boolean | TerminalSession$childrenArgs<ExtArgs>
    presences?: boolean | TerminalSession$presencesArgs<ExtArgs>
    _count?: boolean | TerminalSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TerminalSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | TerminalSession$projectArgs<ExtArgs>
    parent?: boolean | TerminalSession$parentArgs<ExtArgs>
  }
  export type TerminalSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | TerminalSession$projectArgs<ExtArgs>
    parent?: boolean | TerminalSession$parentArgs<ExtArgs>
  }

  export type $TerminalSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TerminalSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs> | null
      parent: Prisma.$TerminalSessionPayload<ExtArgs> | null
      children: Prisma.$TerminalSessionPayload<ExtArgs>[]
      presences: Prisma.$SessionPresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      status: $Enums.TerminalSessionStatus
      createdAt: Date
      updatedAt: Date
      port: number | null
      wsPath: string | null
      containerName: string | null
      projectId: string | null
      parentId: string | null
      relationType: $Enums.SessionRelationType | null
    }, ExtArgs["result"]["terminalSession"]>
    composites: {}
  }

  type TerminalSessionGetPayload<S extends boolean | null | undefined | TerminalSessionDefaultArgs> = $Result.GetResult<Prisma.$TerminalSessionPayload, S>

  type TerminalSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerminalSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerminalSessionCountAggregateInputType | true
    }

  export interface TerminalSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TerminalSession'], meta: { name: 'TerminalSession' } }
    /**
     * Find zero or one TerminalSession that matches the filter.
     * @param {TerminalSessionFindUniqueArgs} args - Arguments to find a TerminalSession
     * @example
     * // Get one TerminalSession
     * const terminalSession = await prisma.terminalSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerminalSessionFindUniqueArgs>(args: SelectSubset<T, TerminalSessionFindUniqueArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TerminalSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerminalSessionFindUniqueOrThrowArgs} args - Arguments to find a TerminalSession
     * @example
     * // Get one TerminalSession
     * const terminalSession = await prisma.terminalSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerminalSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TerminalSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TerminalSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionFindFirstArgs} args - Arguments to find a TerminalSession
     * @example
     * // Get one TerminalSession
     * const terminalSession = await prisma.terminalSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerminalSessionFindFirstArgs>(args?: SelectSubset<T, TerminalSessionFindFirstArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TerminalSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionFindFirstOrThrowArgs} args - Arguments to find a TerminalSession
     * @example
     * // Get one TerminalSession
     * const terminalSession = await prisma.terminalSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerminalSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TerminalSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TerminalSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TerminalSessions
     * const terminalSessions = await prisma.terminalSession.findMany()
     * 
     * // Get first 10 TerminalSessions
     * const terminalSessions = await prisma.terminalSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terminalSessionWithIdOnly = await prisma.terminalSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TerminalSessionFindManyArgs>(args?: SelectSubset<T, TerminalSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TerminalSession.
     * @param {TerminalSessionCreateArgs} args - Arguments to create a TerminalSession.
     * @example
     * // Create one TerminalSession
     * const TerminalSession = await prisma.terminalSession.create({
     *   data: {
     *     // ... data to create a TerminalSession
     *   }
     * })
     * 
     */
    create<T extends TerminalSessionCreateArgs>(args: SelectSubset<T, TerminalSessionCreateArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TerminalSessions.
     * @param {TerminalSessionCreateManyArgs} args - Arguments to create many TerminalSessions.
     * @example
     * // Create many TerminalSessions
     * const terminalSession = await prisma.terminalSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerminalSessionCreateManyArgs>(args?: SelectSubset<T, TerminalSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TerminalSessions and returns the data saved in the database.
     * @param {TerminalSessionCreateManyAndReturnArgs} args - Arguments to create many TerminalSessions.
     * @example
     * // Create many TerminalSessions
     * const terminalSession = await prisma.terminalSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TerminalSessions and only return the `id`
     * const terminalSessionWithIdOnly = await prisma.terminalSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TerminalSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TerminalSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TerminalSession.
     * @param {TerminalSessionDeleteArgs} args - Arguments to delete one TerminalSession.
     * @example
     * // Delete one TerminalSession
     * const TerminalSession = await prisma.terminalSession.delete({
     *   where: {
     *     // ... filter to delete one TerminalSession
     *   }
     * })
     * 
     */
    delete<T extends TerminalSessionDeleteArgs>(args: SelectSubset<T, TerminalSessionDeleteArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TerminalSession.
     * @param {TerminalSessionUpdateArgs} args - Arguments to update one TerminalSession.
     * @example
     * // Update one TerminalSession
     * const terminalSession = await prisma.terminalSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerminalSessionUpdateArgs>(args: SelectSubset<T, TerminalSessionUpdateArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TerminalSessions.
     * @param {TerminalSessionDeleteManyArgs} args - Arguments to filter TerminalSessions to delete.
     * @example
     * // Delete a few TerminalSessions
     * const { count } = await prisma.terminalSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerminalSessionDeleteManyArgs>(args?: SelectSubset<T, TerminalSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerminalSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TerminalSessions
     * const terminalSession = await prisma.terminalSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerminalSessionUpdateManyArgs>(args: SelectSubset<T, TerminalSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerminalSessions and returns the data updated in the database.
     * @param {TerminalSessionUpdateManyAndReturnArgs} args - Arguments to update many TerminalSessions.
     * @example
     * // Update many TerminalSessions
     * const terminalSession = await prisma.terminalSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TerminalSessions and only return the `id`
     * const terminalSessionWithIdOnly = await prisma.terminalSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TerminalSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TerminalSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TerminalSession.
     * @param {TerminalSessionUpsertArgs} args - Arguments to update or create a TerminalSession.
     * @example
     * // Update or create a TerminalSession
     * const terminalSession = await prisma.terminalSession.upsert({
     *   create: {
     *     // ... data to create a TerminalSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TerminalSession we want to update
     *   }
     * })
     */
    upsert<T extends TerminalSessionUpsertArgs>(args: SelectSubset<T, TerminalSessionUpsertArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TerminalSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionCountArgs} args - Arguments to filter TerminalSessions to count.
     * @example
     * // Count the number of TerminalSessions
     * const count = await prisma.terminalSession.count({
     *   where: {
     *     // ... the filter for the TerminalSessions we want to count
     *   }
     * })
    **/
    count<T extends TerminalSessionCountArgs>(
      args?: Subset<T, TerminalSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerminalSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TerminalSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TerminalSessionAggregateArgs>(args: Subset<T, TerminalSessionAggregateArgs>): Prisma.PrismaPromise<GetTerminalSessionAggregateType<T>>

    /**
     * Group by TerminalSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TerminalSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerminalSessionGroupByArgs['orderBy'] }
        : { orderBy?: TerminalSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TerminalSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerminalSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TerminalSession model
   */
  readonly fields: TerminalSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TerminalSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerminalSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends TerminalSession$projectArgs<ExtArgs> = {}>(args?: Subset<T, TerminalSession$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends TerminalSession$parentArgs<ExtArgs> = {}>(args?: Subset<T, TerminalSession$parentArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends TerminalSession$childrenArgs<ExtArgs> = {}>(args?: Subset<T, TerminalSession$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presences<T extends TerminalSession$presencesArgs<ExtArgs> = {}>(args?: Subset<T, TerminalSession$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TerminalSession model
   */
  interface TerminalSessionFieldRefs {
    readonly id: FieldRef<"TerminalSession", 'String'>
    readonly name: FieldRef<"TerminalSession", 'String'>
    readonly userId: FieldRef<"TerminalSession", 'String'>
    readonly status: FieldRef<"TerminalSession", 'TerminalSessionStatus'>
    readonly createdAt: FieldRef<"TerminalSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TerminalSession", 'DateTime'>
    readonly port: FieldRef<"TerminalSession", 'Int'>
    readonly wsPath: FieldRef<"TerminalSession", 'String'>
    readonly containerName: FieldRef<"TerminalSession", 'String'>
    readonly projectId: FieldRef<"TerminalSession", 'String'>
    readonly parentId: FieldRef<"TerminalSession", 'String'>
    readonly relationType: FieldRef<"TerminalSession", 'SessionRelationType'>
  }
    

  // Custom InputTypes
  /**
   * TerminalSession findUnique
   */
  export type TerminalSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * Filter, which TerminalSession to fetch.
     */
    where: TerminalSessionWhereUniqueInput
  }

  /**
   * TerminalSession findUniqueOrThrow
   */
  export type TerminalSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * Filter, which TerminalSession to fetch.
     */
    where: TerminalSessionWhereUniqueInput
  }

  /**
   * TerminalSession findFirst
   */
  export type TerminalSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * Filter, which TerminalSession to fetch.
     */
    where?: TerminalSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalSessions to fetch.
     */
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TerminalSessions.
     */
    cursor?: TerminalSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TerminalSessions.
     */
    distinct?: TerminalSessionScalarFieldEnum | TerminalSessionScalarFieldEnum[]
  }

  /**
   * TerminalSession findFirstOrThrow
   */
  export type TerminalSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * Filter, which TerminalSession to fetch.
     */
    where?: TerminalSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalSessions to fetch.
     */
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TerminalSessions.
     */
    cursor?: TerminalSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TerminalSessions.
     */
    distinct?: TerminalSessionScalarFieldEnum | TerminalSessionScalarFieldEnum[]
  }

  /**
   * TerminalSession findMany
   */
  export type TerminalSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * Filter, which TerminalSessions to fetch.
     */
    where?: TerminalSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalSessions to fetch.
     */
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TerminalSessions.
     */
    cursor?: TerminalSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalSessions.
     */
    skip?: number
    distinct?: TerminalSessionScalarFieldEnum | TerminalSessionScalarFieldEnum[]
  }

  /**
   * TerminalSession create
   */
  export type TerminalSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TerminalSession.
     */
    data: XOR<TerminalSessionCreateInput, TerminalSessionUncheckedCreateInput>
  }

  /**
   * TerminalSession createMany
   */
  export type TerminalSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TerminalSessions.
     */
    data: TerminalSessionCreateManyInput | TerminalSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TerminalSession createManyAndReturn
   */
  export type TerminalSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TerminalSessions.
     */
    data: TerminalSessionCreateManyInput | TerminalSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TerminalSession update
   */
  export type TerminalSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TerminalSession.
     */
    data: XOR<TerminalSessionUpdateInput, TerminalSessionUncheckedUpdateInput>
    /**
     * Choose, which TerminalSession to update.
     */
    where: TerminalSessionWhereUniqueInput
  }

  /**
   * TerminalSession updateMany
   */
  export type TerminalSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TerminalSessions.
     */
    data: XOR<TerminalSessionUpdateManyMutationInput, TerminalSessionUncheckedUpdateManyInput>
    /**
     * Filter which TerminalSessions to update
     */
    where?: TerminalSessionWhereInput
    /**
     * Limit how many TerminalSessions to update.
     */
    limit?: number
  }

  /**
   * TerminalSession updateManyAndReturn
   */
  export type TerminalSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * The data used to update TerminalSessions.
     */
    data: XOR<TerminalSessionUpdateManyMutationInput, TerminalSessionUncheckedUpdateManyInput>
    /**
     * Filter which TerminalSessions to update
     */
    where?: TerminalSessionWhereInput
    /**
     * Limit how many TerminalSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TerminalSession upsert
   */
  export type TerminalSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TerminalSession to update in case it exists.
     */
    where: TerminalSessionWhereUniqueInput
    /**
     * In case the TerminalSession found by the `where` argument doesn't exist, create a new TerminalSession with this data.
     */
    create: XOR<TerminalSessionCreateInput, TerminalSessionUncheckedCreateInput>
    /**
     * In case the TerminalSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerminalSessionUpdateInput, TerminalSessionUncheckedUpdateInput>
  }

  /**
   * TerminalSession delete
   */
  export type TerminalSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    /**
     * Filter which TerminalSession to delete.
     */
    where: TerminalSessionWhereUniqueInput
  }

  /**
   * TerminalSession deleteMany
   */
  export type TerminalSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TerminalSessions to delete
     */
    where?: TerminalSessionWhereInput
    /**
     * Limit how many TerminalSessions to delete.
     */
    limit?: number
  }

  /**
   * TerminalSession.project
   */
  export type TerminalSession$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * TerminalSession.parent
   */
  export type TerminalSession$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    where?: TerminalSessionWhereInput
  }

  /**
   * TerminalSession.children
   */
  export type TerminalSession$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    where?: TerminalSessionWhereInput
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    cursor?: TerminalSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TerminalSessionScalarFieldEnum | TerminalSessionScalarFieldEnum[]
  }

  /**
   * TerminalSession.presences
   */
  export type TerminalSession$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    where?: SessionPresenceWhereInput
    orderBy?: SessionPresenceOrderByWithRelationInput | SessionPresenceOrderByWithRelationInput[]
    cursor?: SessionPresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionPresenceScalarFieldEnum | SessionPresenceScalarFieldEnum[]
  }

  /**
   * TerminalSession without action
   */
  export type TerminalSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    folder: string | null
    shared: boolean | null
    defaultCliId: $Enums.AgentProvider | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    folder: string | null
    shared: boolean | null
    defaultCliId: $Enums.AgentProvider | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    folder: number
    shared: number
    defaultCliId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    folder?: true
    shared?: true
    defaultCliId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    folder?: true
    shared?: true
    defaultCliId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    folder?: true
    shared?: true
    defaultCliId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    folder: string
    shared: boolean
    defaultCliId: $Enums.AgentProvider | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    folder?: boolean
    shared?: boolean
    defaultCliId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | Project$sessionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    folder?: boolean
    shared?: boolean
    defaultCliId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    folder?: boolean
    shared?: boolean
    defaultCliId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    folder?: boolean
    shared?: boolean
    defaultCliId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "folder" | "shared" | "defaultCliId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | Project$sessionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sessions: Prisma.$TerminalSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      folder: string
      shared: boolean
      defaultCliId: $Enums.AgentProvider | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Project$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly folder: FieldRef<"Project", 'String'>
    readonly shared: FieldRef<"Project", 'Boolean'>
    readonly defaultCliId: FieldRef<"Project", 'AgentProvider'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.sessions
   */
  export type Project$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalSession
     */
    select?: TerminalSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalSession
     */
    omit?: TerminalSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalSessionInclude<ExtArgs> | null
    where?: TerminalSessionWhereInput
    orderBy?: TerminalSessionOrderByWithRelationInput | TerminalSessionOrderByWithRelationInput[]
    cursor?: TerminalSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TerminalSessionScalarFieldEnum | TerminalSessionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    agents:PrismaJson.UserPreferencesAgents
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    agents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    agents:PrismaJson.UserPreferencesAgents | null
    createdAt: Date
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    agents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "agents" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      /**
       * [UserPreferencesAgents]
       */
      agents:PrismaJson.UserPreferencesAgents | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly agents: FieldRef<"UserPreferences", 'Json'>
    readonly createdAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    status: $Enums.TaskStatus | null
    source: $Enums.TaskSource | null
    agentId: $Enums.AgentProvider | null
    repository: string | null
    mountPoint: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    status: $Enums.TaskStatus | null
    source: $Enums.TaskSource | null
    agentId: $Enums.AgentProvider | null
    repository: string | null
    mountPoint: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    body: number
    status: number
    source: number
    agentId: number
    repository: number
    mountPoint: number
    userId: number
    attachments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    status?: true
    source?: true
    agentId?: true
    repository?: true
    mountPoint?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    status?: true
    source?: true
    agentId?: true
    repository?: true
    mountPoint?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    status?: true
    source?: true
    agentId?: true
    repository?: true
    mountPoint?: true
    userId?: true
    attachments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string | null
    body: string
    status: $Enums.TaskStatus
    source: $Enums.TaskSource
    agentId: $Enums.AgentProvider | null
    repository: string | null
    mountPoint: string | null
    userId: string
    attachments:unknown | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    source?: boolean
    agentId?: boolean
    repository?: boolean
    mountPoint?: boolean
    userId?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    executions?: boolean | Task$executionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    source?: boolean
    agentId?: boolean
    repository?: boolean
    mountPoint?: boolean
    userId?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    source?: boolean
    agentId?: boolean
    repository?: boolean
    mountPoint?: boolean
    userId?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    source?: boolean
    agentId?: boolean
    repository?: boolean
    mountPoint?: boolean
    userId?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "status" | "source" | "agentId" | "repository" | "mountPoint" | "userId" | "attachments" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    executions?: boolean | Task$executionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      executions: Prisma.$TaskExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      body: string
      status: $Enums.TaskStatus
      source: $Enums.TaskSource
      agentId: $Enums.AgentProvider | null
      repository: string | null
      mountPoint: string | null
      userId: string
      attachments:unknown | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    executions<T extends Task$executionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly body: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly source: FieldRef<"Task", 'TaskSource'>
    readonly agentId: FieldRef<"Task", 'AgentProvider'>
    readonly repository: FieldRef<"Task", 'String'>
    readonly mountPoint: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly attachments: FieldRef<"Task", 'Json'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.executions
   */
  export type Task$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    where?: TaskExecutionWhereInput
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    cursor?: TaskExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskExecution
   */

  export type AggregateTaskExecution = {
    _count: TaskExecutionCountAggregateOutputType | null
    _avg: TaskExecutionAvgAggregateOutputType | null
    _sum: TaskExecutionSumAggregateOutputType | null
    _min: TaskExecutionMinAggregateOutputType | null
    _max: TaskExecutionMaxAggregateOutputType | null
  }

  export type TaskExecutionAvgAggregateOutputType = {
    memoryUsage: number | null
    tokenCount: number | null
  }

  export type TaskExecutionSumAggregateOutputType = {
    memoryUsage: number | null
    tokenCount: number | null
  }

  export type TaskExecutionMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    status: $Enums.TaskExecutionStatus | null
    agentId: $Enums.AgentProvider | null
    jobId: string | null
    containerName: string | null
    completed: boolean | null
    needsInput: boolean | null
    inputRequest: string | null
    result: string | null
    errorMessage: string | null
    logs: string | null
    memoryUsage: number | null
    tokenCount: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskExecutionMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    status: $Enums.TaskExecutionStatus | null
    agentId: $Enums.AgentProvider | null
    jobId: string | null
    containerName: string | null
    completed: boolean | null
    needsInput: boolean | null
    inputRequest: string | null
    result: string | null
    errorMessage: string | null
    logs: string | null
    memoryUsage: number | null
    tokenCount: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskExecutionCountAggregateOutputType = {
    id: number
    taskId: number
    status: number
    agentId: number
    jobId: number
    containerName: number
    completed: number
    needsInput: number
    inputRequest: number
    result: number
    errorMessage: number
    logs: number
    memoryUsage: number
    tokenCount: number
    context: number
    startedAt: number
    finishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskExecutionAvgAggregateInputType = {
    memoryUsage?: true
    tokenCount?: true
  }

  export type TaskExecutionSumAggregateInputType = {
    memoryUsage?: true
    tokenCount?: true
  }

  export type TaskExecutionMinAggregateInputType = {
    id?: true
    taskId?: true
    status?: true
    agentId?: true
    jobId?: true
    containerName?: true
    completed?: true
    needsInput?: true
    inputRequest?: true
    result?: true
    errorMessage?: true
    logs?: true
    memoryUsage?: true
    tokenCount?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskExecutionMaxAggregateInputType = {
    id?: true
    taskId?: true
    status?: true
    agentId?: true
    jobId?: true
    containerName?: true
    completed?: true
    needsInput?: true
    inputRequest?: true
    result?: true
    errorMessage?: true
    logs?: true
    memoryUsage?: true
    tokenCount?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskExecutionCountAggregateInputType = {
    id?: true
    taskId?: true
    status?: true
    agentId?: true
    jobId?: true
    containerName?: true
    completed?: true
    needsInput?: true
    inputRequest?: true
    result?: true
    errorMessage?: true
    logs?: true
    memoryUsage?: true
    tokenCount?: true
    context?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskExecution to aggregate.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskExecutions
    **/
    _count?: true | TaskExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskExecutionMaxAggregateInputType
  }

  export type GetTaskExecutionAggregateType<T extends TaskExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskExecution[P]>
      : GetScalarType<T[P], AggregateTaskExecution[P]>
  }




  export type TaskExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskExecutionWhereInput
    orderBy?: TaskExecutionOrderByWithAggregationInput | TaskExecutionOrderByWithAggregationInput[]
    by: TaskExecutionScalarFieldEnum[] | TaskExecutionScalarFieldEnum
    having?: TaskExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskExecutionCountAggregateInputType | true
    _avg?: TaskExecutionAvgAggregateInputType
    _sum?: TaskExecutionSumAggregateInputType
    _min?: TaskExecutionMinAggregateInputType
    _max?: TaskExecutionMaxAggregateInputType
  }

  export type TaskExecutionGroupByOutputType = {
    id: string
    taskId: string
    status: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId: string | null
    containerName: string | null
    completed: boolean
    needsInput: boolean
    inputRequest: string | null
    result: string | null
    errorMessage: string | null
    logs: string | null
    memoryUsage: number | null
    tokenCount: number | null
    context:unknown | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskExecutionCountAggregateOutputType | null
    _avg: TaskExecutionAvgAggregateOutputType | null
    _sum: TaskExecutionSumAggregateOutputType | null
    _min: TaskExecutionMinAggregateOutputType | null
    _max: TaskExecutionMaxAggregateOutputType | null
  }

  type GetTaskExecutionGroupByPayload<T extends TaskExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskExecutionGroupByOutputType[P]>
        }
      >
    >


  export type TaskExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    status?: boolean
    agentId?: boolean
    jobId?: boolean
    containerName?: boolean
    completed?: boolean
    needsInput?: boolean
    inputRequest?: boolean
    result?: boolean
    errorMessage?: boolean
    logs?: boolean
    memoryUsage?: boolean
    tokenCount?: boolean
    context?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskExecution"]>

  export type TaskExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    status?: boolean
    agentId?: boolean
    jobId?: boolean
    containerName?: boolean
    completed?: boolean
    needsInput?: boolean
    inputRequest?: boolean
    result?: boolean
    errorMessage?: boolean
    logs?: boolean
    memoryUsage?: boolean
    tokenCount?: boolean
    context?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskExecution"]>

  export type TaskExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    status?: boolean
    agentId?: boolean
    jobId?: boolean
    containerName?: boolean
    completed?: boolean
    needsInput?: boolean
    inputRequest?: boolean
    result?: boolean
    errorMessage?: boolean
    logs?: boolean
    memoryUsage?: boolean
    tokenCount?: boolean
    context?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskExecution"]>

  export type TaskExecutionSelectScalar = {
    id?: boolean
    taskId?: boolean
    status?: boolean
    agentId?: boolean
    jobId?: boolean
    containerName?: boolean
    completed?: boolean
    needsInput?: boolean
    inputRequest?: boolean
    result?: boolean
    errorMessage?: boolean
    logs?: boolean
    memoryUsage?: boolean
    tokenCount?: boolean
    context?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "status" | "agentId" | "jobId" | "containerName" | "completed" | "needsInput" | "inputRequest" | "result" | "errorMessage" | "logs" | "memoryUsage" | "tokenCount" | "context" | "startedAt" | "finishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["taskExecution"]>
  export type TaskExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskExecution"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      status: $Enums.TaskExecutionStatus
      agentId: $Enums.AgentProvider
      jobId: string | null
      containerName: string | null
      completed: boolean
      needsInput: boolean
      inputRequest: string | null
      result: string | null
      errorMessage: string | null
      logs: string | null
      memoryUsage: number | null
      tokenCount: number | null
      context:unknown | null
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taskExecution"]>
    composites: {}
  }

  type TaskExecutionGetPayload<S extends boolean | null | undefined | TaskExecutionDefaultArgs> = $Result.GetResult<Prisma.$TaskExecutionPayload, S>

  type TaskExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskExecutionCountAggregateInputType | true
    }

  export interface TaskExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskExecution'], meta: { name: 'TaskExecution' } }
    /**
     * Find zero or one TaskExecution that matches the filter.
     * @param {TaskExecutionFindUniqueArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskExecutionFindUniqueArgs>(args: SelectSubset<T, TaskExecutionFindUniqueArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskExecutionFindUniqueOrThrowArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionFindFirstArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskExecutionFindFirstArgs>(args?: SelectSubset<T, TaskExecutionFindFirstArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionFindFirstOrThrowArgs} args - Arguments to find a TaskExecution
     * @example
     * // Get one TaskExecution
     * const taskExecution = await prisma.taskExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskExecutions
     * const taskExecutions = await prisma.taskExecution.findMany()
     * 
     * // Get first 10 TaskExecutions
     * const taskExecutions = await prisma.taskExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskExecutionWithIdOnly = await prisma.taskExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskExecutionFindManyArgs>(args?: SelectSubset<T, TaskExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskExecution.
     * @param {TaskExecutionCreateArgs} args - Arguments to create a TaskExecution.
     * @example
     * // Create one TaskExecution
     * const TaskExecution = await prisma.taskExecution.create({
     *   data: {
     *     // ... data to create a TaskExecution
     *   }
     * })
     * 
     */
    create<T extends TaskExecutionCreateArgs>(args: SelectSubset<T, TaskExecutionCreateArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskExecutions.
     * @param {TaskExecutionCreateManyArgs} args - Arguments to create many TaskExecutions.
     * @example
     * // Create many TaskExecutions
     * const taskExecution = await prisma.taskExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskExecutionCreateManyArgs>(args?: SelectSubset<T, TaskExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskExecutions and returns the data saved in the database.
     * @param {TaskExecutionCreateManyAndReturnArgs} args - Arguments to create many TaskExecutions.
     * @example
     * // Create many TaskExecutions
     * const taskExecution = await prisma.taskExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskExecutions and only return the `id`
     * const taskExecutionWithIdOnly = await prisma.taskExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskExecution.
     * @param {TaskExecutionDeleteArgs} args - Arguments to delete one TaskExecution.
     * @example
     * // Delete one TaskExecution
     * const TaskExecution = await prisma.taskExecution.delete({
     *   where: {
     *     // ... filter to delete one TaskExecution
     *   }
     * })
     * 
     */
    delete<T extends TaskExecutionDeleteArgs>(args: SelectSubset<T, TaskExecutionDeleteArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskExecution.
     * @param {TaskExecutionUpdateArgs} args - Arguments to update one TaskExecution.
     * @example
     * // Update one TaskExecution
     * const taskExecution = await prisma.taskExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskExecutionUpdateArgs>(args: SelectSubset<T, TaskExecutionUpdateArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskExecutions.
     * @param {TaskExecutionDeleteManyArgs} args - Arguments to filter TaskExecutions to delete.
     * @example
     * // Delete a few TaskExecutions
     * const { count } = await prisma.taskExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskExecutionDeleteManyArgs>(args?: SelectSubset<T, TaskExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskExecutions
     * const taskExecution = await prisma.taskExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskExecutionUpdateManyArgs>(args: SelectSubset<T, TaskExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskExecutions and returns the data updated in the database.
     * @param {TaskExecutionUpdateManyAndReturnArgs} args - Arguments to update many TaskExecutions.
     * @example
     * // Update many TaskExecutions
     * const taskExecution = await prisma.taskExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskExecutions and only return the `id`
     * const taskExecutionWithIdOnly = await prisma.taskExecution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskExecution.
     * @param {TaskExecutionUpsertArgs} args - Arguments to update or create a TaskExecution.
     * @example
     * // Update or create a TaskExecution
     * const taskExecution = await prisma.taskExecution.upsert({
     *   create: {
     *     // ... data to create a TaskExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskExecution we want to update
     *   }
     * })
     */
    upsert<T extends TaskExecutionUpsertArgs>(args: SelectSubset<T, TaskExecutionUpsertArgs<ExtArgs>>): Prisma__TaskExecutionClient<$Result.GetResult<Prisma.$TaskExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionCountArgs} args - Arguments to filter TaskExecutions to count.
     * @example
     * // Count the number of TaskExecutions
     * const count = await prisma.taskExecution.count({
     *   where: {
     *     // ... the filter for the TaskExecutions we want to count
     *   }
     * })
    **/
    count<T extends TaskExecutionCountArgs>(
      args?: Subset<T, TaskExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskExecutionAggregateArgs>(args: Subset<T, TaskExecutionAggregateArgs>): Prisma.PrismaPromise<GetTaskExecutionAggregateType<T>>

    /**
     * Group by TaskExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskExecutionGroupByArgs['orderBy'] }
        : { orderBy?: TaskExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskExecution model
   */
  readonly fields: TaskExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskExecution model
   */
  interface TaskExecutionFieldRefs {
    readonly id: FieldRef<"TaskExecution", 'String'>
    readonly taskId: FieldRef<"TaskExecution", 'String'>
    readonly status: FieldRef<"TaskExecution", 'TaskExecutionStatus'>
    readonly agentId: FieldRef<"TaskExecution", 'AgentProvider'>
    readonly jobId: FieldRef<"TaskExecution", 'String'>
    readonly containerName: FieldRef<"TaskExecution", 'String'>
    readonly completed: FieldRef<"TaskExecution", 'Boolean'>
    readonly needsInput: FieldRef<"TaskExecution", 'Boolean'>
    readonly inputRequest: FieldRef<"TaskExecution", 'String'>
    readonly result: FieldRef<"TaskExecution", 'String'>
    readonly errorMessage: FieldRef<"TaskExecution", 'String'>
    readonly logs: FieldRef<"TaskExecution", 'String'>
    readonly memoryUsage: FieldRef<"TaskExecution", 'Int'>
    readonly tokenCount: FieldRef<"TaskExecution", 'Int'>
    readonly context: FieldRef<"TaskExecution", 'Json'>
    readonly startedAt: FieldRef<"TaskExecution", 'DateTime'>
    readonly finishedAt: FieldRef<"TaskExecution", 'DateTime'>
    readonly createdAt: FieldRef<"TaskExecution", 'DateTime'>
    readonly updatedAt: FieldRef<"TaskExecution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskExecution findUnique
   */
  export type TaskExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where: TaskExecutionWhereUniqueInput
  }

  /**
   * TaskExecution findUniqueOrThrow
   */
  export type TaskExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where: TaskExecutionWhereUniqueInput
  }

  /**
   * TaskExecution findFirst
   */
  export type TaskExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskExecutions.
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskExecutions.
     */
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
  }

  /**
   * TaskExecution findFirstOrThrow
   */
  export type TaskExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecution to fetch.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskExecutions.
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskExecutions.
     */
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
  }

  /**
   * TaskExecution findMany
   */
  export type TaskExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter, which TaskExecutions to fetch.
     */
    where?: TaskExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskExecutions to fetch.
     */
    orderBy?: TaskExecutionOrderByWithRelationInput | TaskExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskExecutions.
     */
    cursor?: TaskExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskExecutions.
     */
    skip?: number
    distinct?: TaskExecutionScalarFieldEnum | TaskExecutionScalarFieldEnum[]
  }

  /**
   * TaskExecution create
   */
  export type TaskExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskExecution.
     */
    data: XOR<TaskExecutionCreateInput, TaskExecutionUncheckedCreateInput>
  }

  /**
   * TaskExecution createMany
   */
  export type TaskExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskExecutions.
     */
    data: TaskExecutionCreateManyInput | TaskExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskExecution createManyAndReturn
   */
  export type TaskExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskExecutions.
     */
    data: TaskExecutionCreateManyInput | TaskExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskExecution update
   */
  export type TaskExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskExecution.
     */
    data: XOR<TaskExecutionUpdateInput, TaskExecutionUncheckedUpdateInput>
    /**
     * Choose, which TaskExecution to update.
     */
    where: TaskExecutionWhereUniqueInput
  }

  /**
   * TaskExecution updateMany
   */
  export type TaskExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskExecutions.
     */
    data: XOR<TaskExecutionUpdateManyMutationInput, TaskExecutionUncheckedUpdateManyInput>
    /**
     * Filter which TaskExecutions to update
     */
    where?: TaskExecutionWhereInput
    /**
     * Limit how many TaskExecutions to update.
     */
    limit?: number
  }

  /**
   * TaskExecution updateManyAndReturn
   */
  export type TaskExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * The data used to update TaskExecutions.
     */
    data: XOR<TaskExecutionUpdateManyMutationInput, TaskExecutionUncheckedUpdateManyInput>
    /**
     * Filter which TaskExecutions to update
     */
    where?: TaskExecutionWhereInput
    /**
     * Limit how many TaskExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskExecution upsert
   */
  export type TaskExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskExecution to update in case it exists.
     */
    where: TaskExecutionWhereUniqueInput
    /**
     * In case the TaskExecution found by the `where` argument doesn't exist, create a new TaskExecution with this data.
     */
    create: XOR<TaskExecutionCreateInput, TaskExecutionUncheckedCreateInput>
    /**
     * In case the TaskExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskExecutionUpdateInput, TaskExecutionUncheckedUpdateInput>
  }

  /**
   * TaskExecution delete
   */
  export type TaskExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
    /**
     * Filter which TaskExecution to delete.
     */
    where: TaskExecutionWhereUniqueInput
  }

  /**
   * TaskExecution deleteMany
   */
  export type TaskExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskExecutions to delete
     */
    where?: TaskExecutionWhereInput
    /**
     * Limit how many TaskExecutions to delete.
     */
    limit?: number
  }

  /**
   * TaskExecution without action
   */
  export type TaskExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskExecution
     */
    select?: TaskExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskExecution
     */
    omit?: TaskExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskExecutionInclude<ExtArgs> | null
  }


  /**
   * Model ApiClient
   */

  export type AggregateApiClient = {
    _count: ApiClientCountAggregateOutputType | null
    _min: ApiClientMinAggregateOutputType | null
    _max: ApiClientMaxAggregateOutputType | null
  }

  export type ApiClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiClientCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiClientMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiClientMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiClientCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiClient to aggregate.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiClients
    **/
    _count?: true | ApiClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiClientMaxAggregateInputType
  }

  export type GetApiClientAggregateType<T extends ApiClientAggregateArgs> = {
        [P in keyof T & keyof AggregateApiClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiClient[P]>
      : GetScalarType<T[P], AggregateApiClient[P]>
  }




  export type ApiClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiClientWhereInput
    orderBy?: ApiClientOrderByWithAggregationInput | ApiClientOrderByWithAggregationInput[]
    by: ApiClientScalarFieldEnum[] | ApiClientScalarFieldEnum
    having?: ApiClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiClientCountAggregateInputType | true
    _min?: ApiClientMinAggregateInputType
    _max?: ApiClientMaxAggregateInputType
  }

  export type ApiClientGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ApiClientCountAggregateOutputType | null
    _min: ApiClientMinAggregateOutputType | null
    _max: ApiClientMaxAggregateOutputType | null
  }

  type GetApiClientGroupByPayload<T extends ApiClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiClientGroupByOutputType[P]>
            : GetScalarType<T[P], ApiClientGroupByOutputType[P]>
        }
      >
    >


  export type ApiClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    secrets?: boolean | ApiClient$secretsArgs<ExtArgs>
    callLogs?: boolean | ApiClient$callLogsArgs<ExtArgs>
    _count?: boolean | ApiClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiClient"]>

  export type ApiClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiClient"]>

  export type ApiClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiClient"]>

  export type ApiClientSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["apiClient"]>
  export type ApiClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    secrets?: boolean | ApiClient$secretsArgs<ExtArgs>
    callLogs?: boolean | ApiClient$callLogsArgs<ExtArgs>
    _count?: boolean | ApiClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiClient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      secrets: Prisma.$ApiSecretPayload<ExtArgs>[]
      callLogs: Prisma.$ApiCallLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiClient"]>
    composites: {}
  }

  type ApiClientGetPayload<S extends boolean | null | undefined | ApiClientDefaultArgs> = $Result.GetResult<Prisma.$ApiClientPayload, S>

  type ApiClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiClientCountAggregateInputType | true
    }

  export interface ApiClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiClient'], meta: { name: 'ApiClient' } }
    /**
     * Find zero or one ApiClient that matches the filter.
     * @param {ApiClientFindUniqueArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiClientFindUniqueArgs>(args: SelectSubset<T, ApiClientFindUniqueArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiClientFindUniqueOrThrowArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientFindFirstArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiClientFindFirstArgs>(args?: SelectSubset<T, ApiClientFindFirstArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientFindFirstOrThrowArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiClients
     * const apiClients = await prisma.apiClient.findMany()
     * 
     * // Get first 10 ApiClients
     * const apiClients = await prisma.apiClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiClientWithIdOnly = await prisma.apiClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiClientFindManyArgs>(args?: SelectSubset<T, ApiClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiClient.
     * @param {ApiClientCreateArgs} args - Arguments to create a ApiClient.
     * @example
     * // Create one ApiClient
     * const ApiClient = await prisma.apiClient.create({
     *   data: {
     *     // ... data to create a ApiClient
     *   }
     * })
     * 
     */
    create<T extends ApiClientCreateArgs>(args: SelectSubset<T, ApiClientCreateArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiClients.
     * @param {ApiClientCreateManyArgs} args - Arguments to create many ApiClients.
     * @example
     * // Create many ApiClients
     * const apiClient = await prisma.apiClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiClientCreateManyArgs>(args?: SelectSubset<T, ApiClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiClients and returns the data saved in the database.
     * @param {ApiClientCreateManyAndReturnArgs} args - Arguments to create many ApiClients.
     * @example
     * // Create many ApiClients
     * const apiClient = await prisma.apiClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiClients and only return the `id`
     * const apiClientWithIdOnly = await prisma.apiClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiClient.
     * @param {ApiClientDeleteArgs} args - Arguments to delete one ApiClient.
     * @example
     * // Delete one ApiClient
     * const ApiClient = await prisma.apiClient.delete({
     *   where: {
     *     // ... filter to delete one ApiClient
     *   }
     * })
     * 
     */
    delete<T extends ApiClientDeleteArgs>(args: SelectSubset<T, ApiClientDeleteArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiClient.
     * @param {ApiClientUpdateArgs} args - Arguments to update one ApiClient.
     * @example
     * // Update one ApiClient
     * const apiClient = await prisma.apiClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiClientUpdateArgs>(args: SelectSubset<T, ApiClientUpdateArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiClients.
     * @param {ApiClientDeleteManyArgs} args - Arguments to filter ApiClients to delete.
     * @example
     * // Delete a few ApiClients
     * const { count } = await prisma.apiClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiClientDeleteManyArgs>(args?: SelectSubset<T, ApiClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiClients
     * const apiClient = await prisma.apiClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiClientUpdateManyArgs>(args: SelectSubset<T, ApiClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiClients and returns the data updated in the database.
     * @param {ApiClientUpdateManyAndReturnArgs} args - Arguments to update many ApiClients.
     * @example
     * // Update many ApiClients
     * const apiClient = await prisma.apiClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiClients and only return the `id`
     * const apiClientWithIdOnly = await prisma.apiClient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiClient.
     * @param {ApiClientUpsertArgs} args - Arguments to update or create a ApiClient.
     * @example
     * // Update or create a ApiClient
     * const apiClient = await prisma.apiClient.upsert({
     *   create: {
     *     // ... data to create a ApiClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiClient we want to update
     *   }
     * })
     */
    upsert<T extends ApiClientUpsertArgs>(args: SelectSubset<T, ApiClientUpsertArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientCountArgs} args - Arguments to filter ApiClients to count.
     * @example
     * // Count the number of ApiClients
     * const count = await prisma.apiClient.count({
     *   where: {
     *     // ... the filter for the ApiClients we want to count
     *   }
     * })
    **/
    count<T extends ApiClientCountArgs>(
      args?: Subset<T, ApiClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiClientAggregateArgs>(args: Subset<T, ApiClientAggregateArgs>): Prisma.PrismaPromise<GetApiClientAggregateType<T>>

    /**
     * Group by ApiClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiClientGroupByArgs['orderBy'] }
        : { orderBy?: ApiClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiClient model
   */
  readonly fields: ApiClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    secrets<T extends ApiClient$secretsArgs<ExtArgs> = {}>(args?: Subset<T, ApiClient$secretsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callLogs<T extends ApiClient$callLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiClient$callLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiClient model
   */
  interface ApiClientFieldRefs {
    readonly id: FieldRef<"ApiClient", 'String'>
    readonly name: FieldRef<"ApiClient", 'String'>
    readonly description: FieldRef<"ApiClient", 'String'>
    readonly userId: FieldRef<"ApiClient", 'String'>
    readonly createdAt: FieldRef<"ApiClient", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiClient findUnique
   */
  export type ApiClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient findUniqueOrThrow
   */
  export type ApiClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient findFirst
   */
  export type ApiClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiClients.
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiClients.
     */
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * ApiClient findFirstOrThrow
   */
  export type ApiClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiClients.
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiClients.
     */
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * ApiClient findMany
   */
  export type ApiClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * Filter, which ApiClients to fetch.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiClients.
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * ApiClient create
   */
  export type ApiClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiClient.
     */
    data: XOR<ApiClientCreateInput, ApiClientUncheckedCreateInput>
  }

  /**
   * ApiClient createMany
   */
  export type ApiClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiClients.
     */
    data: ApiClientCreateManyInput | ApiClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiClient createManyAndReturn
   */
  export type ApiClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The data used to create many ApiClients.
     */
    data: ApiClientCreateManyInput | ApiClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiClient update
   */
  export type ApiClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiClient.
     */
    data: XOR<ApiClientUpdateInput, ApiClientUncheckedUpdateInput>
    /**
     * Choose, which ApiClient to update.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient updateMany
   */
  export type ApiClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiClients.
     */
    data: XOR<ApiClientUpdateManyMutationInput, ApiClientUncheckedUpdateManyInput>
    /**
     * Filter which ApiClients to update
     */
    where?: ApiClientWhereInput
    /**
     * Limit how many ApiClients to update.
     */
    limit?: number
  }

  /**
   * ApiClient updateManyAndReturn
   */
  export type ApiClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The data used to update ApiClients.
     */
    data: XOR<ApiClientUpdateManyMutationInput, ApiClientUncheckedUpdateManyInput>
    /**
     * Filter which ApiClients to update
     */
    where?: ApiClientWhereInput
    /**
     * Limit how many ApiClients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiClient upsert
   */
  export type ApiClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiClient to update in case it exists.
     */
    where: ApiClientWhereUniqueInput
    /**
     * In case the ApiClient found by the `where` argument doesn't exist, create a new ApiClient with this data.
     */
    create: XOR<ApiClientCreateInput, ApiClientUncheckedCreateInput>
    /**
     * In case the ApiClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiClientUpdateInput, ApiClientUncheckedUpdateInput>
  }

  /**
   * ApiClient delete
   */
  export type ApiClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
    /**
     * Filter which ApiClient to delete.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient deleteMany
   */
  export type ApiClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiClients to delete
     */
    where?: ApiClientWhereInput
    /**
     * Limit how many ApiClients to delete.
     */
    limit?: number
  }

  /**
   * ApiClient.secrets
   */
  export type ApiClient$secretsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    where?: ApiSecretWhereInput
    orderBy?: ApiSecretOrderByWithRelationInput | ApiSecretOrderByWithRelationInput[]
    cursor?: ApiSecretWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiSecretScalarFieldEnum | ApiSecretScalarFieldEnum[]
  }

  /**
   * ApiClient.callLogs
   */
  export type ApiClient$callLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    where?: ApiCallLogWhereInput
    orderBy?: ApiCallLogOrderByWithRelationInput | ApiCallLogOrderByWithRelationInput[]
    cursor?: ApiCallLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiCallLogScalarFieldEnum | ApiCallLogScalarFieldEnum[]
  }

  /**
   * ApiClient without action
   */
  export type ApiClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiClientInclude<ExtArgs> | null
  }


  /**
   * Model ApiSecret
   */

  export type AggregateApiSecret = {
    _count: ApiSecretCountAggregateOutputType | null
    _min: ApiSecretMinAggregateOutputType | null
    _max: ApiSecretMaxAggregateOutputType | null
  }

  export type ApiSecretMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    keyPrefix: string | null
    clientId: string | null
    lastUsedAt: Date | null
    createdAt: Date | null
  }

  export type ApiSecretMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    keyPrefix: string | null
    clientId: string | null
    lastUsedAt: Date | null
    createdAt: Date | null
  }

  export type ApiSecretCountAggregateOutputType = {
    id: number
    name: number
    keyHash: number
    keyPrefix: number
    clientId: number
    lastUsedAt: number
    createdAt: number
    _all: number
  }


  export type ApiSecretMinAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    keyPrefix?: true
    clientId?: true
    lastUsedAt?: true
    createdAt?: true
  }

  export type ApiSecretMaxAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    keyPrefix?: true
    clientId?: true
    lastUsedAt?: true
    createdAt?: true
  }

  export type ApiSecretCountAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    keyPrefix?: true
    clientId?: true
    lastUsedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ApiSecretAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiSecret to aggregate.
     */
    where?: ApiSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiSecrets to fetch.
     */
    orderBy?: ApiSecretOrderByWithRelationInput | ApiSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiSecrets
    **/
    _count?: true | ApiSecretCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiSecretMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiSecretMaxAggregateInputType
  }

  export type GetApiSecretAggregateType<T extends ApiSecretAggregateArgs> = {
        [P in keyof T & keyof AggregateApiSecret]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiSecret[P]>
      : GetScalarType<T[P], AggregateApiSecret[P]>
  }




  export type ApiSecretGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiSecretWhereInput
    orderBy?: ApiSecretOrderByWithAggregationInput | ApiSecretOrderByWithAggregationInput[]
    by: ApiSecretScalarFieldEnum[] | ApiSecretScalarFieldEnum
    having?: ApiSecretScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiSecretCountAggregateInputType | true
    _min?: ApiSecretMinAggregateInputType
    _max?: ApiSecretMaxAggregateInputType
  }

  export type ApiSecretGroupByOutputType = {
    id: string
    name: string
    keyHash: string
    keyPrefix: string
    clientId: string
    lastUsedAt: Date | null
    createdAt: Date
    _count: ApiSecretCountAggregateOutputType | null
    _min: ApiSecretMinAggregateOutputType | null
    _max: ApiSecretMaxAggregateOutputType | null
  }

  type GetApiSecretGroupByPayload<T extends ApiSecretGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiSecretGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiSecretGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiSecretGroupByOutputType[P]>
            : GetScalarType<T[P], ApiSecretGroupByOutputType[P]>
        }
      >
    >


  export type ApiSecretSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    clientId?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiSecret"]>

  export type ApiSecretSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    clientId?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiSecret"]>

  export type ApiSecretSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    clientId?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiSecret"]>

  export type ApiSecretSelectScalar = {
    id?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    clientId?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
  }

  export type ApiSecretOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyHash" | "keyPrefix" | "clientId" | "lastUsedAt" | "createdAt", ExtArgs["result"]["apiSecret"]>
  export type ApiSecretInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }
  export type ApiSecretIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }
  export type ApiSecretIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }

  export type $ApiSecretPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiSecret"
    objects: {
      client: Prisma.$ApiClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      keyHash: string
      keyPrefix: string
      clientId: string
      lastUsedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["apiSecret"]>
    composites: {}
  }

  type ApiSecretGetPayload<S extends boolean | null | undefined | ApiSecretDefaultArgs> = $Result.GetResult<Prisma.$ApiSecretPayload, S>

  type ApiSecretCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiSecretFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiSecretCountAggregateInputType | true
    }

  export interface ApiSecretDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiSecret'], meta: { name: 'ApiSecret' } }
    /**
     * Find zero or one ApiSecret that matches the filter.
     * @param {ApiSecretFindUniqueArgs} args - Arguments to find a ApiSecret
     * @example
     * // Get one ApiSecret
     * const apiSecret = await prisma.apiSecret.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiSecretFindUniqueArgs>(args: SelectSubset<T, ApiSecretFindUniqueArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiSecret that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiSecretFindUniqueOrThrowArgs} args - Arguments to find a ApiSecret
     * @example
     * // Get one ApiSecret
     * const apiSecret = await prisma.apiSecret.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiSecretFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiSecretFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiSecret that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretFindFirstArgs} args - Arguments to find a ApiSecret
     * @example
     * // Get one ApiSecret
     * const apiSecret = await prisma.apiSecret.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiSecretFindFirstArgs>(args?: SelectSubset<T, ApiSecretFindFirstArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiSecret that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretFindFirstOrThrowArgs} args - Arguments to find a ApiSecret
     * @example
     * // Get one ApiSecret
     * const apiSecret = await prisma.apiSecret.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiSecretFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiSecretFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiSecrets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiSecrets
     * const apiSecrets = await prisma.apiSecret.findMany()
     * 
     * // Get first 10 ApiSecrets
     * const apiSecrets = await prisma.apiSecret.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiSecretWithIdOnly = await prisma.apiSecret.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiSecretFindManyArgs>(args?: SelectSubset<T, ApiSecretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiSecret.
     * @param {ApiSecretCreateArgs} args - Arguments to create a ApiSecret.
     * @example
     * // Create one ApiSecret
     * const ApiSecret = await prisma.apiSecret.create({
     *   data: {
     *     // ... data to create a ApiSecret
     *   }
     * })
     * 
     */
    create<T extends ApiSecretCreateArgs>(args: SelectSubset<T, ApiSecretCreateArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiSecrets.
     * @param {ApiSecretCreateManyArgs} args - Arguments to create many ApiSecrets.
     * @example
     * // Create many ApiSecrets
     * const apiSecret = await prisma.apiSecret.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiSecretCreateManyArgs>(args?: SelectSubset<T, ApiSecretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiSecrets and returns the data saved in the database.
     * @param {ApiSecretCreateManyAndReturnArgs} args - Arguments to create many ApiSecrets.
     * @example
     * // Create many ApiSecrets
     * const apiSecret = await prisma.apiSecret.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiSecrets and only return the `id`
     * const apiSecretWithIdOnly = await prisma.apiSecret.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiSecretCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiSecretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiSecret.
     * @param {ApiSecretDeleteArgs} args - Arguments to delete one ApiSecret.
     * @example
     * // Delete one ApiSecret
     * const ApiSecret = await prisma.apiSecret.delete({
     *   where: {
     *     // ... filter to delete one ApiSecret
     *   }
     * })
     * 
     */
    delete<T extends ApiSecretDeleteArgs>(args: SelectSubset<T, ApiSecretDeleteArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiSecret.
     * @param {ApiSecretUpdateArgs} args - Arguments to update one ApiSecret.
     * @example
     * // Update one ApiSecret
     * const apiSecret = await prisma.apiSecret.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiSecretUpdateArgs>(args: SelectSubset<T, ApiSecretUpdateArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiSecrets.
     * @param {ApiSecretDeleteManyArgs} args - Arguments to filter ApiSecrets to delete.
     * @example
     * // Delete a few ApiSecrets
     * const { count } = await prisma.apiSecret.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiSecretDeleteManyArgs>(args?: SelectSubset<T, ApiSecretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiSecrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiSecrets
     * const apiSecret = await prisma.apiSecret.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiSecretUpdateManyArgs>(args: SelectSubset<T, ApiSecretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiSecrets and returns the data updated in the database.
     * @param {ApiSecretUpdateManyAndReturnArgs} args - Arguments to update many ApiSecrets.
     * @example
     * // Update many ApiSecrets
     * const apiSecret = await prisma.apiSecret.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiSecrets and only return the `id`
     * const apiSecretWithIdOnly = await prisma.apiSecret.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiSecretUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiSecretUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiSecret.
     * @param {ApiSecretUpsertArgs} args - Arguments to update or create a ApiSecret.
     * @example
     * // Update or create a ApiSecret
     * const apiSecret = await prisma.apiSecret.upsert({
     *   create: {
     *     // ... data to create a ApiSecret
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiSecret we want to update
     *   }
     * })
     */
    upsert<T extends ApiSecretUpsertArgs>(args: SelectSubset<T, ApiSecretUpsertArgs<ExtArgs>>): Prisma__ApiSecretClient<$Result.GetResult<Prisma.$ApiSecretPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiSecrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretCountArgs} args - Arguments to filter ApiSecrets to count.
     * @example
     * // Count the number of ApiSecrets
     * const count = await prisma.apiSecret.count({
     *   where: {
     *     // ... the filter for the ApiSecrets we want to count
     *   }
     * })
    **/
    count<T extends ApiSecretCountArgs>(
      args?: Subset<T, ApiSecretCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiSecretCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiSecret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiSecretAggregateArgs>(args: Subset<T, ApiSecretAggregateArgs>): Prisma.PrismaPromise<GetApiSecretAggregateType<T>>

    /**
     * Group by ApiSecret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiSecretGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiSecretGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiSecretGroupByArgs['orderBy'] }
        : { orderBy?: ApiSecretGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiSecretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiSecretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiSecret model
   */
  readonly fields: ApiSecretFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiSecret.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiSecretClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ApiClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiClientDefaultArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiSecret model
   */
  interface ApiSecretFieldRefs {
    readonly id: FieldRef<"ApiSecret", 'String'>
    readonly name: FieldRef<"ApiSecret", 'String'>
    readonly keyHash: FieldRef<"ApiSecret", 'String'>
    readonly keyPrefix: FieldRef<"ApiSecret", 'String'>
    readonly clientId: FieldRef<"ApiSecret", 'String'>
    readonly lastUsedAt: FieldRef<"ApiSecret", 'DateTime'>
    readonly createdAt: FieldRef<"ApiSecret", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiSecret findUnique
   */
  export type ApiSecretFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * Filter, which ApiSecret to fetch.
     */
    where: ApiSecretWhereUniqueInput
  }

  /**
   * ApiSecret findUniqueOrThrow
   */
  export type ApiSecretFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * Filter, which ApiSecret to fetch.
     */
    where: ApiSecretWhereUniqueInput
  }

  /**
   * ApiSecret findFirst
   */
  export type ApiSecretFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * Filter, which ApiSecret to fetch.
     */
    where?: ApiSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiSecrets to fetch.
     */
    orderBy?: ApiSecretOrderByWithRelationInput | ApiSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiSecrets.
     */
    cursor?: ApiSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiSecrets.
     */
    distinct?: ApiSecretScalarFieldEnum | ApiSecretScalarFieldEnum[]
  }

  /**
   * ApiSecret findFirstOrThrow
   */
  export type ApiSecretFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * Filter, which ApiSecret to fetch.
     */
    where?: ApiSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiSecrets to fetch.
     */
    orderBy?: ApiSecretOrderByWithRelationInput | ApiSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiSecrets.
     */
    cursor?: ApiSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiSecrets.
     */
    distinct?: ApiSecretScalarFieldEnum | ApiSecretScalarFieldEnum[]
  }

  /**
   * ApiSecret findMany
   */
  export type ApiSecretFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * Filter, which ApiSecrets to fetch.
     */
    where?: ApiSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiSecrets to fetch.
     */
    orderBy?: ApiSecretOrderByWithRelationInput | ApiSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiSecrets.
     */
    cursor?: ApiSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiSecrets.
     */
    skip?: number
    distinct?: ApiSecretScalarFieldEnum | ApiSecretScalarFieldEnum[]
  }

  /**
   * ApiSecret create
   */
  export type ApiSecretCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiSecret.
     */
    data: XOR<ApiSecretCreateInput, ApiSecretUncheckedCreateInput>
  }

  /**
   * ApiSecret createMany
   */
  export type ApiSecretCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiSecrets.
     */
    data: ApiSecretCreateManyInput | ApiSecretCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiSecret createManyAndReturn
   */
  export type ApiSecretCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * The data used to create many ApiSecrets.
     */
    data: ApiSecretCreateManyInput | ApiSecretCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiSecret update
   */
  export type ApiSecretUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiSecret.
     */
    data: XOR<ApiSecretUpdateInput, ApiSecretUncheckedUpdateInput>
    /**
     * Choose, which ApiSecret to update.
     */
    where: ApiSecretWhereUniqueInput
  }

  /**
   * ApiSecret updateMany
   */
  export type ApiSecretUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiSecrets.
     */
    data: XOR<ApiSecretUpdateManyMutationInput, ApiSecretUncheckedUpdateManyInput>
    /**
     * Filter which ApiSecrets to update
     */
    where?: ApiSecretWhereInput
    /**
     * Limit how many ApiSecrets to update.
     */
    limit?: number
  }

  /**
   * ApiSecret updateManyAndReturn
   */
  export type ApiSecretUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * The data used to update ApiSecrets.
     */
    data: XOR<ApiSecretUpdateManyMutationInput, ApiSecretUncheckedUpdateManyInput>
    /**
     * Filter which ApiSecrets to update
     */
    where?: ApiSecretWhereInput
    /**
     * Limit how many ApiSecrets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiSecret upsert
   */
  export type ApiSecretUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiSecret to update in case it exists.
     */
    where: ApiSecretWhereUniqueInput
    /**
     * In case the ApiSecret found by the `where` argument doesn't exist, create a new ApiSecret with this data.
     */
    create: XOR<ApiSecretCreateInput, ApiSecretUncheckedCreateInput>
    /**
     * In case the ApiSecret was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiSecretUpdateInput, ApiSecretUncheckedUpdateInput>
  }

  /**
   * ApiSecret delete
   */
  export type ApiSecretDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
    /**
     * Filter which ApiSecret to delete.
     */
    where: ApiSecretWhereUniqueInput
  }

  /**
   * ApiSecret deleteMany
   */
  export type ApiSecretDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiSecrets to delete
     */
    where?: ApiSecretWhereInput
    /**
     * Limit how many ApiSecrets to delete.
     */
    limit?: number
  }

  /**
   * ApiSecret without action
   */
  export type ApiSecretDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiSecret
     */
    select?: ApiSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiSecret
     */
    omit?: ApiSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiSecretInclude<ExtArgs> | null
  }


  /**
   * Model ApiCallLog
   */

  export type AggregateApiCallLog = {
    _count: ApiCallLogCountAggregateOutputType | null
    _avg: ApiCallLogAvgAggregateOutputType | null
    _sum: ApiCallLogSumAggregateOutputType | null
    _min: ApiCallLogMinAggregateOutputType | null
    _max: ApiCallLogMaxAggregateOutputType | null
  }

  export type ApiCallLogAvgAggregateOutputType = {
    statusCode: number | null
    responseMs: number | null
  }

  export type ApiCallLogSumAggregateOutputType = {
    statusCode: number | null
    responseMs: number | null
  }

  export type ApiCallLogMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    endpoint: string | null
    method: string | null
    statusCode: number | null
    ipAddress: string | null
    userAgent: string | null
    requestBody: string | null
    responseMs: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type ApiCallLogMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    endpoint: string | null
    method: string | null
    statusCode: number | null
    ipAddress: string | null
    userAgent: string | null
    requestBody: string | null
    responseMs: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type ApiCallLogCountAggregateOutputType = {
    id: number
    clientId: number
    endpoint: number
    method: number
    statusCode: number
    ipAddress: number
    userAgent: number
    requestBody: number
    responseMs: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type ApiCallLogAvgAggregateInputType = {
    statusCode?: true
    responseMs?: true
  }

  export type ApiCallLogSumAggregateInputType = {
    statusCode?: true
    responseMs?: true
  }

  export type ApiCallLogMinAggregateInputType = {
    id?: true
    clientId?: true
    endpoint?: true
    method?: true
    statusCode?: true
    ipAddress?: true
    userAgent?: true
    requestBody?: true
    responseMs?: true
    errorMessage?: true
    createdAt?: true
  }

  export type ApiCallLogMaxAggregateInputType = {
    id?: true
    clientId?: true
    endpoint?: true
    method?: true
    statusCode?: true
    ipAddress?: true
    userAgent?: true
    requestBody?: true
    responseMs?: true
    errorMessage?: true
    createdAt?: true
  }

  export type ApiCallLogCountAggregateInputType = {
    id?: true
    clientId?: true
    endpoint?: true
    method?: true
    statusCode?: true
    ipAddress?: true
    userAgent?: true
    requestBody?: true
    responseMs?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type ApiCallLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCallLog to aggregate.
     */
    where?: ApiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCallLogs to fetch.
     */
    orderBy?: ApiCallLogOrderByWithRelationInput | ApiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiCallLogs
    **/
    _count?: true | ApiCallLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiCallLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiCallLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiCallLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiCallLogMaxAggregateInputType
  }

  export type GetApiCallLogAggregateType<T extends ApiCallLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiCallLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiCallLog[P]>
      : GetScalarType<T[P], AggregateApiCallLog[P]>
  }




  export type ApiCallLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallLogWhereInput
    orderBy?: ApiCallLogOrderByWithAggregationInput | ApiCallLogOrderByWithAggregationInput[]
    by: ApiCallLogScalarFieldEnum[] | ApiCallLogScalarFieldEnum
    having?: ApiCallLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCallLogCountAggregateInputType | true
    _avg?: ApiCallLogAvgAggregateInputType
    _sum?: ApiCallLogSumAggregateInputType
    _min?: ApiCallLogMinAggregateInputType
    _max?: ApiCallLogMaxAggregateInputType
  }

  export type ApiCallLogGroupByOutputType = {
    id: string
    clientId: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress: string | null
    userAgent: string | null
    requestBody: string | null
    responseMs: number | null
    errorMessage: string | null
    createdAt: Date
    _count: ApiCallLogCountAggregateOutputType | null
    _avg: ApiCallLogAvgAggregateOutputType | null
    _sum: ApiCallLogSumAggregateOutputType | null
    _min: ApiCallLogMinAggregateOutputType | null
    _max: ApiCallLogMaxAggregateOutputType | null
  }

  type GetApiCallLogGroupByPayload<T extends ApiCallLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiCallLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiCallLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiCallLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiCallLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiCallLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    requestBody?: boolean
    responseMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiCallLog"]>

  export type ApiCallLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    requestBody?: boolean
    responseMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiCallLog"]>

  export type ApiCallLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    requestBody?: boolean
    responseMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiCallLog"]>

  export type ApiCallLogSelectScalar = {
    id?: boolean
    clientId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    requestBody?: boolean
    responseMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type ApiCallLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "endpoint" | "method" | "statusCode" | "ipAddress" | "userAgent" | "requestBody" | "responseMs" | "errorMessage" | "createdAt", ExtArgs["result"]["apiCallLog"]>
  export type ApiCallLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }
  export type ApiCallLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }
  export type ApiCallLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ApiClientDefaultArgs<ExtArgs>
  }

  export type $ApiCallLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiCallLog"
    objects: {
      client: Prisma.$ApiClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      endpoint: string
      method: string
      statusCode: number
      ipAddress: string | null
      userAgent: string | null
      requestBody: string | null
      responseMs: number | null
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["apiCallLog"]>
    composites: {}
  }

  type ApiCallLogGetPayload<S extends boolean | null | undefined | ApiCallLogDefaultArgs> = $Result.GetResult<Prisma.$ApiCallLogPayload, S>

  type ApiCallLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiCallLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCallLogCountAggregateInputType | true
    }

  export interface ApiCallLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiCallLog'], meta: { name: 'ApiCallLog' } }
    /**
     * Find zero or one ApiCallLog that matches the filter.
     * @param {ApiCallLogFindUniqueArgs} args - Arguments to find a ApiCallLog
     * @example
     * // Get one ApiCallLog
     * const apiCallLog = await prisma.apiCallLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiCallLogFindUniqueArgs>(args: SelectSubset<T, ApiCallLogFindUniqueArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiCallLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiCallLogFindUniqueOrThrowArgs} args - Arguments to find a ApiCallLog
     * @example
     * // Get one ApiCallLog
     * const apiCallLog = await prisma.apiCallLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiCallLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiCallLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCallLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogFindFirstArgs} args - Arguments to find a ApiCallLog
     * @example
     * // Get one ApiCallLog
     * const apiCallLog = await prisma.apiCallLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiCallLogFindFirstArgs>(args?: SelectSubset<T, ApiCallLogFindFirstArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCallLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogFindFirstOrThrowArgs} args - Arguments to find a ApiCallLog
     * @example
     * // Get one ApiCallLog
     * const apiCallLog = await prisma.apiCallLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiCallLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiCallLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiCallLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiCallLogs
     * const apiCallLogs = await prisma.apiCallLog.findMany()
     * 
     * // Get first 10 ApiCallLogs
     * const apiCallLogs = await prisma.apiCallLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiCallLogWithIdOnly = await prisma.apiCallLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiCallLogFindManyArgs>(args?: SelectSubset<T, ApiCallLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiCallLog.
     * @param {ApiCallLogCreateArgs} args - Arguments to create a ApiCallLog.
     * @example
     * // Create one ApiCallLog
     * const ApiCallLog = await prisma.apiCallLog.create({
     *   data: {
     *     // ... data to create a ApiCallLog
     *   }
     * })
     * 
     */
    create<T extends ApiCallLogCreateArgs>(args: SelectSubset<T, ApiCallLogCreateArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiCallLogs.
     * @param {ApiCallLogCreateManyArgs} args - Arguments to create many ApiCallLogs.
     * @example
     * // Create many ApiCallLogs
     * const apiCallLog = await prisma.apiCallLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCallLogCreateManyArgs>(args?: SelectSubset<T, ApiCallLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiCallLogs and returns the data saved in the database.
     * @param {ApiCallLogCreateManyAndReturnArgs} args - Arguments to create many ApiCallLogs.
     * @example
     * // Create many ApiCallLogs
     * const apiCallLog = await prisma.apiCallLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiCallLogs and only return the `id`
     * const apiCallLogWithIdOnly = await prisma.apiCallLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCallLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCallLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiCallLog.
     * @param {ApiCallLogDeleteArgs} args - Arguments to delete one ApiCallLog.
     * @example
     * // Delete one ApiCallLog
     * const ApiCallLog = await prisma.apiCallLog.delete({
     *   where: {
     *     // ... filter to delete one ApiCallLog
     *   }
     * })
     * 
     */
    delete<T extends ApiCallLogDeleteArgs>(args: SelectSubset<T, ApiCallLogDeleteArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiCallLog.
     * @param {ApiCallLogUpdateArgs} args - Arguments to update one ApiCallLog.
     * @example
     * // Update one ApiCallLog
     * const apiCallLog = await prisma.apiCallLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiCallLogUpdateArgs>(args: SelectSubset<T, ApiCallLogUpdateArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiCallLogs.
     * @param {ApiCallLogDeleteManyArgs} args - Arguments to filter ApiCallLogs to delete.
     * @example
     * // Delete a few ApiCallLogs
     * const { count } = await prisma.apiCallLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiCallLogDeleteManyArgs>(args?: SelectSubset<T, ApiCallLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiCallLogs
     * const apiCallLog = await prisma.apiCallLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiCallLogUpdateManyArgs>(args: SelectSubset<T, ApiCallLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCallLogs and returns the data updated in the database.
     * @param {ApiCallLogUpdateManyAndReturnArgs} args - Arguments to update many ApiCallLogs.
     * @example
     * // Update many ApiCallLogs
     * const apiCallLog = await prisma.apiCallLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiCallLogs and only return the `id`
     * const apiCallLogWithIdOnly = await prisma.apiCallLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiCallLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiCallLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiCallLog.
     * @param {ApiCallLogUpsertArgs} args - Arguments to update or create a ApiCallLog.
     * @example
     * // Update or create a ApiCallLog
     * const apiCallLog = await prisma.apiCallLog.upsert({
     *   create: {
     *     // ... data to create a ApiCallLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiCallLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiCallLogUpsertArgs>(args: SelectSubset<T, ApiCallLogUpsertArgs<ExtArgs>>): Prisma__ApiCallLogClient<$Result.GetResult<Prisma.$ApiCallLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiCallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogCountArgs} args - Arguments to filter ApiCallLogs to count.
     * @example
     * // Count the number of ApiCallLogs
     * const count = await prisma.apiCallLog.count({
     *   where: {
     *     // ... the filter for the ApiCallLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiCallLogCountArgs>(
      args?: Subset<T, ApiCallLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCallLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiCallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiCallLogAggregateArgs>(args: Subset<T, ApiCallLogAggregateArgs>): Prisma.PrismaPromise<GetApiCallLogAggregateType<T>>

    /**
     * Group by ApiCallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiCallLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiCallLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiCallLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiCallLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiCallLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiCallLog model
   */
  readonly fields: ApiCallLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiCallLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiCallLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ApiClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiClientDefaultArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiCallLog model
   */
  interface ApiCallLogFieldRefs {
    readonly id: FieldRef<"ApiCallLog", 'String'>
    readonly clientId: FieldRef<"ApiCallLog", 'String'>
    readonly endpoint: FieldRef<"ApiCallLog", 'String'>
    readonly method: FieldRef<"ApiCallLog", 'String'>
    readonly statusCode: FieldRef<"ApiCallLog", 'Int'>
    readonly ipAddress: FieldRef<"ApiCallLog", 'String'>
    readonly userAgent: FieldRef<"ApiCallLog", 'String'>
    readonly requestBody: FieldRef<"ApiCallLog", 'String'>
    readonly responseMs: FieldRef<"ApiCallLog", 'Int'>
    readonly errorMessage: FieldRef<"ApiCallLog", 'String'>
    readonly createdAt: FieldRef<"ApiCallLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiCallLog findUnique
   */
  export type ApiCallLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiCallLog to fetch.
     */
    where: ApiCallLogWhereUniqueInput
  }

  /**
   * ApiCallLog findUniqueOrThrow
   */
  export type ApiCallLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiCallLog to fetch.
     */
    where: ApiCallLogWhereUniqueInput
  }

  /**
   * ApiCallLog findFirst
   */
  export type ApiCallLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiCallLog to fetch.
     */
    where?: ApiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCallLogs to fetch.
     */
    orderBy?: ApiCallLogOrderByWithRelationInput | ApiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCallLogs.
     */
    cursor?: ApiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCallLogs.
     */
    distinct?: ApiCallLogScalarFieldEnum | ApiCallLogScalarFieldEnum[]
  }

  /**
   * ApiCallLog findFirstOrThrow
   */
  export type ApiCallLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiCallLog to fetch.
     */
    where?: ApiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCallLogs to fetch.
     */
    orderBy?: ApiCallLogOrderByWithRelationInput | ApiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCallLogs.
     */
    cursor?: ApiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCallLogs.
     */
    distinct?: ApiCallLogScalarFieldEnum | ApiCallLogScalarFieldEnum[]
  }

  /**
   * ApiCallLog findMany
   */
  export type ApiCallLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiCallLogs to fetch.
     */
    where?: ApiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCallLogs to fetch.
     */
    orderBy?: ApiCallLogOrderByWithRelationInput | ApiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiCallLogs.
     */
    cursor?: ApiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCallLogs.
     */
    skip?: number
    distinct?: ApiCallLogScalarFieldEnum | ApiCallLogScalarFieldEnum[]
  }

  /**
   * ApiCallLog create
   */
  export type ApiCallLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiCallLog.
     */
    data: XOR<ApiCallLogCreateInput, ApiCallLogUncheckedCreateInput>
  }

  /**
   * ApiCallLog createMany
   */
  export type ApiCallLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiCallLogs.
     */
    data: ApiCallLogCreateManyInput | ApiCallLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiCallLog createManyAndReturn
   */
  export type ApiCallLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiCallLogs.
     */
    data: ApiCallLogCreateManyInput | ApiCallLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCallLog update
   */
  export type ApiCallLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiCallLog.
     */
    data: XOR<ApiCallLogUpdateInput, ApiCallLogUncheckedUpdateInput>
    /**
     * Choose, which ApiCallLog to update.
     */
    where: ApiCallLogWhereUniqueInput
  }

  /**
   * ApiCallLog updateMany
   */
  export type ApiCallLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiCallLogs.
     */
    data: XOR<ApiCallLogUpdateManyMutationInput, ApiCallLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiCallLogs to update
     */
    where?: ApiCallLogWhereInput
    /**
     * Limit how many ApiCallLogs to update.
     */
    limit?: number
  }

  /**
   * ApiCallLog updateManyAndReturn
   */
  export type ApiCallLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiCallLogs.
     */
    data: XOR<ApiCallLogUpdateManyMutationInput, ApiCallLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiCallLogs to update
     */
    where?: ApiCallLogWhereInput
    /**
     * Limit how many ApiCallLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCallLog upsert
   */
  export type ApiCallLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiCallLog to update in case it exists.
     */
    where: ApiCallLogWhereUniqueInput
    /**
     * In case the ApiCallLog found by the `where` argument doesn't exist, create a new ApiCallLog with this data.
     */
    create: XOR<ApiCallLogCreateInput, ApiCallLogUncheckedCreateInput>
    /**
     * In case the ApiCallLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiCallLogUpdateInput, ApiCallLogUncheckedUpdateInput>
  }

  /**
   * ApiCallLog delete
   */
  export type ApiCallLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
    /**
     * Filter which ApiCallLog to delete.
     */
    where: ApiCallLogWhereUniqueInput
  }

  /**
   * ApiCallLog deleteMany
   */
  export type ApiCallLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCallLogs to delete
     */
    where?: ApiCallLogWhereInput
    /**
     * Limit how many ApiCallLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiCallLog without action
   */
  export type ApiCallLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCallLog
     */
    select?: ApiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCallLog
     */
    omit?: ApiCallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallLogInclude<ExtArgs> | null
  }


  /**
   * Model SessionPresence
   */

  export type AggregateSessionPresence = {
    _count: SessionPresenceCountAggregateOutputType | null
    _min: SessionPresenceMinAggregateOutputType | null
    _max: SessionPresenceMaxAggregateOutputType | null
  }

  export type SessionPresenceMinAggregateOutputType = {
    userId: string | null
    sessionId: string | null
    status: $Enums.PresenceStatus | null
    lastSeen: Date | null
  }

  export type SessionPresenceMaxAggregateOutputType = {
    userId: string | null
    sessionId: string | null
    status: $Enums.PresenceStatus | null
    lastSeen: Date | null
  }

  export type SessionPresenceCountAggregateOutputType = {
    userId: number
    sessionId: number
    status: number
    lastSeen: number
    _all: number
  }


  export type SessionPresenceMinAggregateInputType = {
    userId?: true
    sessionId?: true
    status?: true
    lastSeen?: true
  }

  export type SessionPresenceMaxAggregateInputType = {
    userId?: true
    sessionId?: true
    status?: true
    lastSeen?: true
  }

  export type SessionPresenceCountAggregateInputType = {
    userId?: true
    sessionId?: true
    status?: true
    lastSeen?: true
    _all?: true
  }

  export type SessionPresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionPresence to aggregate.
     */
    where?: SessionPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPresences to fetch.
     */
    orderBy?: SessionPresenceOrderByWithRelationInput | SessionPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionPresences
    **/
    _count?: true | SessionPresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionPresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionPresenceMaxAggregateInputType
  }

  export type GetSessionPresenceAggregateType<T extends SessionPresenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionPresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionPresence[P]>
      : GetScalarType<T[P], AggregateSessionPresence[P]>
  }




  export type SessionPresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionPresenceWhereInput
    orderBy?: SessionPresenceOrderByWithAggregationInput | SessionPresenceOrderByWithAggregationInput[]
    by: SessionPresenceScalarFieldEnum[] | SessionPresenceScalarFieldEnum
    having?: SessionPresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionPresenceCountAggregateInputType | true
    _min?: SessionPresenceMinAggregateInputType
    _max?: SessionPresenceMaxAggregateInputType
  }

  export type SessionPresenceGroupByOutputType = {
    userId: string
    sessionId: string
    status: $Enums.PresenceStatus
    lastSeen: Date
    _count: SessionPresenceCountAggregateOutputType | null
    _min: SessionPresenceMinAggregateOutputType | null
    _max: SessionPresenceMaxAggregateOutputType | null
  }

  type GetSessionPresenceGroupByPayload<T extends SessionPresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionPresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionPresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionPresenceGroupByOutputType[P]>
            : GetScalarType<T[P], SessionPresenceGroupByOutputType[P]>
        }
      >
    >


  export type SessionPresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sessionId?: boolean
    status?: boolean
    lastSeen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | TerminalSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionPresence"]>

  export type SessionPresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sessionId?: boolean
    status?: boolean
    lastSeen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | TerminalSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionPresence"]>

  export type SessionPresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sessionId?: boolean
    status?: boolean
    lastSeen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | TerminalSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionPresence"]>

  export type SessionPresenceSelectScalar = {
    userId?: boolean
    sessionId?: boolean
    status?: boolean
    lastSeen?: boolean
  }

  export type SessionPresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "sessionId" | "status" | "lastSeen", ExtArgs["result"]["sessionPresence"]>
  export type SessionPresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | TerminalSessionDefaultArgs<ExtArgs>
  }
  export type SessionPresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | TerminalSessionDefaultArgs<ExtArgs>
  }
  export type SessionPresenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | TerminalSessionDefaultArgs<ExtArgs>
  }

  export type $SessionPresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionPresence"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$TerminalSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      sessionId: string
      status: $Enums.PresenceStatus
      lastSeen: Date
    }, ExtArgs["result"]["sessionPresence"]>
    composites: {}
  }

  type SessionPresenceGetPayload<S extends boolean | null | undefined | SessionPresenceDefaultArgs> = $Result.GetResult<Prisma.$SessionPresencePayload, S>

  type SessionPresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionPresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionPresenceCountAggregateInputType | true
    }

  export interface SessionPresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionPresence'], meta: { name: 'SessionPresence' } }
    /**
     * Find zero or one SessionPresence that matches the filter.
     * @param {SessionPresenceFindUniqueArgs} args - Arguments to find a SessionPresence
     * @example
     * // Get one SessionPresence
     * const sessionPresence = await prisma.sessionPresence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionPresenceFindUniqueArgs>(args: SelectSubset<T, SessionPresenceFindUniqueArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionPresence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionPresenceFindUniqueOrThrowArgs} args - Arguments to find a SessionPresence
     * @example
     * // Get one SessionPresence
     * const sessionPresence = await prisma.sessionPresence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionPresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionPresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionPresence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceFindFirstArgs} args - Arguments to find a SessionPresence
     * @example
     * // Get one SessionPresence
     * const sessionPresence = await prisma.sessionPresence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionPresenceFindFirstArgs>(args?: SelectSubset<T, SessionPresenceFindFirstArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionPresence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceFindFirstOrThrowArgs} args - Arguments to find a SessionPresence
     * @example
     * // Get one SessionPresence
     * const sessionPresence = await prisma.sessionPresence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionPresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionPresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionPresences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionPresences
     * const sessionPresences = await prisma.sessionPresence.findMany()
     * 
     * // Get first 10 SessionPresences
     * const sessionPresences = await prisma.sessionPresence.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sessionPresenceWithUserIdOnly = await prisma.sessionPresence.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SessionPresenceFindManyArgs>(args?: SelectSubset<T, SessionPresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionPresence.
     * @param {SessionPresenceCreateArgs} args - Arguments to create a SessionPresence.
     * @example
     * // Create one SessionPresence
     * const SessionPresence = await prisma.sessionPresence.create({
     *   data: {
     *     // ... data to create a SessionPresence
     *   }
     * })
     * 
     */
    create<T extends SessionPresenceCreateArgs>(args: SelectSubset<T, SessionPresenceCreateArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionPresences.
     * @param {SessionPresenceCreateManyArgs} args - Arguments to create many SessionPresences.
     * @example
     * // Create many SessionPresences
     * const sessionPresence = await prisma.sessionPresence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionPresenceCreateManyArgs>(args?: SelectSubset<T, SessionPresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionPresences and returns the data saved in the database.
     * @param {SessionPresenceCreateManyAndReturnArgs} args - Arguments to create many SessionPresences.
     * @example
     * // Create many SessionPresences
     * const sessionPresence = await prisma.sessionPresence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionPresences and only return the `userId`
     * const sessionPresenceWithUserIdOnly = await prisma.sessionPresence.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionPresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionPresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionPresence.
     * @param {SessionPresenceDeleteArgs} args - Arguments to delete one SessionPresence.
     * @example
     * // Delete one SessionPresence
     * const SessionPresence = await prisma.sessionPresence.delete({
     *   where: {
     *     // ... filter to delete one SessionPresence
     *   }
     * })
     * 
     */
    delete<T extends SessionPresenceDeleteArgs>(args: SelectSubset<T, SessionPresenceDeleteArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionPresence.
     * @param {SessionPresenceUpdateArgs} args - Arguments to update one SessionPresence.
     * @example
     * // Update one SessionPresence
     * const sessionPresence = await prisma.sessionPresence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionPresenceUpdateArgs>(args: SelectSubset<T, SessionPresenceUpdateArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionPresences.
     * @param {SessionPresenceDeleteManyArgs} args - Arguments to filter SessionPresences to delete.
     * @example
     * // Delete a few SessionPresences
     * const { count } = await prisma.sessionPresence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionPresenceDeleteManyArgs>(args?: SelectSubset<T, SessionPresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionPresences
     * const sessionPresence = await prisma.sessionPresence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionPresenceUpdateManyArgs>(args: SelectSubset<T, SessionPresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionPresences and returns the data updated in the database.
     * @param {SessionPresenceUpdateManyAndReturnArgs} args - Arguments to update many SessionPresences.
     * @example
     * // Update many SessionPresences
     * const sessionPresence = await prisma.sessionPresence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionPresences and only return the `userId`
     * const sessionPresenceWithUserIdOnly = await prisma.sessionPresence.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionPresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionPresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionPresence.
     * @param {SessionPresenceUpsertArgs} args - Arguments to update or create a SessionPresence.
     * @example
     * // Update or create a SessionPresence
     * const sessionPresence = await prisma.sessionPresence.upsert({
     *   create: {
     *     // ... data to create a SessionPresence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionPresence we want to update
     *   }
     * })
     */
    upsert<T extends SessionPresenceUpsertArgs>(args: SelectSubset<T, SessionPresenceUpsertArgs<ExtArgs>>): Prisma__SessionPresenceClient<$Result.GetResult<Prisma.$SessionPresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceCountArgs} args - Arguments to filter SessionPresences to count.
     * @example
     * // Count the number of SessionPresences
     * const count = await prisma.sessionPresence.count({
     *   where: {
     *     // ... the filter for the SessionPresences we want to count
     *   }
     * })
    **/
    count<T extends SessionPresenceCountArgs>(
      args?: Subset<T, SessionPresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionPresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionPresenceAggregateArgs>(args: Subset<T, SessionPresenceAggregateArgs>): Prisma.PrismaPromise<GetSessionPresenceAggregateType<T>>

    /**
     * Group by SessionPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPresenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionPresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionPresenceGroupByArgs['orderBy'] }
        : { orderBy?: SessionPresenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionPresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionPresence model
   */
  readonly fields: SessionPresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionPresence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionPresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends TerminalSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TerminalSessionDefaultArgs<ExtArgs>>): Prisma__TerminalSessionClient<$Result.GetResult<Prisma.$TerminalSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionPresence model
   */
  interface SessionPresenceFieldRefs {
    readonly userId: FieldRef<"SessionPresence", 'String'>
    readonly sessionId: FieldRef<"SessionPresence", 'String'>
    readonly status: FieldRef<"SessionPresence", 'PresenceStatus'>
    readonly lastSeen: FieldRef<"SessionPresence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionPresence findUnique
   */
  export type SessionPresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * Filter, which SessionPresence to fetch.
     */
    where: SessionPresenceWhereUniqueInput
  }

  /**
   * SessionPresence findUniqueOrThrow
   */
  export type SessionPresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * Filter, which SessionPresence to fetch.
     */
    where: SessionPresenceWhereUniqueInput
  }

  /**
   * SessionPresence findFirst
   */
  export type SessionPresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * Filter, which SessionPresence to fetch.
     */
    where?: SessionPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPresences to fetch.
     */
    orderBy?: SessionPresenceOrderByWithRelationInput | SessionPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionPresences.
     */
    cursor?: SessionPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionPresences.
     */
    distinct?: SessionPresenceScalarFieldEnum | SessionPresenceScalarFieldEnum[]
  }

  /**
   * SessionPresence findFirstOrThrow
   */
  export type SessionPresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * Filter, which SessionPresence to fetch.
     */
    where?: SessionPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPresences to fetch.
     */
    orderBy?: SessionPresenceOrderByWithRelationInput | SessionPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionPresences.
     */
    cursor?: SessionPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionPresences.
     */
    distinct?: SessionPresenceScalarFieldEnum | SessionPresenceScalarFieldEnum[]
  }

  /**
   * SessionPresence findMany
   */
  export type SessionPresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * Filter, which SessionPresences to fetch.
     */
    where?: SessionPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPresences to fetch.
     */
    orderBy?: SessionPresenceOrderByWithRelationInput | SessionPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionPresences.
     */
    cursor?: SessionPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPresences.
     */
    skip?: number
    distinct?: SessionPresenceScalarFieldEnum | SessionPresenceScalarFieldEnum[]
  }

  /**
   * SessionPresence create
   */
  export type SessionPresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionPresence.
     */
    data: XOR<SessionPresenceCreateInput, SessionPresenceUncheckedCreateInput>
  }

  /**
   * SessionPresence createMany
   */
  export type SessionPresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionPresences.
     */
    data: SessionPresenceCreateManyInput | SessionPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionPresence createManyAndReturn
   */
  export type SessionPresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * The data used to create many SessionPresences.
     */
    data: SessionPresenceCreateManyInput | SessionPresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionPresence update
   */
  export type SessionPresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionPresence.
     */
    data: XOR<SessionPresenceUpdateInput, SessionPresenceUncheckedUpdateInput>
    /**
     * Choose, which SessionPresence to update.
     */
    where: SessionPresenceWhereUniqueInput
  }

  /**
   * SessionPresence updateMany
   */
  export type SessionPresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionPresences.
     */
    data: XOR<SessionPresenceUpdateManyMutationInput, SessionPresenceUncheckedUpdateManyInput>
    /**
     * Filter which SessionPresences to update
     */
    where?: SessionPresenceWhereInput
    /**
     * Limit how many SessionPresences to update.
     */
    limit?: number
  }

  /**
   * SessionPresence updateManyAndReturn
   */
  export type SessionPresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * The data used to update SessionPresences.
     */
    data: XOR<SessionPresenceUpdateManyMutationInput, SessionPresenceUncheckedUpdateManyInput>
    /**
     * Filter which SessionPresences to update
     */
    where?: SessionPresenceWhereInput
    /**
     * Limit how many SessionPresences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionPresence upsert
   */
  export type SessionPresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionPresence to update in case it exists.
     */
    where: SessionPresenceWhereUniqueInput
    /**
     * In case the SessionPresence found by the `where` argument doesn't exist, create a new SessionPresence with this data.
     */
    create: XOR<SessionPresenceCreateInput, SessionPresenceUncheckedCreateInput>
    /**
     * In case the SessionPresence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionPresenceUpdateInput, SessionPresenceUncheckedUpdateInput>
  }

  /**
   * SessionPresence delete
   */
  export type SessionPresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
    /**
     * Filter which SessionPresence to delete.
     */
    where: SessionPresenceWhereUniqueInput
  }

  /**
   * SessionPresence deleteMany
   */
  export type SessionPresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionPresences to delete
     */
    where?: SessionPresenceWhereInput
    /**
     * Limit how many SessionPresences to delete.
     */
    limit?: number
  }

  /**
   * SessionPresence without action
   */
  export type SessionPresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPresence
     */
    select?: SessionPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPresence
     */
    omit?: SessionPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPresenceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    bio: 'bio',
    avatarImageUrl: 'avatarImageUrl',
    coverImageUrl: 'coverImageUrl',
    avatarImageUTKey: 'avatarImageUTKey',
    coverImageUTKey: 'coverImageUTKey',
    timezone: 'timezone',
    role: 'role',
    banReason: 'banReason',
    banExpires: 'banExpires',
    banned: 'banned',
    username: 'username',
    displayUsername: 'displayUsername'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const TerminalSessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    port: 'port',
    wsPath: 'wsPath',
    containerName: 'containerName',
    projectId: 'projectId',
    parentId: 'parentId',
    relationType: 'relationType'
  };

  export type TerminalSessionScalarFieldEnum = (typeof TerminalSessionScalarFieldEnum)[keyof typeof TerminalSessionScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    folder: 'folder',
    shared: 'shared',
    defaultCliId: 'defaultCliId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    agents: 'agents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    status: 'status',
    source: 'source',
    agentId: 'agentId',
    repository: 'repository',
    mountPoint: 'mountPoint',
    userId: 'userId',
    attachments: 'attachments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskExecutionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    status: 'status',
    agentId: 'agentId',
    jobId: 'jobId',
    containerName: 'containerName',
    completed: 'completed',
    needsInput: 'needsInput',
    inputRequest: 'inputRequest',
    result: 'result',
    errorMessage: 'errorMessage',
    logs: 'logs',
    memoryUsage: 'memoryUsage',
    tokenCount: 'tokenCount',
    context: 'context',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskExecutionScalarFieldEnum = (typeof TaskExecutionScalarFieldEnum)[keyof typeof TaskExecutionScalarFieldEnum]


  export const ApiClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiClientScalarFieldEnum = (typeof ApiClientScalarFieldEnum)[keyof typeof ApiClientScalarFieldEnum]


  export const ApiSecretScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyHash: 'keyHash',
    keyPrefix: 'keyPrefix',
    clientId: 'clientId',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt'
  };

  export type ApiSecretScalarFieldEnum = (typeof ApiSecretScalarFieldEnum)[keyof typeof ApiSecretScalarFieldEnum]


  export const ApiCallLogScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    endpoint: 'endpoint',
    method: 'method',
    statusCode: 'statusCode',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    requestBody: 'requestBody',
    responseMs: 'responseMs',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type ApiCallLogScalarFieldEnum = (typeof ApiCallLogScalarFieldEnum)[keyof typeof ApiCallLogScalarFieldEnum]


  export const SessionPresenceScalarFieldEnum: {
    userId: 'userId',
    sessionId: 'sessionId',
    status: 'status',
    lastSeen: 'lastSeen'
  };

  export type SessionPresenceScalarFieldEnum = (typeof SessionPresenceScalarFieldEnum)[keyof typeof SessionPresenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TerminalSessionStatus'
   */
  export type EnumTerminalSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TerminalSessionStatus'>
    


  /**
   * Reference to a field of type 'TerminalSessionStatus[]'
   */
  export type ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TerminalSessionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SessionRelationType'
   */
  export type EnumSessionRelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionRelationType'>
    


  /**
   * Reference to a field of type 'SessionRelationType[]'
   */
  export type ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionRelationType[]'>
    


  /**
   * Reference to a field of type 'AgentProvider'
   */
  export type EnumAgentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentProvider'>
    


  /**
   * Reference to a field of type 'AgentProvider[]'
   */
  export type ListEnumAgentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentProvider[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TaskSource'
   */
  export type EnumTaskSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskSource'>
    


  /**
   * Reference to a field of type 'TaskSource[]'
   */
  export type ListEnumTaskSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskSource[]'>
    


  /**
   * Reference to a field of type 'TaskExecutionStatus'
   */
  export type EnumTaskExecutionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskExecutionStatus'>
    


  /**
   * Reference to a field of type 'TaskExecutionStatus[]'
   */
  export type ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskExecutionStatus[]'>
    


  /**
   * Reference to a field of type 'PresenceStatus'
   */
  export type EnumPresenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresenceStatus'>
    


  /**
   * Reference to a field of type 'PresenceStatus[]'
   */
  export type ListEnumPresenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresenceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarImageUrl?: StringNullableFilter<"User"> | string | null
    coverImageUrl?: StringNullableFilter<"User"> | string | null
    avatarImageUTKey?: StringNullableFilter<"User"> | string | null
    coverImageUTKey?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    banned?: BoolFilter<"User"> | boolean
    username?: StringNullableFilter<"User"> | string | null
    displayUsername?: StringNullableFilter<"User"> | string | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    terminalSessions?: TerminalSessionListRelationFilter
    tasks?: TaskListRelationFilter
    apiClients?: ApiClientListRelationFilter
    projects?: ProjectListRelationFilter
    sessionPresence?: XOR<SessionPresenceNullableScalarRelationFilter, SessionPresenceWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarImageUrl?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    avatarImageUTKey?: SortOrderInput | SortOrder
    coverImageUTKey?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    role?: SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    banned?: SortOrder
    username?: SortOrderInput | SortOrder
    displayUsername?: SortOrderInput | SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    terminalSessions?: TerminalSessionOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    apiClients?: ApiClientOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    sessionPresence?: SessionPresenceOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarImageUrl?: StringNullableFilter<"User"> | string | null
    coverImageUrl?: StringNullableFilter<"User"> | string | null
    avatarImageUTKey?: StringNullableFilter<"User"> | string | null
    coverImageUTKey?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    banned?: BoolFilter<"User"> | boolean
    displayUsername?: StringNullableFilter<"User"> | string | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    terminalSessions?: TerminalSessionListRelationFilter
    tasks?: TaskListRelationFilter
    apiClients?: ApiClientListRelationFilter
    projects?: ProjectListRelationFilter
    sessionPresence?: XOR<SessionPresenceNullableScalarRelationFilter, SessionPresenceWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarImageUrl?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    avatarImageUTKey?: SortOrderInput | SortOrder
    coverImageUTKey?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    role?: SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    banned?: SortOrder
    username?: SortOrderInput | SortOrder
    displayUsername?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarImageUTKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverImageUTKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    banned?: BoolWithAggregatesFilter<"User"> | boolean
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type TerminalSessionWhereInput = {
    AND?: TerminalSessionWhereInput | TerminalSessionWhereInput[]
    OR?: TerminalSessionWhereInput[]
    NOT?: TerminalSessionWhereInput | TerminalSessionWhereInput[]
    id?: StringFilter<"TerminalSession"> | string
    name?: StringFilter<"TerminalSession"> | string
    userId?: StringFilter<"TerminalSession"> | string
    status?: EnumTerminalSessionStatusFilter<"TerminalSession"> | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFilter<"TerminalSession"> | Date | string
    updatedAt?: DateTimeFilter<"TerminalSession"> | Date | string
    port?: IntNullableFilter<"TerminalSession"> | number | null
    wsPath?: StringNullableFilter<"TerminalSession"> | string | null
    containerName?: StringNullableFilter<"TerminalSession"> | string | null
    projectId?: StringNullableFilter<"TerminalSession"> | string | null
    parentId?: StringNullableFilter<"TerminalSession"> | string | null
    relationType?: EnumSessionRelationTypeNullableFilter<"TerminalSession"> | $Enums.SessionRelationType | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    parent?: XOR<TerminalSessionNullableScalarRelationFilter, TerminalSessionWhereInput> | null
    children?: TerminalSessionListRelationFilter
    presences?: SessionPresenceListRelationFilter
  }

  export type TerminalSessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    port?: SortOrderInput | SortOrder
    wsPath?: SortOrderInput | SortOrder
    containerName?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    relationType?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    parent?: TerminalSessionOrderByWithRelationInput
    children?: TerminalSessionOrderByRelationAggregateInput
    presences?: SessionPresenceOrderByRelationAggregateInput
  }

  export type TerminalSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TerminalSessionWhereInput | TerminalSessionWhereInput[]
    OR?: TerminalSessionWhereInput[]
    NOT?: TerminalSessionWhereInput | TerminalSessionWhereInput[]
    name?: StringFilter<"TerminalSession"> | string
    userId?: StringFilter<"TerminalSession"> | string
    status?: EnumTerminalSessionStatusFilter<"TerminalSession"> | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFilter<"TerminalSession"> | Date | string
    updatedAt?: DateTimeFilter<"TerminalSession"> | Date | string
    port?: IntNullableFilter<"TerminalSession"> | number | null
    wsPath?: StringNullableFilter<"TerminalSession"> | string | null
    containerName?: StringNullableFilter<"TerminalSession"> | string | null
    projectId?: StringNullableFilter<"TerminalSession"> | string | null
    parentId?: StringNullableFilter<"TerminalSession"> | string | null
    relationType?: EnumSessionRelationTypeNullableFilter<"TerminalSession"> | $Enums.SessionRelationType | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    parent?: XOR<TerminalSessionNullableScalarRelationFilter, TerminalSessionWhereInput> | null
    children?: TerminalSessionListRelationFilter
    presences?: SessionPresenceListRelationFilter
  }, "id">

  export type TerminalSessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    port?: SortOrderInput | SortOrder
    wsPath?: SortOrderInput | SortOrder
    containerName?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    relationType?: SortOrderInput | SortOrder
    _count?: TerminalSessionCountOrderByAggregateInput
    _avg?: TerminalSessionAvgOrderByAggregateInput
    _max?: TerminalSessionMaxOrderByAggregateInput
    _min?: TerminalSessionMinOrderByAggregateInput
    _sum?: TerminalSessionSumOrderByAggregateInput
  }

  export type TerminalSessionScalarWhereWithAggregatesInput = {
    AND?: TerminalSessionScalarWhereWithAggregatesInput | TerminalSessionScalarWhereWithAggregatesInput[]
    OR?: TerminalSessionScalarWhereWithAggregatesInput[]
    NOT?: TerminalSessionScalarWhereWithAggregatesInput | TerminalSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TerminalSession"> | string
    name?: StringWithAggregatesFilter<"TerminalSession"> | string
    userId?: StringWithAggregatesFilter<"TerminalSession"> | string
    status?: EnumTerminalSessionStatusWithAggregatesFilter<"TerminalSession"> | $Enums.TerminalSessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"TerminalSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TerminalSession"> | Date | string
    port?: IntNullableWithAggregatesFilter<"TerminalSession"> | number | null
    wsPath?: StringNullableWithAggregatesFilter<"TerminalSession"> | string | null
    containerName?: StringNullableWithAggregatesFilter<"TerminalSession"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"TerminalSession"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"TerminalSession"> | string | null
    relationType?: EnumSessionRelationTypeNullableWithAggregatesFilter<"TerminalSession"> | $Enums.SessionRelationType | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    folder?: StringFilter<"Project"> | string
    shared?: BoolFilter<"Project"> | boolean
    defaultCliId?: EnumAgentProviderNullableFilter<"Project"> | $Enums.AgentProvider | null
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: TerminalSessionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    folder?: SortOrder
    shared?: SortOrder
    defaultCliId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sessions?: TerminalSessionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    folder?: StringFilter<"Project"> | string
    shared?: BoolFilter<"Project"> | boolean
    defaultCliId?: EnumAgentProviderNullableFilter<"Project"> | $Enums.AgentProvider | null
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: TerminalSessionListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    folder?: SortOrder
    shared?: SortOrder
    defaultCliId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    folder?: StringWithAggregatesFilter<"Project"> | string
    shared?: BoolWithAggregatesFilter<"Project"> | boolean
    defaultCliId?: EnumAgentProviderNullableWithAggregatesFilter<"Project"> | $Enums.AgentProvider | null
    userId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    agents?: JsonNullableFilter<"UserPreferences">
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    agents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    agents?: JsonNullableFilter<"UserPreferences">
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    agents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    agents?: JsonNullableWithAggregatesFilter<"UserPreferences">
    createdAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringNullableFilter<"Task"> | string | null
    body?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceFilter<"Task"> | $Enums.TaskSource
    agentId?: EnumAgentProviderNullableFilter<"Task"> | $Enums.AgentProvider | null
    repository?: StringNullableFilter<"Task"> | string | null
    mountPoint?: StringNullableFilter<"Task"> | string | null
    userId?: StringFilter<"Task"> | string
    attachments?: JsonNullableFilter<"Task">
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    executions?: TaskExecutionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrder
    status?: SortOrder
    source?: SortOrder
    agentId?: SortOrderInput | SortOrder
    repository?: SortOrderInput | SortOrder
    mountPoint?: SortOrderInput | SortOrder
    userId?: SortOrder
    attachments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    executions?: TaskExecutionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringNullableFilter<"Task"> | string | null
    body?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceFilter<"Task"> | $Enums.TaskSource
    agentId?: EnumAgentProviderNullableFilter<"Task"> | $Enums.AgentProvider | null
    repository?: StringNullableFilter<"Task"> | string | null
    mountPoint?: StringNullableFilter<"Task"> | string | null
    userId?: StringFilter<"Task"> | string
    attachments?: JsonNullableFilter<"Task">
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    executions?: TaskExecutionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrder
    status?: SortOrder
    source?: SortOrder
    agentId?: SortOrderInput | SortOrder
    repository?: SortOrderInput | SortOrder
    mountPoint?: SortOrderInput | SortOrder
    userId?: SortOrder
    attachments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringNullableWithAggregatesFilter<"Task"> | string | null
    body?: StringWithAggregatesFilter<"Task"> | string
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceWithAggregatesFilter<"Task"> | $Enums.TaskSource
    agentId?: EnumAgentProviderNullableWithAggregatesFilter<"Task"> | $Enums.AgentProvider | null
    repository?: StringNullableWithAggregatesFilter<"Task"> | string | null
    mountPoint?: StringNullableWithAggregatesFilter<"Task"> | string | null
    userId?: StringWithAggregatesFilter<"Task"> | string
    attachments?: JsonNullableWithAggregatesFilter<"Task">
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskExecutionWhereInput = {
    AND?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    OR?: TaskExecutionWhereInput[]
    NOT?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    id?: StringFilter<"TaskExecution"> | string
    taskId?: StringFilter<"TaskExecution"> | string
    status?: EnumTaskExecutionStatusFilter<"TaskExecution"> | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFilter<"TaskExecution"> | $Enums.AgentProvider
    jobId?: StringNullableFilter<"TaskExecution"> | string | null
    containerName?: StringNullableFilter<"TaskExecution"> | string | null
    completed?: BoolFilter<"TaskExecution"> | boolean
    needsInput?: BoolFilter<"TaskExecution"> | boolean
    inputRequest?: StringNullableFilter<"TaskExecution"> | string | null
    result?: StringNullableFilter<"TaskExecution"> | string | null
    errorMessage?: StringNullableFilter<"TaskExecution"> | string | null
    logs?: StringNullableFilter<"TaskExecution"> | string | null
    memoryUsage?: IntNullableFilter<"TaskExecution"> | number | null
    tokenCount?: IntNullableFilter<"TaskExecution"> | number | null
    context?: JsonNullableFilter<"TaskExecution">
    startedAt?: DateTimeNullableFilter<"TaskExecution"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"TaskExecution"> | Date | string | null
    createdAt?: DateTimeFilter<"TaskExecution"> | Date | string
    updatedAt?: DateTimeFilter<"TaskExecution"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskExecutionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    containerName?: SortOrderInput | SortOrder
    completed?: SortOrder
    needsInput?: SortOrder
    inputRequest?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    logs?: SortOrderInput | SortOrder
    memoryUsage?: SortOrderInput | SortOrder
    tokenCount?: SortOrderInput | SortOrder
    context?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    OR?: TaskExecutionWhereInput[]
    NOT?: TaskExecutionWhereInput | TaskExecutionWhereInput[]
    taskId?: StringFilter<"TaskExecution"> | string
    status?: EnumTaskExecutionStatusFilter<"TaskExecution"> | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFilter<"TaskExecution"> | $Enums.AgentProvider
    jobId?: StringNullableFilter<"TaskExecution"> | string | null
    containerName?: StringNullableFilter<"TaskExecution"> | string | null
    completed?: BoolFilter<"TaskExecution"> | boolean
    needsInput?: BoolFilter<"TaskExecution"> | boolean
    inputRequest?: StringNullableFilter<"TaskExecution"> | string | null
    result?: StringNullableFilter<"TaskExecution"> | string | null
    errorMessage?: StringNullableFilter<"TaskExecution"> | string | null
    logs?: StringNullableFilter<"TaskExecution"> | string | null
    memoryUsage?: IntNullableFilter<"TaskExecution"> | number | null
    tokenCount?: IntNullableFilter<"TaskExecution"> | number | null
    context?: JsonNullableFilter<"TaskExecution">
    startedAt?: DateTimeNullableFilter<"TaskExecution"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"TaskExecution"> | Date | string | null
    createdAt?: DateTimeFilter<"TaskExecution"> | Date | string
    updatedAt?: DateTimeFilter<"TaskExecution"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    containerName?: SortOrderInput | SortOrder
    completed?: SortOrder
    needsInput?: SortOrder
    inputRequest?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    logs?: SortOrderInput | SortOrder
    memoryUsage?: SortOrderInput | SortOrder
    tokenCount?: SortOrderInput | SortOrder
    context?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskExecutionCountOrderByAggregateInput
    _avg?: TaskExecutionAvgOrderByAggregateInput
    _max?: TaskExecutionMaxOrderByAggregateInput
    _min?: TaskExecutionMinOrderByAggregateInput
    _sum?: TaskExecutionSumOrderByAggregateInput
  }

  export type TaskExecutionScalarWhereWithAggregatesInput = {
    AND?: TaskExecutionScalarWhereWithAggregatesInput | TaskExecutionScalarWhereWithAggregatesInput[]
    OR?: TaskExecutionScalarWhereWithAggregatesInput[]
    NOT?: TaskExecutionScalarWhereWithAggregatesInput | TaskExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskExecution"> | string
    taskId?: StringWithAggregatesFilter<"TaskExecution"> | string
    status?: EnumTaskExecutionStatusWithAggregatesFilter<"TaskExecution"> | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderWithAggregatesFilter<"TaskExecution"> | $Enums.AgentProvider
    jobId?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    containerName?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    completed?: BoolWithAggregatesFilter<"TaskExecution"> | boolean
    needsInput?: BoolWithAggregatesFilter<"TaskExecution"> | boolean
    inputRequest?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    result?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    logs?: StringNullableWithAggregatesFilter<"TaskExecution"> | string | null
    memoryUsage?: IntNullableWithAggregatesFilter<"TaskExecution"> | number | null
    tokenCount?: IntNullableWithAggregatesFilter<"TaskExecution"> | number | null
    context?: JsonNullableWithAggregatesFilter<"TaskExecution">
    startedAt?: DateTimeNullableWithAggregatesFilter<"TaskExecution"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"TaskExecution"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskExecution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaskExecution"> | Date | string
  }

  export type ApiClientWhereInput = {
    AND?: ApiClientWhereInput | ApiClientWhereInput[]
    OR?: ApiClientWhereInput[]
    NOT?: ApiClientWhereInput | ApiClientWhereInput[]
    id?: StringFilter<"ApiClient"> | string
    name?: StringFilter<"ApiClient"> | string
    description?: StringNullableFilter<"ApiClient"> | string | null
    userId?: StringFilter<"ApiClient"> | string
    createdAt?: DateTimeFilter<"ApiClient"> | Date | string
    updatedAt?: DateTimeFilter<"ApiClient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    secrets?: ApiSecretListRelationFilter
    callLogs?: ApiCallLogListRelationFilter
  }

  export type ApiClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    secrets?: ApiSecretOrderByRelationAggregateInput
    callLogs?: ApiCallLogOrderByRelationAggregateInput
  }

  export type ApiClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiClientWhereInput | ApiClientWhereInput[]
    OR?: ApiClientWhereInput[]
    NOT?: ApiClientWhereInput | ApiClientWhereInput[]
    name?: StringFilter<"ApiClient"> | string
    description?: StringNullableFilter<"ApiClient"> | string | null
    userId?: StringFilter<"ApiClient"> | string
    createdAt?: DateTimeFilter<"ApiClient"> | Date | string
    updatedAt?: DateTimeFilter<"ApiClient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    secrets?: ApiSecretListRelationFilter
    callLogs?: ApiCallLogListRelationFilter
  }, "id">

  export type ApiClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiClientCountOrderByAggregateInput
    _max?: ApiClientMaxOrderByAggregateInput
    _min?: ApiClientMinOrderByAggregateInput
  }

  export type ApiClientScalarWhereWithAggregatesInput = {
    AND?: ApiClientScalarWhereWithAggregatesInput | ApiClientScalarWhereWithAggregatesInput[]
    OR?: ApiClientScalarWhereWithAggregatesInput[]
    NOT?: ApiClientScalarWhereWithAggregatesInput | ApiClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiClient"> | string
    name?: StringWithAggregatesFilter<"ApiClient"> | string
    description?: StringNullableWithAggregatesFilter<"ApiClient"> | string | null
    userId?: StringWithAggregatesFilter<"ApiClient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiClient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiClient"> | Date | string
  }

  export type ApiSecretWhereInput = {
    AND?: ApiSecretWhereInput | ApiSecretWhereInput[]
    OR?: ApiSecretWhereInput[]
    NOT?: ApiSecretWhereInput | ApiSecretWhereInput[]
    id?: StringFilter<"ApiSecret"> | string
    name?: StringFilter<"ApiSecret"> | string
    keyHash?: StringFilter<"ApiSecret"> | string
    keyPrefix?: StringFilter<"ApiSecret"> | string
    clientId?: StringFilter<"ApiSecret"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiSecret"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiSecret"> | Date | string
    client?: XOR<ApiClientScalarRelationFilter, ApiClientWhereInput>
  }

  export type ApiSecretOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    clientId?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ApiClientOrderByWithRelationInput
  }

  export type ApiSecretWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiSecretWhereInput | ApiSecretWhereInput[]
    OR?: ApiSecretWhereInput[]
    NOT?: ApiSecretWhereInput | ApiSecretWhereInput[]
    name?: StringFilter<"ApiSecret"> | string
    keyHash?: StringFilter<"ApiSecret"> | string
    keyPrefix?: StringFilter<"ApiSecret"> | string
    clientId?: StringFilter<"ApiSecret"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiSecret"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiSecret"> | Date | string
    client?: XOR<ApiClientScalarRelationFilter, ApiClientWhereInput>
  }, "id">

  export type ApiSecretOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    clientId?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiSecretCountOrderByAggregateInput
    _max?: ApiSecretMaxOrderByAggregateInput
    _min?: ApiSecretMinOrderByAggregateInput
  }

  export type ApiSecretScalarWhereWithAggregatesInput = {
    AND?: ApiSecretScalarWhereWithAggregatesInput | ApiSecretScalarWhereWithAggregatesInput[]
    OR?: ApiSecretScalarWhereWithAggregatesInput[]
    NOT?: ApiSecretScalarWhereWithAggregatesInput | ApiSecretScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiSecret"> | string
    name?: StringWithAggregatesFilter<"ApiSecret"> | string
    keyHash?: StringWithAggregatesFilter<"ApiSecret"> | string
    keyPrefix?: StringWithAggregatesFilter<"ApiSecret"> | string
    clientId?: StringWithAggregatesFilter<"ApiSecret"> | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiSecret"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiSecret"> | Date | string
  }

  export type ApiCallLogWhereInput = {
    AND?: ApiCallLogWhereInput | ApiCallLogWhereInput[]
    OR?: ApiCallLogWhereInput[]
    NOT?: ApiCallLogWhereInput | ApiCallLogWhereInput[]
    id?: StringFilter<"ApiCallLog"> | string
    clientId?: StringFilter<"ApiCallLog"> | string
    endpoint?: StringFilter<"ApiCallLog"> | string
    method?: StringFilter<"ApiCallLog"> | string
    statusCode?: IntFilter<"ApiCallLog"> | number
    ipAddress?: StringNullableFilter<"ApiCallLog"> | string | null
    userAgent?: StringNullableFilter<"ApiCallLog"> | string | null
    requestBody?: StringNullableFilter<"ApiCallLog"> | string | null
    responseMs?: IntNullableFilter<"ApiCallLog"> | number | null
    errorMessage?: StringNullableFilter<"ApiCallLog"> | string | null
    createdAt?: DateTimeFilter<"ApiCallLog"> | Date | string
    client?: XOR<ApiClientScalarRelationFilter, ApiClientWhereInput>
  }

  export type ApiCallLogOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseMs?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ApiClientOrderByWithRelationInput
  }

  export type ApiCallLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiCallLogWhereInput | ApiCallLogWhereInput[]
    OR?: ApiCallLogWhereInput[]
    NOT?: ApiCallLogWhereInput | ApiCallLogWhereInput[]
    clientId?: StringFilter<"ApiCallLog"> | string
    endpoint?: StringFilter<"ApiCallLog"> | string
    method?: StringFilter<"ApiCallLog"> | string
    statusCode?: IntFilter<"ApiCallLog"> | number
    ipAddress?: StringNullableFilter<"ApiCallLog"> | string | null
    userAgent?: StringNullableFilter<"ApiCallLog"> | string | null
    requestBody?: StringNullableFilter<"ApiCallLog"> | string | null
    responseMs?: IntNullableFilter<"ApiCallLog"> | number | null
    errorMessage?: StringNullableFilter<"ApiCallLog"> | string | null
    createdAt?: DateTimeFilter<"ApiCallLog"> | Date | string
    client?: XOR<ApiClientScalarRelationFilter, ApiClientWhereInput>
  }, "id">

  export type ApiCallLogOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseMs?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiCallLogCountOrderByAggregateInput
    _avg?: ApiCallLogAvgOrderByAggregateInput
    _max?: ApiCallLogMaxOrderByAggregateInput
    _min?: ApiCallLogMinOrderByAggregateInput
    _sum?: ApiCallLogSumOrderByAggregateInput
  }

  export type ApiCallLogScalarWhereWithAggregatesInput = {
    AND?: ApiCallLogScalarWhereWithAggregatesInput | ApiCallLogScalarWhereWithAggregatesInput[]
    OR?: ApiCallLogScalarWhereWithAggregatesInput[]
    NOT?: ApiCallLogScalarWhereWithAggregatesInput | ApiCallLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiCallLog"> | string
    clientId?: StringWithAggregatesFilter<"ApiCallLog"> | string
    endpoint?: StringWithAggregatesFilter<"ApiCallLog"> | string
    method?: StringWithAggregatesFilter<"ApiCallLog"> | string
    statusCode?: IntWithAggregatesFilter<"ApiCallLog"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"ApiCallLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ApiCallLog"> | string | null
    requestBody?: StringNullableWithAggregatesFilter<"ApiCallLog"> | string | null
    responseMs?: IntNullableWithAggregatesFilter<"ApiCallLog"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"ApiCallLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiCallLog"> | Date | string
  }

  export type SessionPresenceWhereInput = {
    AND?: SessionPresenceWhereInput | SessionPresenceWhereInput[]
    OR?: SessionPresenceWhereInput[]
    NOT?: SessionPresenceWhereInput | SessionPresenceWhereInput[]
    userId?: StringFilter<"SessionPresence"> | string
    sessionId?: StringFilter<"SessionPresence"> | string
    status?: EnumPresenceStatusFilter<"SessionPresence"> | $Enums.PresenceStatus
    lastSeen?: DateTimeFilter<"SessionPresence"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<TerminalSessionScalarRelationFilter, TerminalSessionWhereInput>
  }

  export type SessionPresenceOrderByWithRelationInput = {
    userId?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    user?: UserOrderByWithRelationInput
    session?: TerminalSessionOrderByWithRelationInput
  }

  export type SessionPresenceWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: SessionPresenceWhereInput | SessionPresenceWhereInput[]
    OR?: SessionPresenceWhereInput[]
    NOT?: SessionPresenceWhereInput | SessionPresenceWhereInput[]
    sessionId?: StringFilter<"SessionPresence"> | string
    status?: EnumPresenceStatusFilter<"SessionPresence"> | $Enums.PresenceStatus
    lastSeen?: DateTimeFilter<"SessionPresence"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<TerminalSessionScalarRelationFilter, TerminalSessionWhereInput>
  }, "userId">

  export type SessionPresenceOrderByWithAggregationInput = {
    userId?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    _count?: SessionPresenceCountOrderByAggregateInput
    _max?: SessionPresenceMaxOrderByAggregateInput
    _min?: SessionPresenceMinOrderByAggregateInput
  }

  export type SessionPresenceScalarWhereWithAggregatesInput = {
    AND?: SessionPresenceScalarWhereWithAggregatesInput | SessionPresenceScalarWhereWithAggregatesInput[]
    OR?: SessionPresenceScalarWhereWithAggregatesInput[]
    NOT?: SessionPresenceScalarWhereWithAggregatesInput | SessionPresenceScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"SessionPresence"> | string
    sessionId?: StringWithAggregatesFilter<"SessionPresence"> | string
    status?: EnumPresenceStatusWithAggregatesFilter<"SessionPresence"> | $Enums.PresenceStatus
    lastSeen?: DateTimeWithAggregatesFilter<"SessionPresence"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TerminalSessionCreateInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    relationType?: $Enums.SessionRelationType | null
    user: UserCreateNestedOneWithoutTerminalSessionsInput
    project?: ProjectCreateNestedOneWithoutSessionsInput
    parent?: TerminalSessionCreateNestedOneWithoutChildrenInput
    children?: TerminalSessionCreateNestedManyWithoutParentInput
    presences?: SessionPresenceCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedCreateNestedManyWithoutParentInput
    presences?: SessionPresenceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    user?: UserUpdateOneRequiredWithoutTerminalSessionsNestedInput
    project?: ProjectUpdateOneWithoutSessionsNestedInput
    parent?: TerminalSessionUpdateOneWithoutChildrenNestedInput
    children?: TerminalSessionUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionCreateManyInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
  }

  export type TerminalSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
  }

  export type TerminalSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    sessions?: TerminalSessionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: TerminalSessionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    sessions?: TerminalSessionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TerminalSessionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    executions?: TaskExecutionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    userId: string
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: TaskExecutionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    executions?: TaskExecutionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    userId: string
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionCreateInput = {
    id?: string
    status?: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId?: string | null
    containerName?: string | null
    completed?: boolean
    needsInput?: boolean
    inputRequest?: string | null
    result?: string | null
    errorMessage?: string | null
    logs?: string | null
    memoryUsage?: number | null
    tokenCount?: number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutExecutionsInput
  }

  export type TaskExecutionUncheckedCreateInput = {
    id?: string
    taskId: string
    status?: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId?: string | null
    containerName?: string | null
    completed?: boolean
    needsInput?: boolean
    inputRequest?: string | null
    result?: string | null
    errorMessage?: string | null
    logs?: string | null
    memoryUsage?: number | null
    tokenCount?: number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type TaskExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionCreateManyInput = {
    id?: string
    taskId: string
    status?: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId?: string | null
    containerName?: string | null
    completed?: boolean
    needsInput?: boolean
    inputRequest?: string | null
    result?: string | null
    errorMessage?: string | null
    logs?: string | null
    memoryUsage?: number | null
    tokenCount?: number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApiClientsInput
    secrets?: ApiSecretCreateNestedManyWithoutClientInput
    callLogs?: ApiCallLogCreateNestedManyWithoutClientInput
  }

  export type ApiClientUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    secrets?: ApiSecretUncheckedCreateNestedManyWithoutClientInput
    callLogs?: ApiCallLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ApiClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiClientsNestedInput
    secrets?: ApiSecretUpdateManyWithoutClientNestedInput
    callLogs?: ApiCallLogUpdateManyWithoutClientNestedInput
  }

  export type ApiClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secrets?: ApiSecretUncheckedUpdateManyWithoutClientNestedInput
    callLogs?: ApiCallLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ApiClientCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiSecretCreateInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    client: ApiClientCreateNestedOneWithoutSecretsInput
  }

  export type ApiSecretUncheckedCreateInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    clientId: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiSecretUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ApiClientUpdateOneRequiredWithoutSecretsNestedInput
  }

  export type ApiSecretUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiSecretCreateManyInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    clientId: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiSecretUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiSecretUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallLogCreateInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    requestBody?: string | null
    responseMs?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
    client: ApiClientCreateNestedOneWithoutCallLogsInput
  }

  export type ApiCallLogUncheckedCreateInput = {
    id?: string
    clientId: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    requestBody?: string | null
    responseMs?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ApiCallLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ApiClientUpdateOneRequiredWithoutCallLogsNestedInput
  }

  export type ApiCallLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallLogCreateManyInput = {
    id?: string
    clientId: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    requestBody?: string | null
    responseMs?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ApiCallLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionPresenceCreateInput = {
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
    user: UserCreateNestedOneWithoutSessionPresenceInput
    session: TerminalSessionCreateNestedOneWithoutPresencesInput
  }

  export type SessionPresenceUncheckedCreateInput = {
    userId: string
    sessionId: string
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
  }

  export type SessionPresenceUpdateInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionPresenceNestedInput
    session?: TerminalSessionUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type SessionPresenceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionPresenceCreateManyInput = {
    userId: string
    sessionId: string
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
  }

  export type SessionPresenceUpdateManyMutationInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionPresenceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type TerminalSessionListRelationFilter = {
    every?: TerminalSessionWhereInput
    some?: TerminalSessionWhereInput
    none?: TerminalSessionWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ApiClientListRelationFilter = {
    every?: ApiClientWhereInput
    some?: ApiClientWhereInput
    none?: ApiClientWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SessionPresenceNullableScalarRelationFilter = {
    is?: SessionPresenceWhereInput | null
    isNot?: SessionPresenceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TerminalSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    avatarImageUTKey?: SortOrder
    coverImageUTKey?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    avatarImageUTKey?: SortOrder
    coverImageUTKey?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    avatarImageUTKey?: SortOrder
    coverImageUTKey?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTerminalSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TerminalSessionStatus | EnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTerminalSessionStatusFilter<$PrismaModel> | $Enums.TerminalSessionStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSessionRelationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionRelationType | EnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSessionRelationTypeNullableFilter<$PrismaModel> | $Enums.SessionRelationType | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type TerminalSessionNullableScalarRelationFilter = {
    is?: TerminalSessionWhereInput | null
    isNot?: TerminalSessionWhereInput | null
  }

  export type SessionPresenceListRelationFilter = {
    every?: SessionPresenceWhereInput
    some?: SessionPresenceWhereInput
    none?: SessionPresenceWhereInput
  }

  export type SessionPresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TerminalSessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    port?: SortOrder
    wsPath?: SortOrder
    containerName?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrder
    relationType?: SortOrder
  }

  export type TerminalSessionAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type TerminalSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    port?: SortOrder
    wsPath?: SortOrder
    containerName?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrder
    relationType?: SortOrder
  }

  export type TerminalSessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    port?: SortOrder
    wsPath?: SortOrder
    containerName?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrder
    relationType?: SortOrder
  }

  export type TerminalSessionSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type EnumTerminalSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TerminalSessionStatus | EnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTerminalSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TerminalSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTerminalSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumTerminalSessionStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSessionRelationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionRelationType | EnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSessionRelationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SessionRelationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSessionRelationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSessionRelationTypeNullableFilter<$PrismaModel>
  }

  export type EnumAgentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentProviderNullableFilter<$PrismaModel> | $Enums.AgentProvider | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    folder?: SortOrder
    shared?: SortOrder
    defaultCliId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    folder?: SortOrder
    shared?: SortOrder
    defaultCliId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    folder?: SortOrder
    shared?: SortOrder
    defaultCliId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAgentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.AgentProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAgentProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumAgentProviderNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceFilter<$PrismaModel> | $Enums.TaskSource
  }

  export type TaskExecutionListRelationFilter = {
    every?: TaskExecutionWhereInput
    some?: TaskExecutionWhereInput
    none?: TaskExecutionWhereInput
  }

  export type TaskExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    source?: SortOrder
    agentId?: SortOrder
    repository?: SortOrder
    mountPoint?: SortOrder
    userId?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    source?: SortOrder
    agentId?: SortOrder
    repository?: SortOrder
    mountPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    source?: SortOrder
    agentId?: SortOrder
    repository?: SortOrder
    mountPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceWithAggregatesFilter<$PrismaModel> | $Enums.TaskSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskSourceFilter<$PrismaModel>
    _max?: NestedEnumTaskSourceFilter<$PrismaModel>
  }

  export type EnumTaskExecutionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskExecutionStatus | EnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskExecutionStatusFilter<$PrismaModel> | $Enums.TaskExecutionStatus
  }

  export type EnumAgentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentProviderFilter<$PrismaModel> | $Enums.AgentProvider
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    jobId?: SortOrder
    containerName?: SortOrder
    completed?: SortOrder
    needsInput?: SortOrder
    inputRequest?: SortOrder
    result?: SortOrder
    errorMessage?: SortOrder
    logs?: SortOrder
    memoryUsage?: SortOrder
    tokenCount?: SortOrder
    context?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskExecutionAvgOrderByAggregateInput = {
    memoryUsage?: SortOrder
    tokenCount?: SortOrder
  }

  export type TaskExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    jobId?: SortOrder
    containerName?: SortOrder
    completed?: SortOrder
    needsInput?: SortOrder
    inputRequest?: SortOrder
    result?: SortOrder
    errorMessage?: SortOrder
    logs?: SortOrder
    memoryUsage?: SortOrder
    tokenCount?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    jobId?: SortOrder
    containerName?: SortOrder
    completed?: SortOrder
    needsInput?: SortOrder
    inputRequest?: SortOrder
    result?: SortOrder
    errorMessage?: SortOrder
    logs?: SortOrder
    memoryUsage?: SortOrder
    tokenCount?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskExecutionSumOrderByAggregateInput = {
    memoryUsage?: SortOrder
    tokenCount?: SortOrder
  }

  export type EnumTaskExecutionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskExecutionStatus | EnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskExecutionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskExecutionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskExecutionStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskExecutionStatusFilter<$PrismaModel>
  }

  export type EnumAgentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentProviderWithAggregatesFilter<$PrismaModel> | $Enums.AgentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentProviderFilter<$PrismaModel>
    _max?: NestedEnumAgentProviderFilter<$PrismaModel>
  }

  export type ApiSecretListRelationFilter = {
    every?: ApiSecretWhereInput
    some?: ApiSecretWhereInput
    none?: ApiSecretWhereInput
  }

  export type ApiCallLogListRelationFilter = {
    every?: ApiCallLogWhereInput
    some?: ApiCallLogWhereInput
    none?: ApiCallLogWhereInput
  }

  export type ApiSecretOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiCallLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiClientScalarRelationFilter = {
    is?: ApiClientWhereInput
    isNot?: ApiClientWhereInput
  }

  export type ApiSecretCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    clientId?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiSecretMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    clientId?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiSecretMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    clientId?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApiCallLogCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    requestBody?: SortOrder
    responseMs?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiCallLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseMs?: SortOrder
  }

  export type ApiCallLogMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    requestBody?: SortOrder
    responseMs?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiCallLogMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    requestBody?: SortOrder
    responseMs?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiCallLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseMs?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPresenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusFilter<$PrismaModel> | $Enums.PresenceStatus
  }

  export type TerminalSessionScalarRelationFilter = {
    is?: TerminalSessionWhereInput
    isNot?: TerminalSessionWhereInput
  }

  export type SessionPresenceCountOrderByAggregateInput = {
    userId?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
  }

  export type SessionPresenceMaxOrderByAggregateInput = {
    userId?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
  }

  export type SessionPresenceMinOrderByAggregateInput = {
    userId?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
  }

  export type EnumPresenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.PresenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceStatusFilter<$PrismaModel>
    _max?: NestedEnumPresenceStatusFilter<$PrismaModel>
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TerminalSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<TerminalSessionCreateWithoutUserInput, TerminalSessionUncheckedCreateWithoutUserInput> | TerminalSessionCreateWithoutUserInput[] | TerminalSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutUserInput | TerminalSessionCreateOrConnectWithoutUserInput[]
    createMany?: TerminalSessionCreateManyUserInputEnvelope
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ApiClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiClientCreateWithoutUserInput, ApiClientUncheckedCreateWithoutUserInput> | ApiClientCreateWithoutUserInput[] | ApiClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiClientCreateOrConnectWithoutUserInput | ApiClientCreateOrConnectWithoutUserInput[]
    createMany?: ApiClientCreateManyUserInputEnvelope
    connect?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionPresenceCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionPresenceCreateWithoutUserInput, SessionPresenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutUserInput
    connect?: SessionPresenceWhereUniqueInput
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TerminalSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TerminalSessionCreateWithoutUserInput, TerminalSessionUncheckedCreateWithoutUserInput> | TerminalSessionCreateWithoutUserInput[] | TerminalSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutUserInput | TerminalSessionCreateOrConnectWithoutUserInput[]
    createMany?: TerminalSessionCreateManyUserInputEnvelope
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ApiClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiClientCreateWithoutUserInput, ApiClientUncheckedCreateWithoutUserInput> | ApiClientCreateWithoutUserInput[] | ApiClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiClientCreateOrConnectWithoutUserInput | ApiClientCreateOrConnectWithoutUserInput[]
    createMany?: ApiClientCreateManyUserInputEnvelope
    connect?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionPresenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionPresenceCreateWithoutUserInput, SessionPresenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutUserInput
    connect?: SessionPresenceWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TerminalSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutUserInput, TerminalSessionUncheckedCreateWithoutUserInput> | TerminalSessionCreateWithoutUserInput[] | TerminalSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutUserInput | TerminalSessionCreateOrConnectWithoutUserInput[]
    upsert?: TerminalSessionUpsertWithWhereUniqueWithoutUserInput | TerminalSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TerminalSessionCreateManyUserInputEnvelope
    set?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    disconnect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    delete?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    update?: TerminalSessionUpdateWithWhereUniqueWithoutUserInput | TerminalSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TerminalSessionUpdateManyWithWhereWithoutUserInput | TerminalSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ApiClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiClientCreateWithoutUserInput, ApiClientUncheckedCreateWithoutUserInput> | ApiClientCreateWithoutUserInput[] | ApiClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiClientCreateOrConnectWithoutUserInput | ApiClientCreateOrConnectWithoutUserInput[]
    upsert?: ApiClientUpsertWithWhereUniqueWithoutUserInput | ApiClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiClientCreateManyUserInputEnvelope
    set?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    disconnect?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    delete?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    connect?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    update?: ApiClientUpdateWithWhereUniqueWithoutUserInput | ApiClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiClientUpdateManyWithWhereWithoutUserInput | ApiClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiClientScalarWhereInput | ApiClientScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionPresenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionPresenceCreateWithoutUserInput, SessionPresenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutUserInput
    upsert?: SessionPresenceUpsertWithoutUserInput
    disconnect?: SessionPresenceWhereInput | boolean
    delete?: SessionPresenceWhereInput | boolean
    connect?: SessionPresenceWhereUniqueInput
    update?: XOR<XOR<SessionPresenceUpdateToOneWithWhereWithoutUserInput, SessionPresenceUpdateWithoutUserInput>, SessionPresenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TerminalSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutUserInput, TerminalSessionUncheckedCreateWithoutUserInput> | TerminalSessionCreateWithoutUserInput[] | TerminalSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutUserInput | TerminalSessionCreateOrConnectWithoutUserInput[]
    upsert?: TerminalSessionUpsertWithWhereUniqueWithoutUserInput | TerminalSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TerminalSessionCreateManyUserInputEnvelope
    set?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    disconnect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    delete?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    update?: TerminalSessionUpdateWithWhereUniqueWithoutUserInput | TerminalSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TerminalSessionUpdateManyWithWhereWithoutUserInput | TerminalSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ApiClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiClientCreateWithoutUserInput, ApiClientUncheckedCreateWithoutUserInput> | ApiClientCreateWithoutUserInput[] | ApiClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiClientCreateOrConnectWithoutUserInput | ApiClientCreateOrConnectWithoutUserInput[]
    upsert?: ApiClientUpsertWithWhereUniqueWithoutUserInput | ApiClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiClientCreateManyUserInputEnvelope
    set?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    disconnect?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    delete?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    connect?: ApiClientWhereUniqueInput | ApiClientWhereUniqueInput[]
    update?: ApiClientUpdateWithWhereUniqueWithoutUserInput | ApiClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiClientUpdateManyWithWhereWithoutUserInput | ApiClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiClientScalarWhereInput | ApiClientScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionPresenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionPresenceCreateWithoutUserInput, SessionPresenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutUserInput
    upsert?: SessionPresenceUpsertWithoutUserInput
    disconnect?: SessionPresenceWhereInput | boolean
    delete?: SessionPresenceWhereInput | boolean
    connect?: SessionPresenceWhereUniqueInput
    update?: XOR<XOR<SessionPresenceUpdateToOneWithWhereWithoutUserInput, SessionPresenceUpdateWithoutUserInput>, SessionPresenceUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutTerminalSessionsInput = {
    create?: XOR<UserCreateWithoutTerminalSessionsInput, UserUncheckedCreateWithoutTerminalSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTerminalSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ProjectCreateWithoutSessionsInput, ProjectUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSessionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TerminalSessionCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TerminalSessionCreateWithoutChildrenInput, TerminalSessionUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutChildrenInput
    connect?: TerminalSessionWhereUniqueInput
  }

  export type TerminalSessionCreateNestedManyWithoutParentInput = {
    create?: XOR<TerminalSessionCreateWithoutParentInput, TerminalSessionUncheckedCreateWithoutParentInput> | TerminalSessionCreateWithoutParentInput[] | TerminalSessionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutParentInput | TerminalSessionCreateOrConnectWithoutParentInput[]
    createMany?: TerminalSessionCreateManyParentInputEnvelope
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
  }

  export type SessionPresenceCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionPresenceCreateWithoutSessionInput, SessionPresenceUncheckedCreateWithoutSessionInput> | SessionPresenceCreateWithoutSessionInput[] | SessionPresenceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutSessionInput | SessionPresenceCreateOrConnectWithoutSessionInput[]
    createMany?: SessionPresenceCreateManySessionInputEnvelope
    connect?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
  }

  export type TerminalSessionUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TerminalSessionCreateWithoutParentInput, TerminalSessionUncheckedCreateWithoutParentInput> | TerminalSessionCreateWithoutParentInput[] | TerminalSessionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutParentInput | TerminalSessionCreateOrConnectWithoutParentInput[]
    createMany?: TerminalSessionCreateManyParentInputEnvelope
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
  }

  export type SessionPresenceUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionPresenceCreateWithoutSessionInput, SessionPresenceUncheckedCreateWithoutSessionInput> | SessionPresenceCreateWithoutSessionInput[] | SessionPresenceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutSessionInput | SessionPresenceCreateOrConnectWithoutSessionInput[]
    createMany?: SessionPresenceCreateManySessionInputEnvelope
    connect?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
  }

  export type EnumTerminalSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TerminalSessionStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumSessionRelationTypeFieldUpdateOperationsInput = {
    set?: $Enums.SessionRelationType | null
  }

  export type UserUpdateOneRequiredWithoutTerminalSessionsNestedInput = {
    create?: XOR<UserCreateWithoutTerminalSessionsInput, UserUncheckedCreateWithoutTerminalSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTerminalSessionsInput
    upsert?: UserUpsertWithoutTerminalSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTerminalSessionsInput, UserUpdateWithoutTerminalSessionsInput>, UserUncheckedUpdateWithoutTerminalSessionsInput>
  }

  export type ProjectUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<ProjectCreateWithoutSessionsInput, ProjectUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSessionsInput
    upsert?: ProjectUpsertWithoutSessionsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSessionsInput, ProjectUpdateWithoutSessionsInput>, ProjectUncheckedUpdateWithoutSessionsInput>
  }

  export type TerminalSessionUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutChildrenInput, TerminalSessionUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutChildrenInput
    upsert?: TerminalSessionUpsertWithoutChildrenInput
    disconnect?: TerminalSessionWhereInput | boolean
    delete?: TerminalSessionWhereInput | boolean
    connect?: TerminalSessionWhereUniqueInput
    update?: XOR<XOR<TerminalSessionUpdateToOneWithWhereWithoutChildrenInput, TerminalSessionUpdateWithoutChildrenInput>, TerminalSessionUncheckedUpdateWithoutChildrenInput>
  }

  export type TerminalSessionUpdateManyWithoutParentNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutParentInput, TerminalSessionUncheckedCreateWithoutParentInput> | TerminalSessionCreateWithoutParentInput[] | TerminalSessionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutParentInput | TerminalSessionCreateOrConnectWithoutParentInput[]
    upsert?: TerminalSessionUpsertWithWhereUniqueWithoutParentInput | TerminalSessionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TerminalSessionCreateManyParentInputEnvelope
    set?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    disconnect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    delete?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    update?: TerminalSessionUpdateWithWhereUniqueWithoutParentInput | TerminalSessionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TerminalSessionUpdateManyWithWhereWithoutParentInput | TerminalSessionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
  }

  export type SessionPresenceUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionPresenceCreateWithoutSessionInput, SessionPresenceUncheckedCreateWithoutSessionInput> | SessionPresenceCreateWithoutSessionInput[] | SessionPresenceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutSessionInput | SessionPresenceCreateOrConnectWithoutSessionInput[]
    upsert?: SessionPresenceUpsertWithWhereUniqueWithoutSessionInput | SessionPresenceUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionPresenceCreateManySessionInputEnvelope
    set?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    disconnect?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    delete?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    connect?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    update?: SessionPresenceUpdateWithWhereUniqueWithoutSessionInput | SessionPresenceUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionPresenceUpdateManyWithWhereWithoutSessionInput | SessionPresenceUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionPresenceScalarWhereInput | SessionPresenceScalarWhereInput[]
  }

  export type TerminalSessionUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutParentInput, TerminalSessionUncheckedCreateWithoutParentInput> | TerminalSessionCreateWithoutParentInput[] | TerminalSessionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutParentInput | TerminalSessionCreateOrConnectWithoutParentInput[]
    upsert?: TerminalSessionUpsertWithWhereUniqueWithoutParentInput | TerminalSessionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TerminalSessionCreateManyParentInputEnvelope
    set?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    disconnect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    delete?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    update?: TerminalSessionUpdateWithWhereUniqueWithoutParentInput | TerminalSessionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TerminalSessionUpdateManyWithWhereWithoutParentInput | TerminalSessionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
  }

  export type SessionPresenceUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionPresenceCreateWithoutSessionInput, SessionPresenceUncheckedCreateWithoutSessionInput> | SessionPresenceCreateWithoutSessionInput[] | SessionPresenceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPresenceCreateOrConnectWithoutSessionInput | SessionPresenceCreateOrConnectWithoutSessionInput[]
    upsert?: SessionPresenceUpsertWithWhereUniqueWithoutSessionInput | SessionPresenceUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionPresenceCreateManySessionInputEnvelope
    set?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    disconnect?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    delete?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    connect?: SessionPresenceWhereUniqueInput | SessionPresenceWhereUniqueInput[]
    update?: SessionPresenceUpdateWithWhereUniqueWithoutSessionInput | SessionPresenceUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionPresenceUpdateManyWithWhereWithoutSessionInput | SessionPresenceUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionPresenceScalarWhereInput | SessionPresenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TerminalSessionCreateNestedManyWithoutProjectInput = {
    create?: XOR<TerminalSessionCreateWithoutProjectInput, TerminalSessionUncheckedCreateWithoutProjectInput> | TerminalSessionCreateWithoutProjectInput[] | TerminalSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutProjectInput | TerminalSessionCreateOrConnectWithoutProjectInput[]
    createMany?: TerminalSessionCreateManyProjectInputEnvelope
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
  }

  export type TerminalSessionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TerminalSessionCreateWithoutProjectInput, TerminalSessionUncheckedCreateWithoutProjectInput> | TerminalSessionCreateWithoutProjectInput[] | TerminalSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutProjectInput | TerminalSessionCreateOrConnectWithoutProjectInput[]
    createMany?: TerminalSessionCreateManyProjectInputEnvelope
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
  }

  export type NullableEnumAgentProviderFieldUpdateOperationsInput = {
    set?: $Enums.AgentProvider | null
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type TerminalSessionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutProjectInput, TerminalSessionUncheckedCreateWithoutProjectInput> | TerminalSessionCreateWithoutProjectInput[] | TerminalSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutProjectInput | TerminalSessionCreateOrConnectWithoutProjectInput[]
    upsert?: TerminalSessionUpsertWithWhereUniqueWithoutProjectInput | TerminalSessionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TerminalSessionCreateManyProjectInputEnvelope
    set?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    disconnect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    delete?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    update?: TerminalSessionUpdateWithWhereUniqueWithoutProjectInput | TerminalSessionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TerminalSessionUpdateManyWithWhereWithoutProjectInput | TerminalSessionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
  }

  export type TerminalSessionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutProjectInput, TerminalSessionUncheckedCreateWithoutProjectInput> | TerminalSessionCreateWithoutProjectInput[] | TerminalSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutProjectInput | TerminalSessionCreateOrConnectWithoutProjectInput[]
    upsert?: TerminalSessionUpsertWithWhereUniqueWithoutProjectInput | TerminalSessionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TerminalSessionCreateManyProjectInputEnvelope
    set?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    disconnect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    delete?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    connect?: TerminalSessionWhereUniqueInput | TerminalSessionWhereUniqueInput[]
    update?: TerminalSessionUpdateWithWhereUniqueWithoutProjectInput | TerminalSessionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TerminalSessionUpdateManyWithWhereWithoutProjectInput | TerminalSessionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskExecutionCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
  }

  export type TaskExecutionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskSourceFieldUpdateOperationsInput = {
    set?: $Enums.TaskSource
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type TaskExecutionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskExecutionUpsertWithWhereUniqueWithoutTaskInput | TaskExecutionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    set?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    disconnect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    delete?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    update?: TaskExecutionUpdateWithWhereUniqueWithoutTaskInput | TaskExecutionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskExecutionUpdateManyWithWhereWithoutTaskInput | TaskExecutionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
  }

  export type TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput> | TaskExecutionCreateWithoutTaskInput[] | TaskExecutionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskExecutionCreateOrConnectWithoutTaskInput | TaskExecutionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskExecutionUpsertWithWhereUniqueWithoutTaskInput | TaskExecutionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskExecutionCreateManyTaskInputEnvelope
    set?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    disconnect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    delete?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    connect?: TaskExecutionWhereUniqueInput | TaskExecutionWhereUniqueInput[]
    update?: TaskExecutionUpdateWithWhereUniqueWithoutTaskInput | TaskExecutionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskExecutionUpdateManyWithWhereWithoutTaskInput | TaskExecutionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutExecutionsInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumTaskExecutionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskExecutionStatus
  }

  export type EnumAgentProviderFieldUpdateOperationsInput = {
    set?: $Enums.AgentProvider
  }

  export type TaskUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutExecutionsInput
    upsert?: TaskUpsertWithoutExecutionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutExecutionsInput, TaskUpdateWithoutExecutionsInput>, TaskUncheckedUpdateWithoutExecutionsInput>
  }

  export type UserCreateNestedOneWithoutApiClientsInput = {
    create?: XOR<UserCreateWithoutApiClientsInput, UserUncheckedCreateWithoutApiClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ApiSecretCreateNestedManyWithoutClientInput = {
    create?: XOR<ApiSecretCreateWithoutClientInput, ApiSecretUncheckedCreateWithoutClientInput> | ApiSecretCreateWithoutClientInput[] | ApiSecretUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiSecretCreateOrConnectWithoutClientInput | ApiSecretCreateOrConnectWithoutClientInput[]
    createMany?: ApiSecretCreateManyClientInputEnvelope
    connect?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
  }

  export type ApiCallLogCreateNestedManyWithoutClientInput = {
    create?: XOR<ApiCallLogCreateWithoutClientInput, ApiCallLogUncheckedCreateWithoutClientInput> | ApiCallLogCreateWithoutClientInput[] | ApiCallLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiCallLogCreateOrConnectWithoutClientInput | ApiCallLogCreateOrConnectWithoutClientInput[]
    createMany?: ApiCallLogCreateManyClientInputEnvelope
    connect?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
  }

  export type ApiSecretUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ApiSecretCreateWithoutClientInput, ApiSecretUncheckedCreateWithoutClientInput> | ApiSecretCreateWithoutClientInput[] | ApiSecretUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiSecretCreateOrConnectWithoutClientInput | ApiSecretCreateOrConnectWithoutClientInput[]
    createMany?: ApiSecretCreateManyClientInputEnvelope
    connect?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
  }

  export type ApiCallLogUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ApiCallLogCreateWithoutClientInput, ApiCallLogUncheckedCreateWithoutClientInput> | ApiCallLogCreateWithoutClientInput[] | ApiCallLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiCallLogCreateOrConnectWithoutClientInput | ApiCallLogCreateOrConnectWithoutClientInput[]
    createMany?: ApiCallLogCreateManyClientInputEnvelope
    connect?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutApiClientsNestedInput = {
    create?: XOR<UserCreateWithoutApiClientsInput, UserUncheckedCreateWithoutApiClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiClientsInput
    upsert?: UserUpsertWithoutApiClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiClientsInput, UserUpdateWithoutApiClientsInput>, UserUncheckedUpdateWithoutApiClientsInput>
  }

  export type ApiSecretUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApiSecretCreateWithoutClientInput, ApiSecretUncheckedCreateWithoutClientInput> | ApiSecretCreateWithoutClientInput[] | ApiSecretUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiSecretCreateOrConnectWithoutClientInput | ApiSecretCreateOrConnectWithoutClientInput[]
    upsert?: ApiSecretUpsertWithWhereUniqueWithoutClientInput | ApiSecretUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApiSecretCreateManyClientInputEnvelope
    set?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    disconnect?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    delete?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    connect?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    update?: ApiSecretUpdateWithWhereUniqueWithoutClientInput | ApiSecretUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApiSecretUpdateManyWithWhereWithoutClientInput | ApiSecretUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApiSecretScalarWhereInput | ApiSecretScalarWhereInput[]
  }

  export type ApiCallLogUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApiCallLogCreateWithoutClientInput, ApiCallLogUncheckedCreateWithoutClientInput> | ApiCallLogCreateWithoutClientInput[] | ApiCallLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiCallLogCreateOrConnectWithoutClientInput | ApiCallLogCreateOrConnectWithoutClientInput[]
    upsert?: ApiCallLogUpsertWithWhereUniqueWithoutClientInput | ApiCallLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApiCallLogCreateManyClientInputEnvelope
    set?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    disconnect?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    delete?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    connect?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    update?: ApiCallLogUpdateWithWhereUniqueWithoutClientInput | ApiCallLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApiCallLogUpdateManyWithWhereWithoutClientInput | ApiCallLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApiCallLogScalarWhereInput | ApiCallLogScalarWhereInput[]
  }

  export type ApiSecretUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApiSecretCreateWithoutClientInput, ApiSecretUncheckedCreateWithoutClientInput> | ApiSecretCreateWithoutClientInput[] | ApiSecretUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiSecretCreateOrConnectWithoutClientInput | ApiSecretCreateOrConnectWithoutClientInput[]
    upsert?: ApiSecretUpsertWithWhereUniqueWithoutClientInput | ApiSecretUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApiSecretCreateManyClientInputEnvelope
    set?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    disconnect?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    delete?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    connect?: ApiSecretWhereUniqueInput | ApiSecretWhereUniqueInput[]
    update?: ApiSecretUpdateWithWhereUniqueWithoutClientInput | ApiSecretUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApiSecretUpdateManyWithWhereWithoutClientInput | ApiSecretUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApiSecretScalarWhereInput | ApiSecretScalarWhereInput[]
  }

  export type ApiCallLogUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApiCallLogCreateWithoutClientInput, ApiCallLogUncheckedCreateWithoutClientInput> | ApiCallLogCreateWithoutClientInput[] | ApiCallLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApiCallLogCreateOrConnectWithoutClientInput | ApiCallLogCreateOrConnectWithoutClientInput[]
    upsert?: ApiCallLogUpsertWithWhereUniqueWithoutClientInput | ApiCallLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApiCallLogCreateManyClientInputEnvelope
    set?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    disconnect?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    delete?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    connect?: ApiCallLogWhereUniqueInput | ApiCallLogWhereUniqueInput[]
    update?: ApiCallLogUpdateWithWhereUniqueWithoutClientInput | ApiCallLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApiCallLogUpdateManyWithWhereWithoutClientInput | ApiCallLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApiCallLogScalarWhereInput | ApiCallLogScalarWhereInput[]
  }

  export type ApiClientCreateNestedOneWithoutSecretsInput = {
    create?: XOR<ApiClientCreateWithoutSecretsInput, ApiClientUncheckedCreateWithoutSecretsInput>
    connectOrCreate?: ApiClientCreateOrConnectWithoutSecretsInput
    connect?: ApiClientWhereUniqueInput
  }

  export type ApiClientUpdateOneRequiredWithoutSecretsNestedInput = {
    create?: XOR<ApiClientCreateWithoutSecretsInput, ApiClientUncheckedCreateWithoutSecretsInput>
    connectOrCreate?: ApiClientCreateOrConnectWithoutSecretsInput
    upsert?: ApiClientUpsertWithoutSecretsInput
    connect?: ApiClientWhereUniqueInput
    update?: XOR<XOR<ApiClientUpdateToOneWithWhereWithoutSecretsInput, ApiClientUpdateWithoutSecretsInput>, ApiClientUncheckedUpdateWithoutSecretsInput>
  }

  export type ApiClientCreateNestedOneWithoutCallLogsInput = {
    create?: XOR<ApiClientCreateWithoutCallLogsInput, ApiClientUncheckedCreateWithoutCallLogsInput>
    connectOrCreate?: ApiClientCreateOrConnectWithoutCallLogsInput
    connect?: ApiClientWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApiClientUpdateOneRequiredWithoutCallLogsNestedInput = {
    create?: XOR<ApiClientCreateWithoutCallLogsInput, ApiClientUncheckedCreateWithoutCallLogsInput>
    connectOrCreate?: ApiClientCreateOrConnectWithoutCallLogsInput
    upsert?: ApiClientUpsertWithoutCallLogsInput
    connect?: ApiClientWhereUniqueInput
    update?: XOR<XOR<ApiClientUpdateToOneWithWhereWithoutCallLogsInput, ApiClientUpdateWithoutCallLogsInput>, ApiClientUncheckedUpdateWithoutCallLogsInput>
  }

  export type UserCreateNestedOneWithoutSessionPresenceInput = {
    create?: XOR<UserCreateWithoutSessionPresenceInput, UserUncheckedCreateWithoutSessionPresenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionPresenceInput
    connect?: UserWhereUniqueInput
  }

  export type TerminalSessionCreateNestedOneWithoutPresencesInput = {
    create?: XOR<TerminalSessionCreateWithoutPresencesInput, TerminalSessionUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutPresencesInput
    connect?: TerminalSessionWhereUniqueInput
  }

  export type EnumPresenceStatusFieldUpdateOperationsInput = {
    set?: $Enums.PresenceStatus
  }

  export type UserUpdateOneRequiredWithoutSessionPresenceNestedInput = {
    create?: XOR<UserCreateWithoutSessionPresenceInput, UserUncheckedCreateWithoutSessionPresenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionPresenceInput
    upsert?: UserUpsertWithoutSessionPresenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionPresenceInput, UserUpdateWithoutSessionPresenceInput>, UserUncheckedUpdateWithoutSessionPresenceInput>
  }

  export type TerminalSessionUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<TerminalSessionCreateWithoutPresencesInput, TerminalSessionUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: TerminalSessionCreateOrConnectWithoutPresencesInput
    upsert?: TerminalSessionUpsertWithoutPresencesInput
    connect?: TerminalSessionWhereUniqueInput
    update?: XOR<XOR<TerminalSessionUpdateToOneWithWhereWithoutPresencesInput, TerminalSessionUpdateWithoutPresencesInput>, TerminalSessionUncheckedUpdateWithoutPresencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTerminalSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TerminalSessionStatus | EnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTerminalSessionStatusFilter<$PrismaModel> | $Enums.TerminalSessionStatus
  }

  export type NestedEnumSessionRelationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionRelationType | EnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSessionRelationTypeNullableFilter<$PrismaModel> | $Enums.SessionRelationType | null
  }

  export type NestedEnumTerminalSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TerminalSessionStatus | EnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TerminalSessionStatus[] | ListEnumTerminalSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTerminalSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TerminalSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTerminalSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumTerminalSessionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSessionRelationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionRelationType | EnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SessionRelationType[] | ListEnumSessionRelationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSessionRelationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SessionRelationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSessionRelationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSessionRelationTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAgentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentProviderNullableFilter<$PrismaModel> | $Enums.AgentProvider | null
  }

  export type NestedEnumAgentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.AgentProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAgentProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumAgentProviderNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceFilter<$PrismaModel> | $Enums.TaskSource
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceWithAggregatesFilter<$PrismaModel> | $Enums.TaskSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskSourceFilter<$PrismaModel>
    _max?: NestedEnumTaskSourceFilter<$PrismaModel>
  }

  export type NestedEnumTaskExecutionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskExecutionStatus | EnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskExecutionStatusFilter<$PrismaModel> | $Enums.TaskExecutionStatus
  }

  export type NestedEnumAgentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentProviderFilter<$PrismaModel> | $Enums.AgentProvider
  }

  export type NestedEnumTaskExecutionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskExecutionStatus | EnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskExecutionStatus[] | ListEnumTaskExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskExecutionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskExecutionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskExecutionStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskExecutionStatusFilter<$PrismaModel>
  }

  export type NestedEnumAgentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentProvider | EnumAgentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentProvider[] | ListEnumAgentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentProviderWithAggregatesFilter<$PrismaModel> | $Enums.AgentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentProviderFilter<$PrismaModel>
    _max?: NestedEnumAgentProviderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPresenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusFilter<$PrismaModel> | $Enums.PresenceStatus
  }

  export type NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.PresenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceStatusFilter<$PrismaModel>
    _max?: NestedEnumPresenceStatusFilter<$PrismaModel>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TerminalSessionCreateWithoutUserInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    relationType?: $Enums.SessionRelationType | null
    project?: ProjectCreateNestedOneWithoutSessionsInput
    parent?: TerminalSessionCreateNestedOneWithoutChildrenInput
    children?: TerminalSessionCreateNestedManyWithoutParentInput
    presences?: SessionPresenceCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedCreateNestedManyWithoutParentInput
    presences?: SessionPresenceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionCreateOrConnectWithoutUserInput = {
    where: TerminalSessionWhereUniqueInput
    create: XOR<TerminalSessionCreateWithoutUserInput, TerminalSessionUncheckedCreateWithoutUserInput>
  }

  export type TerminalSessionCreateManyUserInputEnvelope = {
    data: TerminalSessionCreateManyUserInput | TerminalSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: TaskExecutionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: TaskExecutionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiClientCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    secrets?: ApiSecretCreateNestedManyWithoutClientInput
    callLogs?: ApiCallLogCreateNestedManyWithoutClientInput
  }

  export type ApiClientUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    secrets?: ApiSecretUncheckedCreateNestedManyWithoutClientInput
    callLogs?: ApiCallLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ApiClientCreateOrConnectWithoutUserInput = {
    where: ApiClientWhereUniqueInput
    create: XOR<ApiClientCreateWithoutUserInput, ApiClientUncheckedCreateWithoutUserInput>
  }

  export type ApiClientCreateManyUserInputEnvelope = {
    data: ApiClientCreateManyUserInput | ApiClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: TerminalSessionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: TerminalSessionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionPresenceCreateWithoutUserInput = {
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
    session: TerminalSessionCreateNestedOneWithoutPresencesInput
  }

  export type SessionPresenceUncheckedCreateWithoutUserInput = {
    sessionId: string
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
  }

  export type SessionPresenceCreateOrConnectWithoutUserInput = {
    where: SessionPresenceWhereUniqueInput
    create: XOR<SessionPresenceCreateWithoutUserInput, SessionPresenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    agents?:PrismaJson.UserPreferencesAgents | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type TerminalSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: TerminalSessionWhereUniqueInput
    update: XOR<TerminalSessionUpdateWithoutUserInput, TerminalSessionUncheckedUpdateWithoutUserInput>
    create: XOR<TerminalSessionCreateWithoutUserInput, TerminalSessionUncheckedCreateWithoutUserInput>
  }

  export type TerminalSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: TerminalSessionWhereUniqueInput
    data: XOR<TerminalSessionUpdateWithoutUserInput, TerminalSessionUncheckedUpdateWithoutUserInput>
  }

  export type TerminalSessionUpdateManyWithWhereWithoutUserInput = {
    where: TerminalSessionScalarWhereInput
    data: XOR<TerminalSessionUpdateManyMutationInput, TerminalSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type TerminalSessionScalarWhereInput = {
    AND?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
    OR?: TerminalSessionScalarWhereInput[]
    NOT?: TerminalSessionScalarWhereInput | TerminalSessionScalarWhereInput[]
    id?: StringFilter<"TerminalSession"> | string
    name?: StringFilter<"TerminalSession"> | string
    userId?: StringFilter<"TerminalSession"> | string
    status?: EnumTerminalSessionStatusFilter<"TerminalSession"> | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFilter<"TerminalSession"> | Date | string
    updatedAt?: DateTimeFilter<"TerminalSession"> | Date | string
    port?: IntNullableFilter<"TerminalSession"> | number | null
    wsPath?: StringNullableFilter<"TerminalSession"> | string | null
    containerName?: StringNullableFilter<"TerminalSession"> | string | null
    projectId?: StringNullableFilter<"TerminalSession"> | string | null
    parentId?: StringNullableFilter<"TerminalSession"> | string | null
    relationType?: EnumSessionRelationTypeNullableFilter<"TerminalSession"> | $Enums.SessionRelationType | null
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringNullableFilter<"Task"> | string | null
    body?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceFilter<"Task"> | $Enums.TaskSource
    agentId?: EnumAgentProviderNullableFilter<"Task"> | $Enums.AgentProvider | null
    repository?: StringNullableFilter<"Task"> | string | null
    mountPoint?: StringNullableFilter<"Task"> | string | null
    userId?: StringFilter<"Task"> | string
    attachments?: JsonNullableFilter<"Task">
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type ApiClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiClientWhereUniqueInput
    update: XOR<ApiClientUpdateWithoutUserInput, ApiClientUncheckedUpdateWithoutUserInput>
    create: XOR<ApiClientCreateWithoutUserInput, ApiClientUncheckedCreateWithoutUserInput>
  }

  export type ApiClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiClientWhereUniqueInput
    data: XOR<ApiClientUpdateWithoutUserInput, ApiClientUncheckedUpdateWithoutUserInput>
  }

  export type ApiClientUpdateManyWithWhereWithoutUserInput = {
    where: ApiClientScalarWhereInput
    data: XOR<ApiClientUpdateManyMutationInput, ApiClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiClientScalarWhereInput = {
    AND?: ApiClientScalarWhereInput | ApiClientScalarWhereInput[]
    OR?: ApiClientScalarWhereInput[]
    NOT?: ApiClientScalarWhereInput | ApiClientScalarWhereInput[]
    id?: StringFilter<"ApiClient"> | string
    name?: StringFilter<"ApiClient"> | string
    description?: StringNullableFilter<"ApiClient"> | string | null
    userId?: StringFilter<"ApiClient"> | string
    createdAt?: DateTimeFilter<"ApiClient"> | Date | string
    updatedAt?: DateTimeFilter<"ApiClient"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    folder?: StringFilter<"Project"> | string
    shared?: BoolFilter<"Project"> | boolean
    defaultCliId?: EnumAgentProviderNullableFilter<"Project"> | $Enums.AgentProvider | null
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type SessionPresenceUpsertWithoutUserInput = {
    update: XOR<SessionPresenceUpdateWithoutUserInput, SessionPresenceUncheckedUpdateWithoutUserInput>
    create: XOR<SessionPresenceCreateWithoutUserInput, SessionPresenceUncheckedCreateWithoutUserInput>
    where?: SessionPresenceWhereInput
  }

  export type SessionPresenceUpdateToOneWithWhereWithoutUserInput = {
    where?: SessionPresenceWhereInput
    data: XOR<SessionPresenceUpdateWithoutUserInput, SessionPresenceUncheckedUpdateWithoutUserInput>
  }

  export type SessionPresenceUpdateWithoutUserInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TerminalSessionUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type SessionPresenceUncheckedUpdateWithoutUserInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTerminalSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTerminalSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTerminalSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTerminalSessionsInput, UserUncheckedCreateWithoutTerminalSessionsInput>
  }

  export type ProjectCreateWithoutSessionsInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutSessionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSessionsInput, ProjectUncheckedCreateWithoutSessionsInput>
  }

  export type TerminalSessionCreateWithoutChildrenInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    relationType?: $Enums.SessionRelationType | null
    user: UserCreateNestedOneWithoutTerminalSessionsInput
    project?: ProjectCreateNestedOneWithoutSessionsInput
    parent?: TerminalSessionCreateNestedOneWithoutChildrenInput
    presences?: SessionPresenceCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
    presences?: SessionPresenceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionCreateOrConnectWithoutChildrenInput = {
    where: TerminalSessionWhereUniqueInput
    create: XOR<TerminalSessionCreateWithoutChildrenInput, TerminalSessionUncheckedCreateWithoutChildrenInput>
  }

  export type TerminalSessionCreateWithoutParentInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    relationType?: $Enums.SessionRelationType | null
    user: UserCreateNestedOneWithoutTerminalSessionsInput
    project?: ProjectCreateNestedOneWithoutSessionsInput
    children?: TerminalSessionCreateNestedManyWithoutParentInput
    presences?: SessionPresenceCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    relationType?: $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedCreateNestedManyWithoutParentInput
    presences?: SessionPresenceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionCreateOrConnectWithoutParentInput = {
    where: TerminalSessionWhereUniqueInput
    create: XOR<TerminalSessionCreateWithoutParentInput, TerminalSessionUncheckedCreateWithoutParentInput>
  }

  export type TerminalSessionCreateManyParentInputEnvelope = {
    data: TerminalSessionCreateManyParentInput | TerminalSessionCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type SessionPresenceCreateWithoutSessionInput = {
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
    user: UserCreateNestedOneWithoutSessionPresenceInput
  }

  export type SessionPresenceUncheckedCreateWithoutSessionInput = {
    userId: string
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
  }

  export type SessionPresenceCreateOrConnectWithoutSessionInput = {
    where: SessionPresenceWhereUniqueInput
    create: XOR<SessionPresenceCreateWithoutSessionInput, SessionPresenceUncheckedCreateWithoutSessionInput>
  }

  export type SessionPresenceCreateManySessionInputEnvelope = {
    data: SessionPresenceCreateManySessionInput | SessionPresenceCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTerminalSessionsInput = {
    update: XOR<UserUpdateWithoutTerminalSessionsInput, UserUncheckedUpdateWithoutTerminalSessionsInput>
    create: XOR<UserCreateWithoutTerminalSessionsInput, UserUncheckedCreateWithoutTerminalSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTerminalSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTerminalSessionsInput, UserUncheckedUpdateWithoutTerminalSessionsInput>
  }

  export type UserUpdateWithoutTerminalSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTerminalSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutSessionsInput = {
    update: XOR<ProjectUpdateWithoutSessionsInput, ProjectUncheckedUpdateWithoutSessionsInput>
    create: XOR<ProjectCreateWithoutSessionsInput, ProjectUncheckedCreateWithoutSessionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSessionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSessionsInput, ProjectUncheckedUpdateWithoutSessionsInput>
  }

  export type ProjectUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalSessionUpsertWithoutChildrenInput = {
    update: XOR<TerminalSessionUpdateWithoutChildrenInput, TerminalSessionUncheckedUpdateWithoutChildrenInput>
    create: XOR<TerminalSessionCreateWithoutChildrenInput, TerminalSessionUncheckedCreateWithoutChildrenInput>
    where?: TerminalSessionWhereInput
  }

  export type TerminalSessionUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TerminalSessionWhereInput
    data: XOR<TerminalSessionUpdateWithoutChildrenInput, TerminalSessionUncheckedUpdateWithoutChildrenInput>
  }

  export type TerminalSessionUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    user?: UserUpdateOneRequiredWithoutTerminalSessionsNestedInput
    project?: ProjectUpdateOneWithoutSessionsNestedInput
    parent?: TerminalSessionUpdateOneWithoutChildrenNestedInput
    presences?: SessionPresenceUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    presences?: SessionPresenceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUpsertWithWhereUniqueWithoutParentInput = {
    where: TerminalSessionWhereUniqueInput
    update: XOR<TerminalSessionUpdateWithoutParentInput, TerminalSessionUncheckedUpdateWithoutParentInput>
    create: XOR<TerminalSessionCreateWithoutParentInput, TerminalSessionUncheckedCreateWithoutParentInput>
  }

  export type TerminalSessionUpdateWithWhereUniqueWithoutParentInput = {
    where: TerminalSessionWhereUniqueInput
    data: XOR<TerminalSessionUpdateWithoutParentInput, TerminalSessionUncheckedUpdateWithoutParentInput>
  }

  export type TerminalSessionUpdateManyWithWhereWithoutParentInput = {
    where: TerminalSessionScalarWhereInput
    data: XOR<TerminalSessionUpdateManyMutationInput, TerminalSessionUncheckedUpdateManyWithoutParentInput>
  }

  export type SessionPresenceUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionPresenceWhereUniqueInput
    update: XOR<SessionPresenceUpdateWithoutSessionInput, SessionPresenceUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionPresenceCreateWithoutSessionInput, SessionPresenceUncheckedCreateWithoutSessionInput>
  }

  export type SessionPresenceUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionPresenceWhereUniqueInput
    data: XOR<SessionPresenceUpdateWithoutSessionInput, SessionPresenceUncheckedUpdateWithoutSessionInput>
  }

  export type SessionPresenceUpdateManyWithWhereWithoutSessionInput = {
    where: SessionPresenceScalarWhereInput
    data: XOR<SessionPresenceUpdateManyMutationInput, SessionPresenceUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionPresenceScalarWhereInput = {
    AND?: SessionPresenceScalarWhereInput | SessionPresenceScalarWhereInput[]
    OR?: SessionPresenceScalarWhereInput[]
    NOT?: SessionPresenceScalarWhereInput | SessionPresenceScalarWhereInput[]
    userId?: StringFilter<"SessionPresence"> | string
    sessionId?: StringFilter<"SessionPresence"> | string
    status?: EnumPresenceStatusFilter<"SessionPresence"> | $Enums.PresenceStatus
    lastSeen?: DateTimeFilter<"SessionPresence"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type TerminalSessionCreateWithoutProjectInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    relationType?: $Enums.SessionRelationType | null
    user: UserCreateNestedOneWithoutTerminalSessionsInput
    parent?: TerminalSessionCreateNestedOneWithoutChildrenInput
    children?: TerminalSessionCreateNestedManyWithoutParentInput
    presences?: SessionPresenceCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedCreateNestedManyWithoutParentInput
    presences?: SessionPresenceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TerminalSessionCreateOrConnectWithoutProjectInput = {
    where: TerminalSessionWhereUniqueInput
    create: XOR<TerminalSessionCreateWithoutProjectInput, TerminalSessionUncheckedCreateWithoutProjectInput>
  }

  export type TerminalSessionCreateManyProjectInputEnvelope = {
    data: TerminalSessionCreateManyProjectInput | TerminalSessionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TerminalSessionUpsertWithWhereUniqueWithoutProjectInput = {
    where: TerminalSessionWhereUniqueInput
    update: XOR<TerminalSessionUpdateWithoutProjectInput, TerminalSessionUncheckedUpdateWithoutProjectInput>
    create: XOR<TerminalSessionCreateWithoutProjectInput, TerminalSessionUncheckedCreateWithoutProjectInput>
  }

  export type TerminalSessionUpdateWithWhereUniqueWithoutProjectInput = {
    where: TerminalSessionWhereUniqueInput
    data: XOR<TerminalSessionUpdateWithoutProjectInput, TerminalSessionUncheckedUpdateWithoutProjectInput>
  }

  export type TerminalSessionUpdateManyWithWhereWithoutProjectInput = {
    where: TerminalSessionScalarWhereInput
    data: XOR<TerminalSessionUpdateManyMutationInput, TerminalSessionUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutPreferencesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTasksInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type TaskExecutionCreateWithoutTaskInput = {
    id?: string
    status?: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId?: string | null
    containerName?: string | null
    completed?: boolean
    needsInput?: boolean
    inputRequest?: string | null
    result?: string | null
    errorMessage?: string | null
    logs?: string | null
    memoryUsage?: number | null
    tokenCount?: number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskExecutionUncheckedCreateWithoutTaskInput = {
    id?: string
    status?: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId?: string | null
    containerName?: string | null
    completed?: boolean
    needsInput?: boolean
    inputRequest?: string | null
    result?: string | null
    errorMessage?: string | null
    logs?: string | null
    memoryUsage?: number | null
    tokenCount?: number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskExecutionCreateOrConnectWithoutTaskInput = {
    where: TaskExecutionWhereUniqueInput
    create: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput>
  }

  export type TaskExecutionCreateManyTaskInputEnvelope = {
    data: TaskExecutionCreateManyTaskInput | TaskExecutionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TaskExecutionUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskExecutionWhereUniqueInput
    update: XOR<TaskExecutionUpdateWithoutTaskInput, TaskExecutionUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskExecutionCreateWithoutTaskInput, TaskExecutionUncheckedCreateWithoutTaskInput>
  }

  export type TaskExecutionUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskExecutionWhereUniqueInput
    data: XOR<TaskExecutionUpdateWithoutTaskInput, TaskExecutionUncheckedUpdateWithoutTaskInput>
  }

  export type TaskExecutionUpdateManyWithWhereWithoutTaskInput = {
    where: TaskExecutionScalarWhereInput
    data: XOR<TaskExecutionUpdateManyMutationInput, TaskExecutionUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskExecutionScalarWhereInput = {
    AND?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
    OR?: TaskExecutionScalarWhereInput[]
    NOT?: TaskExecutionScalarWhereInput | TaskExecutionScalarWhereInput[]
    id?: StringFilter<"TaskExecution"> | string
    taskId?: StringFilter<"TaskExecution"> | string
    status?: EnumTaskExecutionStatusFilter<"TaskExecution"> | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFilter<"TaskExecution"> | $Enums.AgentProvider
    jobId?: StringNullableFilter<"TaskExecution"> | string | null
    containerName?: StringNullableFilter<"TaskExecution"> | string | null
    completed?: BoolFilter<"TaskExecution"> | boolean
    needsInput?: BoolFilter<"TaskExecution"> | boolean
    inputRequest?: StringNullableFilter<"TaskExecution"> | string | null
    result?: StringNullableFilter<"TaskExecution"> | string | null
    errorMessage?: StringNullableFilter<"TaskExecution"> | string | null
    logs?: StringNullableFilter<"TaskExecution"> | string | null
    memoryUsage?: IntNullableFilter<"TaskExecution"> | number | null
    tokenCount?: IntNullableFilter<"TaskExecution"> | number | null
    context?: JsonNullableFilter<"TaskExecution">
    startedAt?: DateTimeNullableFilter<"TaskExecution"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"TaskExecution"> | Date | string | null
    createdAt?: DateTimeFilter<"TaskExecution"> | Date | string
    updatedAt?: DateTimeFilter<"TaskExecution"> | Date | string
  }

  export type TaskCreateWithoutExecutionsInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutExecutionsInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    userId: string
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutExecutionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
  }

  export type TaskUpsertWithoutExecutionsInput = {
    update: XOR<TaskUpdateWithoutExecutionsInput, TaskUncheckedUpdateWithoutExecutionsInput>
    create: XOR<TaskCreateWithoutExecutionsInput, TaskUncheckedCreateWithoutExecutionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutExecutionsInput, TaskUncheckedUpdateWithoutExecutionsInput>
  }

  export type TaskUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutApiClientsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiClientsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessionPresence?: SessionPresenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiClientsInput, UserUncheckedCreateWithoutApiClientsInput>
  }

  export type ApiSecretCreateWithoutClientInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiSecretUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiSecretCreateOrConnectWithoutClientInput = {
    where: ApiSecretWhereUniqueInput
    create: XOR<ApiSecretCreateWithoutClientInput, ApiSecretUncheckedCreateWithoutClientInput>
  }

  export type ApiSecretCreateManyClientInputEnvelope = {
    data: ApiSecretCreateManyClientInput | ApiSecretCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ApiCallLogCreateWithoutClientInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    requestBody?: string | null
    responseMs?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ApiCallLogUncheckedCreateWithoutClientInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    requestBody?: string | null
    responseMs?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ApiCallLogCreateOrConnectWithoutClientInput = {
    where: ApiCallLogWhereUniqueInput
    create: XOR<ApiCallLogCreateWithoutClientInput, ApiCallLogUncheckedCreateWithoutClientInput>
  }

  export type ApiCallLogCreateManyClientInputEnvelope = {
    data: ApiCallLogCreateManyClientInput | ApiCallLogCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApiClientsInput = {
    update: XOR<UserUpdateWithoutApiClientsInput, UserUncheckedUpdateWithoutApiClientsInput>
    create: XOR<UserCreateWithoutApiClientsInput, UserUncheckedCreateWithoutApiClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiClientsInput, UserUncheckedUpdateWithoutApiClientsInput>
  }

  export type UserUpdateWithoutApiClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessionPresence?: SessionPresenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApiSecretUpsertWithWhereUniqueWithoutClientInput = {
    where: ApiSecretWhereUniqueInput
    update: XOR<ApiSecretUpdateWithoutClientInput, ApiSecretUncheckedUpdateWithoutClientInput>
    create: XOR<ApiSecretCreateWithoutClientInput, ApiSecretUncheckedCreateWithoutClientInput>
  }

  export type ApiSecretUpdateWithWhereUniqueWithoutClientInput = {
    where: ApiSecretWhereUniqueInput
    data: XOR<ApiSecretUpdateWithoutClientInput, ApiSecretUncheckedUpdateWithoutClientInput>
  }

  export type ApiSecretUpdateManyWithWhereWithoutClientInput = {
    where: ApiSecretScalarWhereInput
    data: XOR<ApiSecretUpdateManyMutationInput, ApiSecretUncheckedUpdateManyWithoutClientInput>
  }

  export type ApiSecretScalarWhereInput = {
    AND?: ApiSecretScalarWhereInput | ApiSecretScalarWhereInput[]
    OR?: ApiSecretScalarWhereInput[]
    NOT?: ApiSecretScalarWhereInput | ApiSecretScalarWhereInput[]
    id?: StringFilter<"ApiSecret"> | string
    name?: StringFilter<"ApiSecret"> | string
    keyHash?: StringFilter<"ApiSecret"> | string
    keyPrefix?: StringFilter<"ApiSecret"> | string
    clientId?: StringFilter<"ApiSecret"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiSecret"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiSecret"> | Date | string
  }

  export type ApiCallLogUpsertWithWhereUniqueWithoutClientInput = {
    where: ApiCallLogWhereUniqueInput
    update: XOR<ApiCallLogUpdateWithoutClientInput, ApiCallLogUncheckedUpdateWithoutClientInput>
    create: XOR<ApiCallLogCreateWithoutClientInput, ApiCallLogUncheckedCreateWithoutClientInput>
  }

  export type ApiCallLogUpdateWithWhereUniqueWithoutClientInput = {
    where: ApiCallLogWhereUniqueInput
    data: XOR<ApiCallLogUpdateWithoutClientInput, ApiCallLogUncheckedUpdateWithoutClientInput>
  }

  export type ApiCallLogUpdateManyWithWhereWithoutClientInput = {
    where: ApiCallLogScalarWhereInput
    data: XOR<ApiCallLogUpdateManyMutationInput, ApiCallLogUncheckedUpdateManyWithoutClientInput>
  }

  export type ApiCallLogScalarWhereInput = {
    AND?: ApiCallLogScalarWhereInput | ApiCallLogScalarWhereInput[]
    OR?: ApiCallLogScalarWhereInput[]
    NOT?: ApiCallLogScalarWhereInput | ApiCallLogScalarWhereInput[]
    id?: StringFilter<"ApiCallLog"> | string
    clientId?: StringFilter<"ApiCallLog"> | string
    endpoint?: StringFilter<"ApiCallLog"> | string
    method?: StringFilter<"ApiCallLog"> | string
    statusCode?: IntFilter<"ApiCallLog"> | number
    ipAddress?: StringNullableFilter<"ApiCallLog"> | string | null
    userAgent?: StringNullableFilter<"ApiCallLog"> | string | null
    requestBody?: StringNullableFilter<"ApiCallLog"> | string | null
    responseMs?: IntNullableFilter<"ApiCallLog"> | number | null
    errorMessage?: StringNullableFilter<"ApiCallLog"> | string | null
    createdAt?: DateTimeFilter<"ApiCallLog"> | Date | string
  }

  export type ApiClientCreateWithoutSecretsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApiClientsInput
    callLogs?: ApiCallLogCreateNestedManyWithoutClientInput
  }

  export type ApiClientUncheckedCreateWithoutSecretsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    callLogs?: ApiCallLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ApiClientCreateOrConnectWithoutSecretsInput = {
    where: ApiClientWhereUniqueInput
    create: XOR<ApiClientCreateWithoutSecretsInput, ApiClientUncheckedCreateWithoutSecretsInput>
  }

  export type ApiClientUpsertWithoutSecretsInput = {
    update: XOR<ApiClientUpdateWithoutSecretsInput, ApiClientUncheckedUpdateWithoutSecretsInput>
    create: XOR<ApiClientCreateWithoutSecretsInput, ApiClientUncheckedCreateWithoutSecretsInput>
    where?: ApiClientWhereInput
  }

  export type ApiClientUpdateToOneWithWhereWithoutSecretsInput = {
    where?: ApiClientWhereInput
    data: XOR<ApiClientUpdateWithoutSecretsInput, ApiClientUncheckedUpdateWithoutSecretsInput>
  }

  export type ApiClientUpdateWithoutSecretsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiClientsNestedInput
    callLogs?: ApiCallLogUpdateManyWithoutClientNestedInput
  }

  export type ApiClientUncheckedUpdateWithoutSecretsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callLogs?: ApiCallLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ApiClientCreateWithoutCallLogsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApiClientsInput
    secrets?: ApiSecretCreateNestedManyWithoutClientInput
  }

  export type ApiClientUncheckedCreateWithoutCallLogsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    secrets?: ApiSecretUncheckedCreateNestedManyWithoutClientInput
  }

  export type ApiClientCreateOrConnectWithoutCallLogsInput = {
    where: ApiClientWhereUniqueInput
    create: XOR<ApiClientCreateWithoutCallLogsInput, ApiClientUncheckedCreateWithoutCallLogsInput>
  }

  export type ApiClientUpsertWithoutCallLogsInput = {
    update: XOR<ApiClientUpdateWithoutCallLogsInput, ApiClientUncheckedUpdateWithoutCallLogsInput>
    create: XOR<ApiClientCreateWithoutCallLogsInput, ApiClientUncheckedCreateWithoutCallLogsInput>
    where?: ApiClientWhereInput
  }

  export type ApiClientUpdateToOneWithWhereWithoutCallLogsInput = {
    where?: ApiClientWhereInput
    data: XOR<ApiClientUpdateWithoutCallLogsInput, ApiClientUncheckedUpdateWithoutCallLogsInput>
  }

  export type ApiClientUpdateWithoutCallLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiClientsNestedInput
    secrets?: ApiSecretUpdateManyWithoutClientNestedInput
  }

  export type ApiClientUncheckedUpdateWithoutCallLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secrets?: ApiSecretUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateWithoutSessionPresenceInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    apiClients?: ApiClientCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionPresenceInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    bio?: string | null
    avatarImageUrl?: string | null
    coverImageUrl?: string | null
    avatarImageUTKey?: string | null
    coverImageUTKey?: string | null
    timezone?: string | null
    role?: string
    banReason?: string | null
    banExpires?: Date | string | null
    banned?: boolean
    username?: string | null
    displayUsername?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    terminalSessions?: TerminalSessionUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    apiClients?: ApiClientUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionPresenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionPresenceInput, UserUncheckedCreateWithoutSessionPresenceInput>
  }

  export type TerminalSessionCreateWithoutPresencesInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    relationType?: $Enums.SessionRelationType | null
    user: UserCreateNestedOneWithoutTerminalSessionsInput
    project?: ProjectCreateNestedOneWithoutSessionsInput
    parent?: TerminalSessionCreateNestedOneWithoutChildrenInput
    children?: TerminalSessionCreateNestedManyWithoutParentInput
  }

  export type TerminalSessionUncheckedCreateWithoutPresencesInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedCreateNestedManyWithoutParentInput
  }

  export type TerminalSessionCreateOrConnectWithoutPresencesInput = {
    where: TerminalSessionWhereUniqueInput
    create: XOR<TerminalSessionCreateWithoutPresencesInput, TerminalSessionUncheckedCreateWithoutPresencesInput>
  }

  export type UserUpsertWithoutSessionPresenceInput = {
    update: XOR<UserUpdateWithoutSessionPresenceInput, UserUncheckedUpdateWithoutSessionPresenceInput>
    create: XOR<UserCreateWithoutSessionPresenceInput, UserUncheckedCreateWithoutSessionPresenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionPresenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionPresenceInput, UserUncheckedUpdateWithoutSessionPresenceInput>
  }

  export type UserUpdateWithoutSessionPresenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionPresenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUTKey?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    terminalSessions?: TerminalSessionUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    apiClients?: ApiClientUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TerminalSessionUpsertWithoutPresencesInput = {
    update: XOR<TerminalSessionUpdateWithoutPresencesInput, TerminalSessionUncheckedUpdateWithoutPresencesInput>
    create: XOR<TerminalSessionCreateWithoutPresencesInput, TerminalSessionUncheckedCreateWithoutPresencesInput>
    where?: TerminalSessionWhereInput
  }

  export type TerminalSessionUpdateToOneWithWhereWithoutPresencesInput = {
    where?: TerminalSessionWhereInput
    data: XOR<TerminalSessionUpdateWithoutPresencesInput, TerminalSessionUncheckedUpdateWithoutPresencesInput>
  }

  export type TerminalSessionUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    user?: UserUpdateOneRequiredWithoutTerminalSessionsNestedInput
    project?: ProjectUpdateOneWithoutSessionsNestedInput
    parent?: TerminalSessionUpdateOneWithoutChildrenNestedInput
    children?: TerminalSessionUpdateManyWithoutParentNestedInput
  }

  export type TerminalSessionUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TerminalSessionCreateManyUserInput = {
    id?: string
    name: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title?: string | null
    body: string
    status?: $Enums.TaskStatus
    source?: $Enums.TaskSource
    agentId?: $Enums.AgentProvider | null
    repository?: string | null
    mountPoint?: string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiClientCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    folder: string
    shared?: boolean
    defaultCliId?: $Enums.AgentProvider | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TerminalSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    project?: ProjectUpdateOneWithoutSessionsNestedInput
    parent?: TerminalSessionUpdateOneWithoutChildrenNestedInput
    children?: TerminalSessionUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: TaskExecutionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: TaskExecutionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    agentId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
    mountPoint?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?:unknown | NullableJsonNullValueInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secrets?: ApiSecretUpdateManyWithoutClientNestedInput
    callLogs?: ApiCallLogUpdateManyWithoutClientNestedInput
  }

  export type ApiClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secrets?: ApiSecretUncheckedUpdateManyWithoutClientNestedInput
    callLogs?: ApiCallLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ApiClientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TerminalSessionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TerminalSessionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    folder?: StringFieldUpdateOperationsInput | string
    shared?: BoolFieldUpdateOperationsInput | boolean
    defaultCliId?: NullableEnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalSessionCreateManyParentInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    projectId?: string | null
    relationType?: $Enums.SessionRelationType | null
  }

  export type SessionPresenceCreateManySessionInput = {
    userId: string
    status?: $Enums.PresenceStatus
    lastSeen?: Date | string
  }

  export type TerminalSessionUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    user?: UserUpdateOneRequiredWithoutTerminalSessionsNestedInput
    project?: ProjectUpdateOneWithoutSessionsNestedInput
    children?: TerminalSessionUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
  }

  export type SessionPresenceUpdateWithoutSessionInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionPresenceNestedInput
  }

  export type SessionPresenceUncheckedUpdateWithoutSessionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionPresenceUncheckedUpdateManyWithoutSessionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TerminalSessionCreateManyProjectInput = {
    id?: string
    name: string
    userId: string
    status?: $Enums.TerminalSessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    port?: number | null
    wsPath?: string | null
    containerName?: string | null
    parentId?: string | null
    relationType?: $Enums.SessionRelationType | null
  }

  export type TerminalSessionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    user?: UserUpdateOneRequiredWithoutTerminalSessionsNestedInput
    parent?: TerminalSessionUpdateOneWithoutChildrenNestedInput
    children?: TerminalSessionUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
    children?: TerminalSessionUncheckedUpdateManyWithoutParentNestedInput
    presences?: SessionPresenceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TerminalSessionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTerminalSessionStatusFieldUpdateOperationsInput | $Enums.TerminalSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    wsPath?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    relationType?: NullableEnumSessionRelationTypeFieldUpdateOperationsInput | $Enums.SessionRelationType | null
  }

  export type TaskExecutionCreateManyTaskInput = {
    id?: string
    status?: $Enums.TaskExecutionStatus
    agentId: $Enums.AgentProvider
    jobId?: string | null
    containerName?: string | null
    completed?: boolean
    needsInput?: boolean
    inputRequest?: string | null
    result?: string | null
    errorMessage?: string | null
    logs?: string | null
    memoryUsage?: number | null
    tokenCount?: number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskExecutionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskExecutionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskExecutionStatusFieldUpdateOperationsInput | $Enums.TaskExecutionStatus
    agentId?: EnumAgentProviderFieldUpdateOperationsInput | $Enums.AgentProvider
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    containerName?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    needsInput?: BoolFieldUpdateOperationsInput | boolean
    inputRequest?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    memoryUsage?: NullableIntFieldUpdateOperationsInput | number | null
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    context?:unknown | NullableJsonNullValueInput
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiSecretCreateManyClientInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiCallLogCreateManyClientInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    ipAddress?: string | null
    userAgent?: string | null
    requestBody?: string | null
    responseMs?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ApiSecretUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiSecretUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiSecretUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallLogUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallLogUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallLogUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}