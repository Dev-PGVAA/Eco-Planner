
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TimeBlock
 * 
 */
export type TimeBlock = $Result.DefaultSelection<Prisma.$TimeBlockPayload>
/**
 * Model TimerSession
 * 
 */
export type TimerSession = $Result.DefaultSelection<Prisma.$TimerSessionPayload>
/**
 * Model TimerRound
 * 
 */
export type TimerRound = $Result.DefaultSelection<Prisma.$TimerRoundPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  urgent: 'urgent',
  critical: 'critical'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.timeBlock`: Exposes CRUD operations for the **TimeBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeBlocks
    * const timeBlocks = await prisma.timeBlock.findMany()
    * ```
    */
  get timeBlock(): Prisma.TimeBlockDelegate<ExtArgs>;

  /**
   * `prisma.timerSession`: Exposes CRUD operations for the **TimerSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimerSessions
    * const timerSessions = await prisma.timerSession.findMany()
    * ```
    */
  get timerSession(): Prisma.TimerSessionDelegate<ExtArgs>;

  /**
   * `prisma.timerRound`: Exposes CRUD operations for the **TimerRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimerRounds
    * const timerRounds = await prisma.timerRound.findMany()
    * ```
    */
  get timerRound(): Prisma.TimerRoundDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Task: 'Task',
    TimeBlock: 'TimeBlock',
    TimerSession: 'TimerSession',
    TimerRound: 'TimerRound'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'task' | 'timeBlock' | 'timerSession' | 'timerRound'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TimeBlock: {
        payload: Prisma.$TimeBlockPayload<ExtArgs>
        fields: Prisma.TimeBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeBlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeBlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findFirst: {
            args: Prisma.TimeBlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeBlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findMany: {
            args: Prisma.TimeBlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          create: {
            args: Prisma.TimeBlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          createMany: {
            args: Prisma.TimeBlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimeBlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          update: {
            args: Prisma.TimeBlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          deleteMany: {
            args: Prisma.TimeBlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimeBlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimeBlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          aggregate: {
            args: Prisma.TimeBlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimeBlock>
          }
          groupBy: {
            args: Prisma.TimeBlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimeBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeBlockCountArgs<ExtArgs>,
            result: $Utils.Optional<TimeBlockCountAggregateOutputType> | number
          }
        }
      }
      TimerSession: {
        payload: Prisma.$TimerSessionPayload<ExtArgs>
        fields: Prisma.TimerSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimerSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimerSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          findFirst: {
            args: Prisma.TimerSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimerSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          findMany: {
            args: Prisma.TimerSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>[]
          }
          create: {
            args: Prisma.TimerSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          createMany: {
            args: Prisma.TimerSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimerSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          update: {
            args: Prisma.TimerSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          deleteMany: {
            args: Prisma.TimerSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimerSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimerSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          aggregate: {
            args: Prisma.TimerSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimerSession>
          }
          groupBy: {
            args: Prisma.TimerSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimerSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimerSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<TimerSessionCountAggregateOutputType> | number
          }
        }
      }
      TimerRound: {
        payload: Prisma.$TimerRoundPayload<ExtArgs>
        fields: Prisma.TimerRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimerRoundFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimerRoundFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>
          }
          findFirst: {
            args: Prisma.TimerRoundFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimerRoundFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>
          }
          findMany: {
            args: Prisma.TimerRoundFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>[]
          }
          create: {
            args: Prisma.TimerRoundCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>
          }
          createMany: {
            args: Prisma.TimerRoundCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimerRoundDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>
          }
          update: {
            args: Prisma.TimerRoundUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>
          }
          deleteMany: {
            args: Prisma.TimerRoundDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimerRoundUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimerRoundUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimerRoundPayload>
          }
          aggregate: {
            args: Prisma.TimerRoundAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimerRound>
          }
          groupBy: {
            args: Prisma.TimerRoundGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimerRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimerRoundCountArgs<ExtArgs>,
            result: $Utils.Optional<TimerRoundCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    tasks: number
    time_blocks: number
    timer_sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    time_blocks?: boolean | UserCountOutputTypeCountTime_blocksArgs
    timer_sessions?: boolean | UserCountOutputTypeCountTimer_sessionsArgs
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
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTime_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimer_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerSessionWhereInput
  }



  /**
   * Count Type TimerSessionCountOutputType
   */

  export type TimerSessionCountOutputType = {
    rounds: number
  }

  export type TimerSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | TimerSessionCountOutputTypeCountRoundsArgs
  }

  // Custom InputTypes

  /**
   * TimerSessionCountOutputType without action
   */
  export type TimerSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSessionCountOutputType
     */
    select?: TimerSessionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TimerSessionCountOutputType without action
   */
  export type TimerSessionCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerRoundWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserSumAggregateOutputType = {
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    password: number
    breakInterval: number
    intervalsCount: number
    workInterval: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserSumAggregateInputType = {
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    password: string
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    breakInterval?: boolean
    intervalsCount?: boolean
    workInterval?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    time_blocks?: boolean | User$time_blocksArgs<ExtArgs>
    timer_sessions?: boolean | User$timer_sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    breakInterval?: boolean
    intervalsCount?: boolean
    workInterval?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    time_blocks?: boolean | User$time_blocksArgs<ExtArgs>
    timer_sessions?: boolean | User$timer_sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      time_blocks: Prisma.$TimeBlockPayload<ExtArgs>[]
      timer_sessions: Prisma.$TimerSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
      password: string
      breakInterval: number | null
      intervalsCount: number | null
      workInterval: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    time_blocks<T extends User$time_blocksArgs<ExtArgs> = {}>(args?: Subset<T, User$time_blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    timer_sessions<T extends User$timer_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$timer_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly breakInterval: FieldRef<"User", 'Int'>
    readonly intervalsCount: FieldRef<"User", 'Int'>
    readonly workInterval: FieldRef<"User", 'Int'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User.time_blocks
   */
  export type User$time_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    cursor?: TimeBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }


  /**
   * User.timer_sessions
   */
  export type User$timer_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    where?: TimerSessionWhereInput
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    cursor?: TimerSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isCompleted: boolean | null
    userId: string | null
    priority: $Enums.Priority | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isCompleted: boolean | null
    userId: string | null
    priority: $Enums.Priority | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    isCompleted: number
    userId: number
    priority: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isCompleted?: true
    userId?: true
    priority?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isCompleted?: true
    userId?: true
    priority?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isCompleted?: true
    userId?: true
    priority?: true
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
    createdAt: Date
    updatedAt: Date
    name: string
    isCompleted: boolean | null
    userId: string
    priority: $Enums.Priority | null
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
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isCompleted?: boolean
    userId?: boolean
    priority?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isCompleted?: boolean
    userId?: boolean
    priority?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      isCompleted: boolean | null
      userId: string
      priority: $Enums.Priority | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly name: FieldRef<"Task", 'String'>
    readonly isCompleted: FieldRef<"Task", 'Boolean'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'Priority'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
  }



  /**
   * Model TimeBlock
   */

  export type AggregateTimeBlock = {
    _count: TimeBlockCountAggregateOutputType | null
    _avg: TimeBlockAvgAggregateOutputType | null
    _sum: TimeBlockSumAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  export type TimeBlockAvgAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type TimeBlockSumAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type TimeBlockMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    color: string | null
    duration: number | null
    order: number | null
    userId: string | null
  }

  export type TimeBlockMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    color: string | null
    duration: number | null
    order: number | null
    userId: string | null
  }

  export type TimeBlockCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    color: number
    duration: number
    order: number
    userId: number
    _all: number
  }


  export type TimeBlockAvgAggregateInputType = {
    duration?: true
    order?: true
  }

  export type TimeBlockSumAggregateInputType = {
    duration?: true
    order?: true
  }

  export type TimeBlockMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    duration?: true
    order?: true
    userId?: true
  }

  export type TimeBlockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    duration?: true
    order?: true
    userId?: true
  }

  export type TimeBlockCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    duration?: true
    order?: true
    userId?: true
    _all?: true
  }

  export type TimeBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlock to aggregate.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeBlocks
    **/
    _count?: true | TimeBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeBlockMaxAggregateInputType
  }

  export type GetTimeBlockAggregateType<T extends TimeBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeBlock[P]>
      : GetScalarType<T[P], AggregateTimeBlock[P]>
  }




  export type TimeBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithAggregationInput | TimeBlockOrderByWithAggregationInput[]
    by: TimeBlockScalarFieldEnum[] | TimeBlockScalarFieldEnum
    having?: TimeBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeBlockCountAggregateInputType | true
    _avg?: TimeBlockAvgAggregateInputType
    _sum?: TimeBlockSumAggregateInputType
    _min?: TimeBlockMinAggregateInputType
    _max?: TimeBlockMaxAggregateInputType
  }

  export type TimeBlockGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    color: string | null
    duration: number
    order: number
    userId: string
    _count: TimeBlockCountAggregateOutputType | null
    _avg: TimeBlockAvgAggregateOutputType | null
    _sum: TimeBlockSumAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  type GetTimeBlockGroupByPayload<T extends TimeBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
            : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
        }
      >
    >


  export type TimeBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    duration?: boolean
    order?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    duration?: boolean
    order?: boolean
    userId?: boolean
  }

  export type TimeBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TimeBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeBlock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      color: string | null
      duration: number
      order: number
      userId: string
    }, ExtArgs["result"]["timeBlock"]>
    composites: {}
  }


  type TimeBlockGetPayload<S extends boolean | null | undefined | TimeBlockDefaultArgs> = $Result.GetResult<Prisma.$TimeBlockPayload, S>

  type TimeBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeBlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeBlockCountAggregateInputType | true
    }

  export interface TimeBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeBlock'], meta: { name: 'TimeBlock' } }
    /**
     * Find zero or one TimeBlock that matches the filter.
     * @param {TimeBlockFindUniqueArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimeBlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockFindUniqueArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TimeBlock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimeBlockFindUniqueOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimeBlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TimeBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimeBlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindFirstArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TimeBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimeBlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TimeBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany()
     * 
     * // Get first 10 TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimeBlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TimeBlock.
     * @param {TimeBlockCreateArgs} args - Arguments to create a TimeBlock.
     * @example
     * // Create one TimeBlock
     * const TimeBlock = await prisma.timeBlock.create({
     *   data: {
     *     // ... data to create a TimeBlock
     *   }
     * })
     * 
    **/
    create<T extends TimeBlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockCreateArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TimeBlocks.
     *     @param {TimeBlockCreateManyArgs} args - Arguments to create many TimeBlocks.
     *     @example
     *     // Create many TimeBlocks
     *     const timeBlock = await prisma.timeBlock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimeBlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimeBlock.
     * @param {TimeBlockDeleteArgs} args - Arguments to delete one TimeBlock.
     * @example
     * // Delete one TimeBlock
     * const TimeBlock = await prisma.timeBlock.delete({
     *   where: {
     *     // ... filter to delete one TimeBlock
     *   }
     * })
     * 
    **/
    delete<T extends TimeBlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockDeleteArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TimeBlock.
     * @param {TimeBlockUpdateArgs} args - Arguments to update one TimeBlock.
     * @example
     * // Update one TimeBlock
     * const timeBlock = await prisma.timeBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimeBlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockUpdateArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TimeBlocks.
     * @param {TimeBlockDeleteManyArgs} args - Arguments to filter TimeBlocks to delete.
     * @example
     * // Delete a few TimeBlocks
     * const { count } = await prisma.timeBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimeBlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeBlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeBlocks
     * const timeBlock = await prisma.timeBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimeBlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeBlock.
     * @param {TimeBlockUpsertArgs} args - Arguments to update or create a TimeBlock.
     * @example
     * // Update or create a TimeBlock
     * const timeBlock = await prisma.timeBlock.upsert({
     *   create: {
     *     // ... data to create a TimeBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeBlock we want to update
     *   }
     * })
    **/
    upsert<T extends TimeBlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimeBlockUpsertArgs<ExtArgs>>
    ): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockCountArgs} args - Arguments to filter TimeBlocks to count.
     * @example
     * // Count the number of TimeBlocks
     * const count = await prisma.timeBlock.count({
     *   where: {
     *     // ... the filter for the TimeBlocks we want to count
     *   }
     * })
    **/
    count<T extends TimeBlockCountArgs>(
      args?: Subset<T, TimeBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeBlockAggregateArgs>(args: Subset<T, TimeBlockAggregateArgs>): Prisma.PrismaPromise<GetTimeBlockAggregateType<T>>

    /**
     * Group by TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockGroupByArgs} args - Group by arguments.
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
      T extends TimeBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeBlockGroupByArgs['orderBy'] }
        : { orderBy?: TimeBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeBlock model
   */
  readonly fields: TimeBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TimeBlock model
   */ 
  interface TimeBlockFieldRefs {
    readonly id: FieldRef<"TimeBlock", 'String'>
    readonly createdAt: FieldRef<"TimeBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeBlock", 'DateTime'>
    readonly name: FieldRef<"TimeBlock", 'String'>
    readonly color: FieldRef<"TimeBlock", 'String'>
    readonly duration: FieldRef<"TimeBlock", 'Int'>
    readonly order: FieldRef<"TimeBlock", 'Int'>
    readonly userId: FieldRef<"TimeBlock", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TimeBlock findUnique
   */
  export type TimeBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }


  /**
   * TimeBlock findUniqueOrThrow
   */
  export type TimeBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }


  /**
   * TimeBlock findFirst
   */
  export type TimeBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }


  /**
   * TimeBlock findFirstOrThrow
   */
  export type TimeBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }


  /**
   * TimeBlock findMany
   */
  export type TimeBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlocks to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }


  /**
   * TimeBlock create
   */
  export type TimeBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeBlock.
     */
    data: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
  }


  /**
   * TimeBlock createMany
   */
  export type TimeBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeBlocks.
     */
    data: TimeBlockCreateManyInput | TimeBlockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TimeBlock update
   */
  export type TimeBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeBlock.
     */
    data: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
    /**
     * Choose, which TimeBlock to update.
     */
    where: TimeBlockWhereUniqueInput
  }


  /**
   * TimeBlock updateMany
   */
  export type TimeBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeBlocks.
     */
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyInput>
    /**
     * Filter which TimeBlocks to update
     */
    where?: TimeBlockWhereInput
  }


  /**
   * TimeBlock upsert
   */
  export type TimeBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeBlock to update in case it exists.
     */
    where: TimeBlockWhereUniqueInput
    /**
     * In case the TimeBlock found by the `where` argument doesn't exist, create a new TimeBlock with this data.
     */
    create: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
    /**
     * In case the TimeBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
  }


  /**
   * TimeBlock delete
   */
  export type TimeBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter which TimeBlock to delete.
     */
    where: TimeBlockWhereUniqueInput
  }


  /**
   * TimeBlock deleteMany
   */
  export type TimeBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlocks to delete
     */
    where?: TimeBlockWhereInput
  }


  /**
   * TimeBlock without action
   */
  export type TimeBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeBlockInclude<ExtArgs> | null
  }



  /**
   * Model TimerSession
   */

  export type AggregateTimerSession = {
    _count: TimerSessionCountAggregateOutputType | null
    _min: TimerSessionMinAggregateOutputType | null
    _max: TimerSessionMaxAggregateOutputType | null
  }

  export type TimerSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: string | null
  }

  export type TimerSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: string | null
  }

  export type TimerSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isCompleted: number
    userId: number
    _all: number
  }


  export type TimerSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
  }

  export type TimerSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
  }

  export type TimerSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    _all?: true
  }

  export type TimerSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimerSession to aggregate.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimerSessions
    **/
    _count?: true | TimerSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimerSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimerSessionMaxAggregateInputType
  }

  export type GetTimerSessionAggregateType<T extends TimerSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTimerSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimerSession[P]>
      : GetScalarType<T[P], AggregateTimerSession[P]>
  }




  export type TimerSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerSessionWhereInput
    orderBy?: TimerSessionOrderByWithAggregationInput | TimerSessionOrderByWithAggregationInput[]
    by: TimerSessionScalarFieldEnum[] | TimerSessionScalarFieldEnum
    having?: TimerSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimerSessionCountAggregateInputType | true
    _min?: TimerSessionMinAggregateInputType
    _max?: TimerSessionMaxAggregateInputType
  }

  export type TimerSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isCompleted: boolean | null
    userId: string
    _count: TimerSessionCountAggregateOutputType | null
    _min: TimerSessionMinAggregateOutputType | null
    _max: TimerSessionMaxAggregateOutputType | null
  }

  type GetTimerSessionGroupByPayload<T extends TimerSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimerSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimerSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimerSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TimerSessionGroupByOutputType[P]>
        }
      >
    >


  export type TimerSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    rounds?: boolean | TimerSession$roundsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TimerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timerSession"]>

  export type TimerSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
  }

  export type TimerSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | TimerSession$roundsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TimerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TimerSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimerSession"
    objects: {
      rounds: Prisma.$TimerRoundPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      isCompleted: boolean | null
      userId: string
    }, ExtArgs["result"]["timerSession"]>
    composites: {}
  }


  type TimerSessionGetPayload<S extends boolean | null | undefined | TimerSessionDefaultArgs> = $Result.GetResult<Prisma.$TimerSessionPayload, S>

  type TimerSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimerSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimerSessionCountAggregateInputType | true
    }

  export interface TimerSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimerSession'], meta: { name: 'TimerSession' } }
    /**
     * Find zero or one TimerSession that matches the filter.
     * @param {TimerSessionFindUniqueArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimerSessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TimerSessionFindUniqueArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TimerSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimerSessionFindUniqueOrThrowArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimerSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TimerSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionFindFirstArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimerSessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerSessionFindFirstArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TimerSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionFindFirstOrThrowArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimerSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TimerSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimerSessions
     * const timerSessions = await prisma.timerSession.findMany()
     * 
     * // Get first 10 TimerSessions
     * const timerSessions = await prisma.timerSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timerSessionWithIdOnly = await prisma.timerSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimerSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TimerSession.
     * @param {TimerSessionCreateArgs} args - Arguments to create a TimerSession.
     * @example
     * // Create one TimerSession
     * const TimerSession = await prisma.timerSession.create({
     *   data: {
     *     // ... data to create a TimerSession
     *   }
     * })
     * 
    **/
    create<T extends TimerSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimerSessionCreateArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TimerSessions.
     *     @param {TimerSessionCreateManyArgs} args - Arguments to create many TimerSessions.
     *     @example
     *     // Create many TimerSessions
     *     const timerSession = await prisma.timerSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimerSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimerSession.
     * @param {TimerSessionDeleteArgs} args - Arguments to delete one TimerSession.
     * @example
     * // Delete one TimerSession
     * const TimerSession = await prisma.timerSession.delete({
     *   where: {
     *     // ... filter to delete one TimerSession
     *   }
     * })
     * 
    **/
    delete<T extends TimerSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimerSessionDeleteArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TimerSession.
     * @param {TimerSessionUpdateArgs} args - Arguments to update one TimerSession.
     * @example
     * // Update one TimerSession
     * const timerSession = await prisma.timerSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimerSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimerSessionUpdateArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TimerSessions.
     * @param {TimerSessionDeleteManyArgs} args - Arguments to filter TimerSessions to delete.
     * @example
     * // Delete a few TimerSessions
     * const { count } = await prisma.timerSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimerSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimerSessions
     * const timerSession = await prisma.timerSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimerSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimerSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimerSession.
     * @param {TimerSessionUpsertArgs} args - Arguments to update or create a TimerSession.
     * @example
     * // Update or create a TimerSession
     * const timerSession = await prisma.timerSession.upsert({
     *   create: {
     *     // ... data to create a TimerSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimerSession we want to update
     *   }
     * })
    **/
    upsert<T extends TimerSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimerSessionUpsertArgs<ExtArgs>>
    ): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TimerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionCountArgs} args - Arguments to filter TimerSessions to count.
     * @example
     * // Count the number of TimerSessions
     * const count = await prisma.timerSession.count({
     *   where: {
     *     // ... the filter for the TimerSessions we want to count
     *   }
     * })
    **/
    count<T extends TimerSessionCountArgs>(
      args?: Subset<T, TimerSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimerSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimerSessionAggregateArgs>(args: Subset<T, TimerSessionAggregateArgs>): Prisma.PrismaPromise<GetTimerSessionAggregateType<T>>

    /**
     * Group by TimerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionGroupByArgs} args - Group by arguments.
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
      T extends TimerSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimerSessionGroupByArgs['orderBy'] }
        : { orderBy?: TimerSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimerSession model
   */
  readonly fields: TimerSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimerSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimerSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rounds<T extends TimerSession$roundsArgs<ExtArgs> = {}>(args?: Subset<T, TimerSession$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TimerSession model
   */ 
  interface TimerSessionFieldRefs {
    readonly id: FieldRef<"TimerSession", 'String'>
    readonly createdAt: FieldRef<"TimerSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TimerSession", 'DateTime'>
    readonly isCompleted: FieldRef<"TimerSession", 'Boolean'>
    readonly userId: FieldRef<"TimerSession", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TimerSession findUnique
   */
  export type TimerSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where: TimerSessionWhereUniqueInput
  }


  /**
   * TimerSession findUniqueOrThrow
   */
  export type TimerSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where: TimerSessionWhereUniqueInput
  }


  /**
   * TimerSession findFirst
   */
  export type TimerSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimerSessions.
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimerSessions.
     */
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }


  /**
   * TimerSession findFirstOrThrow
   */
  export type TimerSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimerSessions.
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimerSessions.
     */
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }


  /**
   * TimerSession findMany
   */
  export type TimerSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSessions to fetch.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimerSessions.
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }


  /**
   * TimerSession create
   */
  export type TimerSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TimerSession.
     */
    data: XOR<TimerSessionCreateInput, TimerSessionUncheckedCreateInput>
  }


  /**
   * TimerSession createMany
   */
  export type TimerSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimerSessions.
     */
    data: TimerSessionCreateManyInput | TimerSessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TimerSession update
   */
  export type TimerSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TimerSession.
     */
    data: XOR<TimerSessionUpdateInput, TimerSessionUncheckedUpdateInput>
    /**
     * Choose, which TimerSession to update.
     */
    where: TimerSessionWhereUniqueInput
  }


  /**
   * TimerSession updateMany
   */
  export type TimerSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimerSessions.
     */
    data: XOR<TimerSessionUpdateManyMutationInput, TimerSessionUncheckedUpdateManyInput>
    /**
     * Filter which TimerSessions to update
     */
    where?: TimerSessionWhereInput
  }


  /**
   * TimerSession upsert
   */
  export type TimerSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TimerSession to update in case it exists.
     */
    where: TimerSessionWhereUniqueInput
    /**
     * In case the TimerSession found by the `where` argument doesn't exist, create a new TimerSession with this data.
     */
    create: XOR<TimerSessionCreateInput, TimerSessionUncheckedCreateInput>
    /**
     * In case the TimerSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimerSessionUpdateInput, TimerSessionUncheckedUpdateInput>
  }


  /**
   * TimerSession delete
   */
  export type TimerSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter which TimerSession to delete.
     */
    where: TimerSessionWhereUniqueInput
  }


  /**
   * TimerSession deleteMany
   */
  export type TimerSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimerSessions to delete
     */
    where?: TimerSessionWhereInput
  }


  /**
   * TimerSession.rounds
   */
  export type TimerSession$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    where?: TimerRoundWhereInput
    orderBy?: TimerRoundOrderByWithRelationInput | TimerRoundOrderByWithRelationInput[]
    cursor?: TimerRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimerRoundScalarFieldEnum | TimerRoundScalarFieldEnum[]
  }


  /**
   * TimerSession without action
   */
  export type TimerSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerSessionInclude<ExtArgs> | null
  }



  /**
   * Model TimerRound
   */

  export type AggregateTimerRound = {
    _count: TimerRoundCountAggregateOutputType | null
    _avg: TimerRoundAvgAggregateOutputType | null
    _sum: TimerRoundSumAggregateOutputType | null
    _min: TimerRoundMinAggregateOutputType | null
    _max: TimerRoundMaxAggregateOutputType | null
  }

  export type TimerRoundAvgAggregateOutputType = {
    totalSeconds: number | null
  }

  export type TimerRoundSumAggregateOutputType = {
    totalSeconds: number | null
  }

  export type TimerRoundMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    totalSeconds: number | null
    isCompleted: boolean | null
    timerSessionId: string | null
  }

  export type TimerRoundMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    totalSeconds: number | null
    isCompleted: boolean | null
    timerSessionId: string | null
  }

  export type TimerRoundCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    totalSeconds: number
    isCompleted: number
    timerSessionId: number
    _all: number
  }


  export type TimerRoundAvgAggregateInputType = {
    totalSeconds?: true
  }

  export type TimerRoundSumAggregateInputType = {
    totalSeconds?: true
  }

  export type TimerRoundMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    totalSeconds?: true
    isCompleted?: true
    timerSessionId?: true
  }

  export type TimerRoundMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    totalSeconds?: true
    isCompleted?: true
    timerSessionId?: true
  }

  export type TimerRoundCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    totalSeconds?: true
    isCompleted?: true
    timerSessionId?: true
    _all?: true
  }

  export type TimerRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimerRound to aggregate.
     */
    where?: TimerRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerRounds to fetch.
     */
    orderBy?: TimerRoundOrderByWithRelationInput | TimerRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimerRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimerRounds
    **/
    _count?: true | TimerRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimerRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimerRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimerRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimerRoundMaxAggregateInputType
  }

  export type GetTimerRoundAggregateType<T extends TimerRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateTimerRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimerRound[P]>
      : GetScalarType<T[P], AggregateTimerRound[P]>
  }




  export type TimerRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerRoundWhereInput
    orderBy?: TimerRoundOrderByWithAggregationInput | TimerRoundOrderByWithAggregationInput[]
    by: TimerRoundScalarFieldEnum[] | TimerRoundScalarFieldEnum
    having?: TimerRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimerRoundCountAggregateInputType | true
    _avg?: TimerRoundAvgAggregateInputType
    _sum?: TimerRoundSumAggregateInputType
    _min?: TimerRoundMinAggregateInputType
    _max?: TimerRoundMaxAggregateInputType
  }

  export type TimerRoundGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    totalSeconds: number
    isCompleted: boolean | null
    timerSessionId: string
    _count: TimerRoundCountAggregateOutputType | null
    _avg: TimerRoundAvgAggregateOutputType | null
    _sum: TimerRoundSumAggregateOutputType | null
    _min: TimerRoundMinAggregateOutputType | null
    _max: TimerRoundMaxAggregateOutputType | null
  }

  type GetTimerRoundGroupByPayload<T extends TimerRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimerRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimerRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimerRoundGroupByOutputType[P]>
            : GetScalarType<T[P], TimerRoundGroupByOutputType[P]>
        }
      >
    >


  export type TimerRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalSeconds?: boolean
    isCompleted?: boolean
    timerSessionId?: boolean
    timerSession?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timerRound"]>

  export type TimerRoundSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalSeconds?: boolean
    isCompleted?: boolean
    timerSessionId?: boolean
  }

  export type TimerRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timerSession?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }


  export type $TimerRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimerRound"
    objects: {
      timerSession: Prisma.$TimerSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      totalSeconds: number
      isCompleted: boolean | null
      timerSessionId: string
    }, ExtArgs["result"]["timerRound"]>
    composites: {}
  }


  type TimerRoundGetPayload<S extends boolean | null | undefined | TimerRoundDefaultArgs> = $Result.GetResult<Prisma.$TimerRoundPayload, S>

  type TimerRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimerRoundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimerRoundCountAggregateInputType | true
    }

  export interface TimerRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimerRound'], meta: { name: 'TimerRound' } }
    /**
     * Find zero or one TimerRound that matches the filter.
     * @param {TimerRoundFindUniqueArgs} args - Arguments to find a TimerRound
     * @example
     * // Get one TimerRound
     * const timerRound = await prisma.timerRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimerRoundFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TimerRoundFindUniqueArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TimerRound that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimerRoundFindUniqueOrThrowArgs} args - Arguments to find a TimerRound
     * @example
     * // Get one TimerRound
     * const timerRound = await prisma.timerRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimerRoundFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerRoundFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TimerRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundFindFirstArgs} args - Arguments to find a TimerRound
     * @example
     * // Get one TimerRound
     * const timerRound = await prisma.timerRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimerRoundFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerRoundFindFirstArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TimerRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundFindFirstOrThrowArgs} args - Arguments to find a TimerRound
     * @example
     * // Get one TimerRound
     * const timerRound = await prisma.timerRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimerRoundFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerRoundFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TimerRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimerRounds
     * const timerRounds = await prisma.timerRound.findMany()
     * 
     * // Get first 10 TimerRounds
     * const timerRounds = await prisma.timerRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timerRoundWithIdOnly = await prisma.timerRound.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimerRoundFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerRoundFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TimerRound.
     * @param {TimerRoundCreateArgs} args - Arguments to create a TimerRound.
     * @example
     * // Create one TimerRound
     * const TimerRound = await prisma.timerRound.create({
     *   data: {
     *     // ... data to create a TimerRound
     *   }
     * })
     * 
    **/
    create<T extends TimerRoundCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimerRoundCreateArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TimerRounds.
     *     @param {TimerRoundCreateManyArgs} args - Arguments to create many TimerRounds.
     *     @example
     *     // Create many TimerRounds
     *     const timerRound = await prisma.timerRound.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimerRoundCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerRoundCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimerRound.
     * @param {TimerRoundDeleteArgs} args - Arguments to delete one TimerRound.
     * @example
     * // Delete one TimerRound
     * const TimerRound = await prisma.timerRound.delete({
     *   where: {
     *     // ... filter to delete one TimerRound
     *   }
     * })
     * 
    **/
    delete<T extends TimerRoundDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimerRoundDeleteArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TimerRound.
     * @param {TimerRoundUpdateArgs} args - Arguments to update one TimerRound.
     * @example
     * // Update one TimerRound
     * const timerRound = await prisma.timerRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimerRoundUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimerRoundUpdateArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TimerRounds.
     * @param {TimerRoundDeleteManyArgs} args - Arguments to filter TimerRounds to delete.
     * @example
     * // Delete a few TimerRounds
     * const { count } = await prisma.timerRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimerRoundDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimerRoundDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimerRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimerRounds
     * const timerRound = await prisma.timerRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimerRoundUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimerRoundUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimerRound.
     * @param {TimerRoundUpsertArgs} args - Arguments to update or create a TimerRound.
     * @example
     * // Update or create a TimerRound
     * const timerRound = await prisma.timerRound.upsert({
     *   create: {
     *     // ... data to create a TimerRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimerRound we want to update
     *   }
     * })
    **/
    upsert<T extends TimerRoundUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimerRoundUpsertArgs<ExtArgs>>
    ): Prisma__TimerRoundClient<$Result.GetResult<Prisma.$TimerRoundPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TimerRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundCountArgs} args - Arguments to filter TimerRounds to count.
     * @example
     * // Count the number of TimerRounds
     * const count = await prisma.timerRound.count({
     *   where: {
     *     // ... the filter for the TimerRounds we want to count
     *   }
     * })
    **/
    count<T extends TimerRoundCountArgs>(
      args?: Subset<T, TimerRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimerRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimerRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimerRoundAggregateArgs>(args: Subset<T, TimerRoundAggregateArgs>): Prisma.PrismaPromise<GetTimerRoundAggregateType<T>>

    /**
     * Group by TimerRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerRoundGroupByArgs} args - Group by arguments.
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
      T extends TimerRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimerRoundGroupByArgs['orderBy'] }
        : { orderBy?: TimerRoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimerRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimerRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimerRound model
   */
  readonly fields: TimerRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimerRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimerRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    timerSession<T extends TimerSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimerSessionDefaultArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TimerRound model
   */ 
  interface TimerRoundFieldRefs {
    readonly id: FieldRef<"TimerRound", 'String'>
    readonly createdAt: FieldRef<"TimerRound", 'DateTime'>
    readonly updatedAt: FieldRef<"TimerRound", 'DateTime'>
    readonly totalSeconds: FieldRef<"TimerRound", 'Int'>
    readonly isCompleted: FieldRef<"TimerRound", 'Boolean'>
    readonly timerSessionId: FieldRef<"TimerRound", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TimerRound findUnique
   */
  export type TimerRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * Filter, which TimerRound to fetch.
     */
    where: TimerRoundWhereUniqueInput
  }


  /**
   * TimerRound findUniqueOrThrow
   */
  export type TimerRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * Filter, which TimerRound to fetch.
     */
    where: TimerRoundWhereUniqueInput
  }


  /**
   * TimerRound findFirst
   */
  export type TimerRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * Filter, which TimerRound to fetch.
     */
    where?: TimerRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerRounds to fetch.
     */
    orderBy?: TimerRoundOrderByWithRelationInput | TimerRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimerRounds.
     */
    cursor?: TimerRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimerRounds.
     */
    distinct?: TimerRoundScalarFieldEnum | TimerRoundScalarFieldEnum[]
  }


  /**
   * TimerRound findFirstOrThrow
   */
  export type TimerRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * Filter, which TimerRound to fetch.
     */
    where?: TimerRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerRounds to fetch.
     */
    orderBy?: TimerRoundOrderByWithRelationInput | TimerRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimerRounds.
     */
    cursor?: TimerRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimerRounds.
     */
    distinct?: TimerRoundScalarFieldEnum | TimerRoundScalarFieldEnum[]
  }


  /**
   * TimerRound findMany
   */
  export type TimerRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * Filter, which TimerRounds to fetch.
     */
    where?: TimerRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerRounds to fetch.
     */
    orderBy?: TimerRoundOrderByWithRelationInput | TimerRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimerRounds.
     */
    cursor?: TimerRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerRounds.
     */
    skip?: number
    distinct?: TimerRoundScalarFieldEnum | TimerRoundScalarFieldEnum[]
  }


  /**
   * TimerRound create
   */
  export type TimerRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a TimerRound.
     */
    data: XOR<TimerRoundCreateInput, TimerRoundUncheckedCreateInput>
  }


  /**
   * TimerRound createMany
   */
  export type TimerRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimerRounds.
     */
    data: TimerRoundCreateManyInput | TimerRoundCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TimerRound update
   */
  export type TimerRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a TimerRound.
     */
    data: XOR<TimerRoundUpdateInput, TimerRoundUncheckedUpdateInput>
    /**
     * Choose, which TimerRound to update.
     */
    where: TimerRoundWhereUniqueInput
  }


  /**
   * TimerRound updateMany
   */
  export type TimerRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimerRounds.
     */
    data: XOR<TimerRoundUpdateManyMutationInput, TimerRoundUncheckedUpdateManyInput>
    /**
     * Filter which TimerRounds to update
     */
    where?: TimerRoundWhereInput
  }


  /**
   * TimerRound upsert
   */
  export type TimerRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the TimerRound to update in case it exists.
     */
    where: TimerRoundWhereUniqueInput
    /**
     * In case the TimerRound found by the `where` argument doesn't exist, create a new TimerRound with this data.
     */
    create: XOR<TimerRoundCreateInput, TimerRoundUncheckedCreateInput>
    /**
     * In case the TimerRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimerRoundUpdateInput, TimerRoundUncheckedUpdateInput>
  }


  /**
   * TimerRound delete
   */
  export type TimerRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
    /**
     * Filter which TimerRound to delete.
     */
    where: TimerRoundWhereUniqueInput
  }


  /**
   * TimerRound deleteMany
   */
  export type TimerRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimerRounds to delete
     */
    where?: TimerRoundWhereInput
  }


  /**
   * TimerRound without action
   */
  export type TimerRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerRound
     */
    select?: TimerRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimerRoundInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    password: 'password',
    breakInterval: 'breakInterval',
    intervalsCount: 'intervalsCount',
    workInterval: 'workInterval'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    isCompleted: 'isCompleted',
    userId: 'userId',
    priority: 'priority'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TimeBlockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    color: 'color',
    duration: 'duration',
    order: 'order',
    userId: 'userId'
  };

  export type TimeBlockScalarFieldEnum = (typeof TimeBlockScalarFieldEnum)[keyof typeof TimeBlockScalarFieldEnum]


  export const TimerSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isCompleted: 'isCompleted',
    userId: 'userId'
  };

  export type TimerSessionScalarFieldEnum = (typeof TimerSessionScalarFieldEnum)[keyof typeof TimerSessionScalarFieldEnum]


  export const TimerRoundScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    totalSeconds: 'totalSeconds',
    isCompleted: 'isCompleted',
    timerSessionId: 'timerSessionId'
  };

  export type TimerRoundScalarFieldEnum = (typeof TimerRoundScalarFieldEnum)[keyof typeof TimerRoundScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


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
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    breakInterval?: IntNullableFilter<"User"> | number | null
    intervalsCount?: IntNullableFilter<"User"> | number | null
    workInterval?: IntNullableFilter<"User"> | number | null
    tasks?: TaskListRelationFilter
    time_blocks?: TimeBlockListRelationFilter
    timer_sessions?: TimerSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    breakInterval?: SortOrderInput | SortOrder
    intervalsCount?: SortOrderInput | SortOrder
    workInterval?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    time_blocks?: TimeBlockOrderByRelationAggregateInput
    timer_sessions?: TimerSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    breakInterval?: IntNullableFilter<"User"> | number | null
    intervalsCount?: IntNullableFilter<"User"> | number | null
    workInterval?: IntNullableFilter<"User"> | number | null
    tasks?: TaskListRelationFilter
    time_blocks?: TimeBlockListRelationFilter
    timer_sessions?: TimerSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    breakInterval?: SortOrderInput | SortOrder
    intervalsCount?: SortOrderInput | SortOrder
    workInterval?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    breakInterval?: IntNullableWithAggregatesFilter<"User"> | number | null
    intervalsCount?: IntNullableWithAggregatesFilter<"User"> | number | null
    workInterval?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringFilter<"Task"> | string
    isCompleted?: BoolNullableFilter<"Task"> | boolean | null
    userId?: StringFilter<"Task"> | string
    priority?: EnumPriorityNullableFilter<"Task"> | $Enums.Priority | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    priority?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringFilter<"Task"> | string
    isCompleted?: BoolNullableFilter<"Task"> | boolean | null
    userId?: StringFilter<"Task"> | string
    priority?: EnumPriorityNullableFilter<"Task"> | $Enums.Priority | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    priority?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    name?: StringWithAggregatesFilter<"Task"> | string
    isCompleted?: BoolNullableWithAggregatesFilter<"Task"> | boolean | null
    userId?: StringWithAggregatesFilter<"Task"> | string
    priority?: EnumPriorityNullableWithAggregatesFilter<"Task"> | $Enums.Priority | null
  }

  export type TimeBlockWhereInput = {
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    id?: StringFilter<"TimeBlock"> | string
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    name?: StringFilter<"TimeBlock"> | string
    color?: StringNullableFilter<"TimeBlock"> | string | null
    duration?: IntFilter<"TimeBlock"> | number
    order?: IntFilter<"TimeBlock"> | number
    userId?: StringFilter<"TimeBlock"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimeBlockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    name?: StringFilter<"TimeBlock"> | string
    color?: StringNullableFilter<"TimeBlock"> | string | null
    duration?: IntFilter<"TimeBlock"> | number
    order?: IntFilter<"TimeBlock"> | number
    userId?: StringFilter<"TimeBlock"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TimeBlockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    _count?: TimeBlockCountOrderByAggregateInput
    _avg?: TimeBlockAvgOrderByAggregateInput
    _max?: TimeBlockMaxOrderByAggregateInput
    _min?: TimeBlockMinOrderByAggregateInput
    _sum?: TimeBlockSumOrderByAggregateInput
  }

  export type TimeBlockScalarWhereWithAggregatesInput = {
    AND?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    OR?: TimeBlockScalarWhereWithAggregatesInput[]
    NOT?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeBlock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    name?: StringWithAggregatesFilter<"TimeBlock"> | string
    color?: StringNullableWithAggregatesFilter<"TimeBlock"> | string | null
    duration?: IntWithAggregatesFilter<"TimeBlock"> | number
    order?: IntWithAggregatesFilter<"TimeBlock"> | number
    userId?: StringWithAggregatesFilter<"TimeBlock"> | string
  }

  export type TimerSessionWhereInput = {
    AND?: TimerSessionWhereInput | TimerSessionWhereInput[]
    OR?: TimerSessionWhereInput[]
    NOT?: TimerSessionWhereInput | TimerSessionWhereInput[]
    id?: StringFilter<"TimerSession"> | string
    createdAt?: DateTimeFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeFilter<"TimerSession"> | Date | string
    isCompleted?: BoolNullableFilter<"TimerSession"> | boolean | null
    userId?: StringFilter<"TimerSession"> | string
    rounds?: TimerRoundListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimerSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    rounds?: TimerRoundOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TimerSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimerSessionWhereInput | TimerSessionWhereInput[]
    OR?: TimerSessionWhereInput[]
    NOT?: TimerSessionWhereInput | TimerSessionWhereInput[]
    createdAt?: DateTimeFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeFilter<"TimerSession"> | Date | string
    isCompleted?: BoolNullableFilter<"TimerSession"> | boolean | null
    userId?: StringFilter<"TimerSession"> | string
    rounds?: TimerRoundListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TimerSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: TimerSessionCountOrderByAggregateInput
    _max?: TimerSessionMaxOrderByAggregateInput
    _min?: TimerSessionMinOrderByAggregateInput
  }

  export type TimerSessionScalarWhereWithAggregatesInput = {
    AND?: TimerSessionScalarWhereWithAggregatesInput | TimerSessionScalarWhereWithAggregatesInput[]
    OR?: TimerSessionScalarWhereWithAggregatesInput[]
    NOT?: TimerSessionScalarWhereWithAggregatesInput | TimerSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimerSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimerSession"> | Date | string
    isCompleted?: BoolNullableWithAggregatesFilter<"TimerSession"> | boolean | null
    userId?: StringWithAggregatesFilter<"TimerSession"> | string
  }

  export type TimerRoundWhereInput = {
    AND?: TimerRoundWhereInput | TimerRoundWhereInput[]
    OR?: TimerRoundWhereInput[]
    NOT?: TimerRoundWhereInput | TimerRoundWhereInput[]
    id?: StringFilter<"TimerRound"> | string
    createdAt?: DateTimeFilter<"TimerRound"> | Date | string
    updatedAt?: DateTimeFilter<"TimerRound"> | Date | string
    totalSeconds?: IntFilter<"TimerRound"> | number
    isCompleted?: BoolNullableFilter<"TimerRound"> | boolean | null
    timerSessionId?: StringFilter<"TimerRound"> | string
    timerSession?: XOR<TimerSessionRelationFilter, TimerSessionWhereInput>
  }

  export type TimerRoundOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalSeconds?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    timerSessionId?: SortOrder
    timerSession?: TimerSessionOrderByWithRelationInput
  }

  export type TimerRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimerRoundWhereInput | TimerRoundWhereInput[]
    OR?: TimerRoundWhereInput[]
    NOT?: TimerRoundWhereInput | TimerRoundWhereInput[]
    createdAt?: DateTimeFilter<"TimerRound"> | Date | string
    updatedAt?: DateTimeFilter<"TimerRound"> | Date | string
    totalSeconds?: IntFilter<"TimerRound"> | number
    isCompleted?: BoolNullableFilter<"TimerRound"> | boolean | null
    timerSessionId?: StringFilter<"TimerRound"> | string
    timerSession?: XOR<TimerSessionRelationFilter, TimerSessionWhereInput>
  }, "id">

  export type TimerRoundOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalSeconds?: SortOrder
    isCompleted?: SortOrderInput | SortOrder
    timerSessionId?: SortOrder
    _count?: TimerRoundCountOrderByAggregateInput
    _avg?: TimerRoundAvgOrderByAggregateInput
    _max?: TimerRoundMaxOrderByAggregateInput
    _min?: TimerRoundMinOrderByAggregateInput
    _sum?: TimerRoundSumOrderByAggregateInput
  }

  export type TimerRoundScalarWhereWithAggregatesInput = {
    AND?: TimerRoundScalarWhereWithAggregatesInput | TimerRoundScalarWhereWithAggregatesInput[]
    OR?: TimerRoundScalarWhereWithAggregatesInput[]
    NOT?: TimerRoundScalarWhereWithAggregatesInput | TimerRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimerRound"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimerRound"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimerRound"> | Date | string
    totalSeconds?: IntWithAggregatesFilter<"TimerRound"> | number
    isCompleted?: BoolNullableWithAggregatesFilter<"TimerRound"> | boolean | null
    timerSessionId?: StringWithAggregatesFilter<"TimerRound"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    time_blocks?: TimeBlockCreateNestedManyWithoutUserInput
    timer_sessions?: TimerSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    time_blocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    timer_sessions?: TimerSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    time_blocks?: TimeBlockUpdateManyWithoutUserNestedInput
    timer_sessions?: TimerSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    time_blocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    timer_sessions?: TimerSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isCompleted?: boolean | null
    priority?: $Enums.Priority | null
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isCompleted?: boolean | null
    userId: string
    priority?: $Enums.Priority | null
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
  }

  export type TaskCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isCompleted?: boolean | null
    userId: string
    priority?: $Enums.Priority | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
  }

  export type TimeBlockCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
    user: UserCreateNestedOneWithoutTime_blocksInput
  }

  export type TimeBlockUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
    userId: string
  }

  export type TimeBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTime_blocksNestedInput
  }

  export type TimeBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
    userId: string
  }

  export type TimeBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimeBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimerSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    rounds?: TimerRoundCreateNestedManyWithoutTimerSessionInput
    user: UserCreateNestedOneWithoutTimer_sessionsInput
  }

  export type TimerSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    userId: string
    rounds?: TimerRoundUncheckedCreateNestedManyWithoutTimerSessionInput
  }

  export type TimerSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rounds?: TimerRoundUpdateManyWithoutTimerSessionNestedInput
    user?: UserUpdateOneRequiredWithoutTimer_sessionsNestedInput
  }

  export type TimerSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    rounds?: TimerRoundUncheckedUpdateManyWithoutTimerSessionNestedInput
  }

  export type TimerSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    userId: string
  }

  export type TimerSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TimerSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimerRoundCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalSeconds: number
    isCompleted?: boolean | null
    timerSession: TimerSessionCreateNestedOneWithoutRoundsInput
  }

  export type TimerRoundUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalSeconds: number
    isCompleted?: boolean | null
    timerSessionId: string
  }

  export type TimerRoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timerSession?: TimerSessionUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type TimerRoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timerSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type TimerRoundCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalSeconds: number
    isCompleted?: boolean | null
    timerSessionId: string
  }

  export type TimerRoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TimerRoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timerSessionId?: StringFieldUpdateOperationsInput | string
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

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TimeBlockListRelationFilter = {
    every?: TimeBlockWhereInput
    some?: TimeBlockWhereInput
    none?: TimeBlockWhereInput
  }

  export type TimerSessionListRelationFilter = {
    every?: TimerSessionWhereInput
    some?: TimerSessionWhereInput
    none?: TimerSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimerSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
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

  export type TimeBlockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type TimeBlockAvgOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
  }

  export type TimeBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type TimeBlockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type TimeBlockSumOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
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

  export type TimerRoundListRelationFilter = {
    every?: TimerRoundWhereInput
    some?: TimerRoundWhereInput
    none?: TimerRoundWhereInput
  }

  export type TimerRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimerSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type TimerSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type TimerSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
  }

  export type TimerSessionRelationFilter = {
    is?: TimerSessionWhereInput
    isNot?: TimerSessionWhereInput
  }

  export type TimerRoundCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalSeconds?: SortOrder
    isCompleted?: SortOrder
    timerSessionId?: SortOrder
  }

  export type TimerRoundAvgOrderByAggregateInput = {
    totalSeconds?: SortOrder
  }

  export type TimerRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalSeconds?: SortOrder
    isCompleted?: SortOrder
    timerSessionId?: SortOrder
  }

  export type TimerRoundMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalSeconds?: SortOrder
    isCompleted?: SortOrder
    timerSessionId?: SortOrder
  }

  export type TimerRoundSumOrderByAggregateInput = {
    totalSeconds?: SortOrder
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TimeBlockCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type TimerSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TimeBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type TimerSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type TimeBlockUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutUserInput | TimeBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutUserInput | TimeBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutUserInput | TimeBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type TimerSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    upsert?: TimerSessionUpsertWithWhereUniqueWithoutUserInput | TimerSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    set?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    disconnect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    delete?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    update?: TimerSessionUpdateWithWhereUniqueWithoutUserInput | TimerSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimerSessionUpdateManyWithWhereWithoutUserInput | TimerSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
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

  export type TimeBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutUserInput | TimeBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutUserInput | TimeBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutUserInput | TimeBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type TimerSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    upsert?: TimerSessionUpsertWithWhereUniqueWithoutUserInput | TimerSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    set?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    disconnect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    delete?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    update?: TimerSessionUpdateWithWhereUniqueWithoutUserInput | TimerSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimerSessionUpdateManyWithWhereWithoutUserInput | TimerSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority | null
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutTime_blocksInput = {
    create?: XOR<UserCreateWithoutTime_blocksInput, UserUncheckedCreateWithoutTime_blocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTime_blocksInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTime_blocksNestedInput = {
    create?: XOR<UserCreateWithoutTime_blocksInput, UserUncheckedCreateWithoutTime_blocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTime_blocksInput
    upsert?: UserUpsertWithoutTime_blocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTime_blocksInput, UserUpdateWithoutTime_blocksInput>, UserUncheckedUpdateWithoutTime_blocksInput>
  }

  export type TimerRoundCreateNestedManyWithoutTimerSessionInput = {
    create?: XOR<TimerRoundCreateWithoutTimerSessionInput, TimerRoundUncheckedCreateWithoutTimerSessionInput> | TimerRoundCreateWithoutTimerSessionInput[] | TimerRoundUncheckedCreateWithoutTimerSessionInput[]
    connectOrCreate?: TimerRoundCreateOrConnectWithoutTimerSessionInput | TimerRoundCreateOrConnectWithoutTimerSessionInput[]
    createMany?: TimerRoundCreateManyTimerSessionInputEnvelope
    connect?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTimer_sessionsInput = {
    create?: XOR<UserCreateWithoutTimer_sessionsInput, UserUncheckedCreateWithoutTimer_sessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimer_sessionsInput
    connect?: UserWhereUniqueInput
  }

  export type TimerRoundUncheckedCreateNestedManyWithoutTimerSessionInput = {
    create?: XOR<TimerRoundCreateWithoutTimerSessionInput, TimerRoundUncheckedCreateWithoutTimerSessionInput> | TimerRoundCreateWithoutTimerSessionInput[] | TimerRoundUncheckedCreateWithoutTimerSessionInput[]
    connectOrCreate?: TimerRoundCreateOrConnectWithoutTimerSessionInput | TimerRoundCreateOrConnectWithoutTimerSessionInput[]
    createMany?: TimerRoundCreateManyTimerSessionInputEnvelope
    connect?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
  }

  export type TimerRoundUpdateManyWithoutTimerSessionNestedInput = {
    create?: XOR<TimerRoundCreateWithoutTimerSessionInput, TimerRoundUncheckedCreateWithoutTimerSessionInput> | TimerRoundCreateWithoutTimerSessionInput[] | TimerRoundUncheckedCreateWithoutTimerSessionInput[]
    connectOrCreate?: TimerRoundCreateOrConnectWithoutTimerSessionInput | TimerRoundCreateOrConnectWithoutTimerSessionInput[]
    upsert?: TimerRoundUpsertWithWhereUniqueWithoutTimerSessionInput | TimerRoundUpsertWithWhereUniqueWithoutTimerSessionInput[]
    createMany?: TimerRoundCreateManyTimerSessionInputEnvelope
    set?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    disconnect?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    delete?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    connect?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    update?: TimerRoundUpdateWithWhereUniqueWithoutTimerSessionInput | TimerRoundUpdateWithWhereUniqueWithoutTimerSessionInput[]
    updateMany?: TimerRoundUpdateManyWithWhereWithoutTimerSessionInput | TimerRoundUpdateManyWithWhereWithoutTimerSessionInput[]
    deleteMany?: TimerRoundScalarWhereInput | TimerRoundScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTimer_sessionsNestedInput = {
    create?: XOR<UserCreateWithoutTimer_sessionsInput, UserUncheckedCreateWithoutTimer_sessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimer_sessionsInput
    upsert?: UserUpsertWithoutTimer_sessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimer_sessionsInput, UserUpdateWithoutTimer_sessionsInput>, UserUncheckedUpdateWithoutTimer_sessionsInput>
  }

  export type TimerRoundUncheckedUpdateManyWithoutTimerSessionNestedInput = {
    create?: XOR<TimerRoundCreateWithoutTimerSessionInput, TimerRoundUncheckedCreateWithoutTimerSessionInput> | TimerRoundCreateWithoutTimerSessionInput[] | TimerRoundUncheckedCreateWithoutTimerSessionInput[]
    connectOrCreate?: TimerRoundCreateOrConnectWithoutTimerSessionInput | TimerRoundCreateOrConnectWithoutTimerSessionInput[]
    upsert?: TimerRoundUpsertWithWhereUniqueWithoutTimerSessionInput | TimerRoundUpsertWithWhereUniqueWithoutTimerSessionInput[]
    createMany?: TimerRoundCreateManyTimerSessionInputEnvelope
    set?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    disconnect?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    delete?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    connect?: TimerRoundWhereUniqueInput | TimerRoundWhereUniqueInput[]
    update?: TimerRoundUpdateWithWhereUniqueWithoutTimerSessionInput | TimerRoundUpdateWithWhereUniqueWithoutTimerSessionInput[]
    updateMany?: TimerRoundUpdateManyWithWhereWithoutTimerSessionInput | TimerRoundUpdateManyWithWhereWithoutTimerSessionInput[]
    deleteMany?: TimerRoundScalarWhereInput | TimerRoundScalarWhereInput[]
  }

  export type TimerSessionCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TimerSessionCreateWithoutRoundsInput, TimerSessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TimerSessionCreateOrConnectWithoutRoundsInput
    connect?: TimerSessionWhereUniqueInput
  }

  export type TimerSessionUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<TimerSessionCreateWithoutRoundsInput, TimerSessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TimerSessionCreateOrConnectWithoutRoundsInput
    upsert?: TimerSessionUpsertWithoutRoundsInput
    connect?: TimerSessionWhereUniqueInput
    update?: XOR<XOR<TimerSessionUpdateToOneWithWhereWithoutRoundsInput, TimerSessionUpdateWithoutRoundsInput>, TimerSessionUncheckedUpdateWithoutRoundsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
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

  export type TaskCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isCompleted?: boolean | null
    priority?: $Enums.Priority | null
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isCompleted?: boolean | null
    priority?: $Enums.Priority | null
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeBlockCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
  }

  export type TimeBlockUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
  }

  export type TimeBlockCreateOrConnectWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    create: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput>
  }

  export type TimeBlockCreateManyUserInputEnvelope = {
    data: TimeBlockCreateManyUserInput | TimeBlockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimerSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    rounds?: TimerRoundCreateNestedManyWithoutTimerSessionInput
  }

  export type TimerSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    rounds?: TimerRoundUncheckedCreateNestedManyWithoutTimerSessionInput
  }

  export type TimerSessionCreateOrConnectWithoutUserInput = {
    where: TimerSessionWhereUniqueInput
    create: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput>
  }

  export type TimerSessionCreateManyUserInputEnvelope = {
    data: TimerSessionCreateManyUserInput | TimerSessionCreateManyUserInput[]
    skipDuplicates?: boolean
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
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringFilter<"Task"> | string
    isCompleted?: BoolNullableFilter<"Task"> | boolean | null
    userId?: StringFilter<"Task"> | string
    priority?: EnumPriorityNullableFilter<"Task"> | $Enums.Priority | null
  }

  export type TimeBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    update: XOR<TimeBlockUpdateWithoutUserInput, TimeBlockUncheckedUpdateWithoutUserInput>
    create: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput>
  }

  export type TimeBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    data: XOR<TimeBlockUpdateWithoutUserInput, TimeBlockUncheckedUpdateWithoutUserInput>
  }

  export type TimeBlockUpdateManyWithWhereWithoutUserInput = {
    where: TimeBlockScalarWhereInput
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeBlockScalarWhereInput = {
    AND?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    OR?: TimeBlockScalarWhereInput[]
    NOT?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    id?: StringFilter<"TimeBlock"> | string
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    name?: StringFilter<"TimeBlock"> | string
    color?: StringNullableFilter<"TimeBlock"> | string | null
    duration?: IntFilter<"TimeBlock"> | number
    order?: IntFilter<"TimeBlock"> | number
    userId?: StringFilter<"TimeBlock"> | string
  }

  export type TimerSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: TimerSessionWhereUniqueInput
    update: XOR<TimerSessionUpdateWithoutUserInput, TimerSessionUncheckedUpdateWithoutUserInput>
    create: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput>
  }

  export type TimerSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: TimerSessionWhereUniqueInput
    data: XOR<TimerSessionUpdateWithoutUserInput, TimerSessionUncheckedUpdateWithoutUserInput>
  }

  export type TimerSessionUpdateManyWithWhereWithoutUserInput = {
    where: TimerSessionScalarWhereInput
    data: XOR<TimerSessionUpdateManyMutationInput, TimerSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type TimerSessionScalarWhereInput = {
    AND?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
    OR?: TimerSessionScalarWhereInput[]
    NOT?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
    id?: StringFilter<"TimerSession"> | string
    createdAt?: DateTimeFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeFilter<"TimerSession"> | Date | string
    isCompleted?: BoolNullableFilter<"TimerSession"> | boolean | null
    userId?: StringFilter<"TimerSession"> | string
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    time_blocks?: TimeBlockCreateNestedManyWithoutUserInput
    timer_sessions?: TimerSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    time_blocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    timer_sessions?: TimerSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
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
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    time_blocks?: TimeBlockUpdateManyWithoutUserNestedInput
    timer_sessions?: TimerSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    time_blocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    timer_sessions?: TimerSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTime_blocksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    timer_sessions?: TimerSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTime_blocksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timer_sessions?: TimerSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTime_blocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTime_blocksInput, UserUncheckedCreateWithoutTime_blocksInput>
  }

  export type UserUpsertWithoutTime_blocksInput = {
    update: XOR<UserUpdateWithoutTime_blocksInput, UserUncheckedUpdateWithoutTime_blocksInput>
    create: XOR<UserCreateWithoutTime_blocksInput, UserUncheckedCreateWithoutTime_blocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTime_blocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTime_blocksInput, UserUncheckedUpdateWithoutTime_blocksInput>
  }

  export type UserUpdateWithoutTime_blocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timer_sessions?: TimerSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTime_blocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timer_sessions?: TimerSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimerRoundCreateWithoutTimerSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalSeconds: number
    isCompleted?: boolean | null
  }

  export type TimerRoundUncheckedCreateWithoutTimerSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalSeconds: number
    isCompleted?: boolean | null
  }

  export type TimerRoundCreateOrConnectWithoutTimerSessionInput = {
    where: TimerRoundWhereUniqueInput
    create: XOR<TimerRoundCreateWithoutTimerSessionInput, TimerRoundUncheckedCreateWithoutTimerSessionInput>
  }

  export type TimerRoundCreateManyTimerSessionInputEnvelope = {
    data: TimerRoundCreateManyTimerSessionInput | TimerRoundCreateManyTimerSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTimer_sessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    time_blocks?: TimeBlockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimer_sessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number | null
    intervalsCount?: number | null
    workInterval?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    time_blocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimer_sessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimer_sessionsInput, UserUncheckedCreateWithoutTimer_sessionsInput>
  }

  export type TimerRoundUpsertWithWhereUniqueWithoutTimerSessionInput = {
    where: TimerRoundWhereUniqueInput
    update: XOR<TimerRoundUpdateWithoutTimerSessionInput, TimerRoundUncheckedUpdateWithoutTimerSessionInput>
    create: XOR<TimerRoundCreateWithoutTimerSessionInput, TimerRoundUncheckedCreateWithoutTimerSessionInput>
  }

  export type TimerRoundUpdateWithWhereUniqueWithoutTimerSessionInput = {
    where: TimerRoundWhereUniqueInput
    data: XOR<TimerRoundUpdateWithoutTimerSessionInput, TimerRoundUncheckedUpdateWithoutTimerSessionInput>
  }

  export type TimerRoundUpdateManyWithWhereWithoutTimerSessionInput = {
    where: TimerRoundScalarWhereInput
    data: XOR<TimerRoundUpdateManyMutationInput, TimerRoundUncheckedUpdateManyWithoutTimerSessionInput>
  }

  export type TimerRoundScalarWhereInput = {
    AND?: TimerRoundScalarWhereInput | TimerRoundScalarWhereInput[]
    OR?: TimerRoundScalarWhereInput[]
    NOT?: TimerRoundScalarWhereInput | TimerRoundScalarWhereInput[]
    id?: StringFilter<"TimerRound"> | string
    createdAt?: DateTimeFilter<"TimerRound"> | Date | string
    updatedAt?: DateTimeFilter<"TimerRound"> | Date | string
    totalSeconds?: IntFilter<"TimerRound"> | number
    isCompleted?: BoolNullableFilter<"TimerRound"> | boolean | null
    timerSessionId?: StringFilter<"TimerRound"> | string
  }

  export type UserUpsertWithoutTimer_sessionsInput = {
    update: XOR<UserUpdateWithoutTimer_sessionsInput, UserUncheckedUpdateWithoutTimer_sessionsInput>
    create: XOR<UserCreateWithoutTimer_sessionsInput, UserUncheckedCreateWithoutTimer_sessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimer_sessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimer_sessionsInput, UserUncheckedUpdateWithoutTimer_sessionsInput>
  }

  export type UserUpdateWithoutTimer_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    time_blocks?: TimeBlockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimer_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: NullableIntFieldUpdateOperationsInput | number | null
    intervalsCount?: NullableIntFieldUpdateOperationsInput | number | null
    workInterval?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    time_blocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimerSessionCreateWithoutRoundsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    user: UserCreateNestedOneWithoutTimer_sessionsInput
  }

  export type TimerSessionUncheckedCreateWithoutRoundsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
    userId: string
  }

  export type TimerSessionCreateOrConnectWithoutRoundsInput = {
    where: TimerSessionWhereUniqueInput
    create: XOR<TimerSessionCreateWithoutRoundsInput, TimerSessionUncheckedCreateWithoutRoundsInput>
  }

  export type TimerSessionUpsertWithoutRoundsInput = {
    update: XOR<TimerSessionUpdateWithoutRoundsInput, TimerSessionUncheckedUpdateWithoutRoundsInput>
    create: XOR<TimerSessionCreateWithoutRoundsInput, TimerSessionUncheckedCreateWithoutRoundsInput>
    where?: TimerSessionWhereInput
  }

  export type TimerSessionUpdateToOneWithWhereWithoutRoundsInput = {
    where?: TimerSessionWhereInput
    data: XOR<TimerSessionUpdateWithoutRoundsInput, TimerSessionUncheckedUpdateWithoutRoundsInput>
  }

  export type TimerSessionUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutTimer_sessionsNestedInput
  }

  export type TimerSessionUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isCompleted?: boolean | null
    priority?: $Enums.Priority | null
  }

  export type TimeBlockCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string | null
    duration: number
    order?: number
  }

  export type TimerSessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean | null
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
  }

  export type TimeBlockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimeBlockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimeBlockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimerSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rounds?: TimerRoundUpdateManyWithoutTimerSessionNestedInput
  }

  export type TimerSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rounds?: TimerRoundUncheckedUpdateManyWithoutTimerSessionNestedInput
  }

  export type TimerSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TimerRoundCreateManyTimerSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    totalSeconds: number
    isCompleted?: boolean | null
  }

  export type TimerRoundUpdateWithoutTimerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TimerRoundUncheckedUpdateWithoutTimerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TimerRoundUncheckedUpdateManyWithoutTimerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimerSessionCountOutputTypeDefaultArgs instead
     */
    export type TimerSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimerSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeBlockDefaultArgs instead
     */
    export type TimeBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeBlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimerSessionDefaultArgs instead
     */
    export type TimerSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimerSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimerRoundDefaultArgs instead
     */
    export type TimerRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimerRoundDefaultArgs<ExtArgs>

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