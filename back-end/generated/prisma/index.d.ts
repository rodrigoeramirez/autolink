
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
 * Model Auto
 * 
 */
export type Auto = $Result.DefaultSelection<Prisma.$AutoPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoAuto: {
  Disponible: 'Disponible',
  Reservado: 'Reservado',
  Vendido: 'Vendido'
};

export type EstadoAuto = (typeof EstadoAuto)[keyof typeof EstadoAuto]

}

export type EstadoAuto = $Enums.EstadoAuto

export const EstadoAuto: typeof $Enums.EstadoAuto

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Autos
 * const autos = await prisma.auto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Autos
   * const autos = await prisma.auto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auto`: Exposes CRUD operations for the **Auto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autos
    * const autos = await prisma.auto.findMany()
    * ```
    */
  get auto(): Prisma.AutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Auto: 'Auto',
    Foto: 'Foto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auto" | "foto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Auto: {
        payload: Prisma.$AutoPayload<ExtArgs>
        fields: Prisma.AutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          findFirst: {
            args: Prisma.AutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          findMany: {
            args: Prisma.AutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>[]
          }
          create: {
            args: Prisma.AutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          createMany: {
            args: Prisma.AutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>[]
          }
          delete: {
            args: Prisma.AutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          update: {
            args: Prisma.AutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          deleteMany: {
            args: Prisma.AutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>[]
          }
          upsert: {
            args: Prisma.AutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoPayload>
          }
          aggregate: {
            args: Prisma.AutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuto>
          }
          groupBy: {
            args: Prisma.AutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutoCountArgs<ExtArgs>
            result: $Utils.Optional<AutoCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    auto?: AutoOmit
    foto?: FotoOmit
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
   * Count Type AutoCountOutputType
   */

  export type AutoCountOutputType = {
    fotos: number
  }

  export type AutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | AutoCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * AutoCountOutputType without action
   */
  export type AutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoCountOutputType
     */
    select?: AutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutoCountOutputType without action
   */
  export type AutoCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Auto
   */

  export type AggregateAuto = {
    _count: AutoCountAggregateOutputType | null
    _avg: AutoAvgAggregateOutputType | null
    _sum: AutoSumAggregateOutputType | null
    _min: AutoMinAggregateOutputType | null
    _max: AutoMaxAggregateOutputType | null
  }

  export type AutoAvgAggregateOutputType = {
    año: number | null
    precio: Decimal | null
  }

  export type AutoSumAggregateOutputType = {
    año: number | null
    precio: Decimal | null
  }

  export type AutoMinAggregateOutputType = {
    id: string | null
    patente: string | null
    modelo: string | null
    marca: string | null
    año: number | null
    precio: Decimal | null
    fechaBaja: Date | null
    estado: $Enums.EstadoAuto | null
  }

  export type AutoMaxAggregateOutputType = {
    id: string | null
    patente: string | null
    modelo: string | null
    marca: string | null
    año: number | null
    precio: Decimal | null
    fechaBaja: Date | null
    estado: $Enums.EstadoAuto | null
  }

  export type AutoCountAggregateOutputType = {
    id: number
    patente: number
    modelo: number
    marca: number
    año: number
    precio: number
    fechaBaja: number
    estado: number
    _all: number
  }


  export type AutoAvgAggregateInputType = {
    año?: true
    precio?: true
  }

  export type AutoSumAggregateInputType = {
    año?: true
    precio?: true
  }

  export type AutoMinAggregateInputType = {
    id?: true
    patente?: true
    modelo?: true
    marca?: true
    año?: true
    precio?: true
    fechaBaja?: true
    estado?: true
  }

  export type AutoMaxAggregateInputType = {
    id?: true
    patente?: true
    modelo?: true
    marca?: true
    año?: true
    precio?: true
    fechaBaja?: true
    estado?: true
  }

  export type AutoCountAggregateInputType = {
    id?: true
    patente?: true
    modelo?: true
    marca?: true
    año?: true
    precio?: true
    fechaBaja?: true
    estado?: true
    _all?: true
  }

  export type AutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auto to aggregate.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autos
    **/
    _count?: true | AutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoMaxAggregateInputType
  }

  export type GetAutoAggregateType<T extends AutoAggregateArgs> = {
        [P in keyof T & keyof AggregateAuto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuto[P]>
      : GetScalarType<T[P], AggregateAuto[P]>
  }




  export type AutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoWhereInput
    orderBy?: AutoOrderByWithAggregationInput | AutoOrderByWithAggregationInput[]
    by: AutoScalarFieldEnum[] | AutoScalarFieldEnum
    having?: AutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoCountAggregateInputType | true
    _avg?: AutoAvgAggregateInputType
    _sum?: AutoSumAggregateInputType
    _min?: AutoMinAggregateInputType
    _max?: AutoMaxAggregateInputType
  }

  export type AutoGroupByOutputType = {
    id: string
    patente: string
    modelo: string
    marca: string
    año: number
    precio: Decimal
    fechaBaja: Date | null
    estado: $Enums.EstadoAuto
    _count: AutoCountAggregateOutputType | null
    _avg: AutoAvgAggregateOutputType | null
    _sum: AutoSumAggregateOutputType | null
    _min: AutoMinAggregateOutputType | null
    _max: AutoMaxAggregateOutputType | null
  }

  type GetAutoGroupByPayload<T extends AutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoGroupByOutputType[P]>
            : GetScalarType<T[P], AutoGroupByOutputType[P]>
        }
      >
    >


  export type AutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patente?: boolean
    modelo?: boolean
    marca?: boolean
    año?: boolean
    precio?: boolean
    fechaBaja?: boolean
    estado?: boolean
    fotos?: boolean | Auto$fotosArgs<ExtArgs>
    _count?: boolean | AutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auto"]>

  export type AutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patente?: boolean
    modelo?: boolean
    marca?: boolean
    año?: boolean
    precio?: boolean
    fechaBaja?: boolean
    estado?: boolean
  }, ExtArgs["result"]["auto"]>

  export type AutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patente?: boolean
    modelo?: boolean
    marca?: boolean
    año?: boolean
    precio?: boolean
    fechaBaja?: boolean
    estado?: boolean
  }, ExtArgs["result"]["auto"]>

  export type AutoSelectScalar = {
    id?: boolean
    patente?: boolean
    modelo?: boolean
    marca?: boolean
    año?: boolean
    precio?: boolean
    fechaBaja?: boolean
    estado?: boolean
  }

  export type AutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patente" | "modelo" | "marca" | "año" | "precio" | "fechaBaja" | "estado", ExtArgs["result"]["auto"]>
  export type AutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | Auto$fotosArgs<ExtArgs>
    _count?: boolean | AutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auto"
    objects: {
      fotos: Prisma.$FotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patente: string
      modelo: string
      marca: string
      año: number
      precio: Prisma.Decimal
      fechaBaja: Date | null
      estado: $Enums.EstadoAuto
    }, ExtArgs["result"]["auto"]>
    composites: {}
  }

  type AutoGetPayload<S extends boolean | null | undefined | AutoDefaultArgs> = $Result.GetResult<Prisma.$AutoPayload, S>

  type AutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutoCountAggregateInputType | true
    }

  export interface AutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auto'], meta: { name: 'Auto' } }
    /**
     * Find zero or one Auto that matches the filter.
     * @param {AutoFindUniqueArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoFindUniqueArgs>(args: SelectSubset<T, AutoFindUniqueArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoFindUniqueOrThrowArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoFindUniqueOrThrowArgs>(args: SelectSubset<T, AutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoFindFirstArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoFindFirstArgs>(args?: SelectSubset<T, AutoFindFirstArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoFindFirstOrThrowArgs} args - Arguments to find a Auto
     * @example
     * // Get one Auto
     * const auto = await prisma.auto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoFindFirstOrThrowArgs>(args?: SelectSubset<T, AutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autos
     * const autos = await prisma.auto.findMany()
     * 
     * // Get first 10 Autos
     * const autos = await prisma.auto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoWithIdOnly = await prisma.auto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutoFindManyArgs>(args?: SelectSubset<T, AutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auto.
     * @param {AutoCreateArgs} args - Arguments to create a Auto.
     * @example
     * // Create one Auto
     * const Auto = await prisma.auto.create({
     *   data: {
     *     // ... data to create a Auto
     *   }
     * })
     * 
     */
    create<T extends AutoCreateArgs>(args: SelectSubset<T, AutoCreateArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autos.
     * @param {AutoCreateManyArgs} args - Arguments to create many Autos.
     * @example
     * // Create many Autos
     * const auto = await prisma.auto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutoCreateManyArgs>(args?: SelectSubset<T, AutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autos and returns the data saved in the database.
     * @param {AutoCreateManyAndReturnArgs} args - Arguments to create many Autos.
     * @example
     * // Create many Autos
     * const auto = await prisma.auto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autos and only return the `id`
     * const autoWithIdOnly = await prisma.auto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutoCreateManyAndReturnArgs>(args?: SelectSubset<T, AutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auto.
     * @param {AutoDeleteArgs} args - Arguments to delete one Auto.
     * @example
     * // Delete one Auto
     * const Auto = await prisma.auto.delete({
     *   where: {
     *     // ... filter to delete one Auto
     *   }
     * })
     * 
     */
    delete<T extends AutoDeleteArgs>(args: SelectSubset<T, AutoDeleteArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auto.
     * @param {AutoUpdateArgs} args - Arguments to update one Auto.
     * @example
     * // Update one Auto
     * const auto = await prisma.auto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutoUpdateArgs>(args: SelectSubset<T, AutoUpdateArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autos.
     * @param {AutoDeleteManyArgs} args - Arguments to filter Autos to delete.
     * @example
     * // Delete a few Autos
     * const { count } = await prisma.auto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutoDeleteManyArgs>(args?: SelectSubset<T, AutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autos
     * const auto = await prisma.auto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutoUpdateManyArgs>(args: SelectSubset<T, AutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autos and returns the data updated in the database.
     * @param {AutoUpdateManyAndReturnArgs} args - Arguments to update many Autos.
     * @example
     * // Update many Autos
     * const auto = await prisma.auto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autos and only return the `id`
     * const autoWithIdOnly = await prisma.auto.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutoUpdateManyAndReturnArgs>(args: SelectSubset<T, AutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auto.
     * @param {AutoUpsertArgs} args - Arguments to update or create a Auto.
     * @example
     * // Update or create a Auto
     * const auto = await prisma.auto.upsert({
     *   create: {
     *     // ... data to create a Auto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auto we want to update
     *   }
     * })
     */
    upsert<T extends AutoUpsertArgs>(args: SelectSubset<T, AutoUpsertArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoCountArgs} args - Arguments to filter Autos to count.
     * @example
     * // Count the number of Autos
     * const count = await prisma.auto.count({
     *   where: {
     *     // ... the filter for the Autos we want to count
     *   }
     * })
    **/
    count<T extends AutoCountArgs>(
      args?: Subset<T, AutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutoAggregateArgs>(args: Subset<T, AutoAggregateArgs>): Prisma.PrismaPromise<GetAutoAggregateType<T>>

    /**
     * Group by Auto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoGroupByArgs} args - Group by arguments.
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
      T extends AutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoGroupByArgs['orderBy'] }
        : { orderBy?: AutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auto model
   */
  readonly fields: AutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fotos<T extends Auto$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Auto$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Auto model
   */
  interface AutoFieldRefs {
    readonly id: FieldRef<"Auto", 'String'>
    readonly patente: FieldRef<"Auto", 'String'>
    readonly modelo: FieldRef<"Auto", 'String'>
    readonly marca: FieldRef<"Auto", 'String'>
    readonly año: FieldRef<"Auto", 'Int'>
    readonly precio: FieldRef<"Auto", 'Decimal'>
    readonly fechaBaja: FieldRef<"Auto", 'DateTime'>
    readonly estado: FieldRef<"Auto", 'EstadoAuto'>
  }
    

  // Custom InputTypes
  /**
   * Auto findUnique
   */
  export type AutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto findUniqueOrThrow
   */
  export type AutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto findFirst
   */
  export type AutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autos.
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autos.
     */
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * Auto findFirstOrThrow
   */
  export type AutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Auto to fetch.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autos.
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autos.
     */
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * Auto findMany
   */
  export type AutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where?: AutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutoOrderByWithRelationInput | AutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autos.
     */
    cursor?: AutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    distinct?: AutoScalarFieldEnum | AutoScalarFieldEnum[]
  }

  /**
   * Auto create
   */
  export type AutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Auto.
     */
    data: XOR<AutoCreateInput, AutoUncheckedCreateInput>
  }

  /**
   * Auto createMany
   */
  export type AutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autos.
     */
    data: AutoCreateManyInput | AutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auto createManyAndReturn
   */
  export type AutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * The data used to create many Autos.
     */
    data: AutoCreateManyInput | AutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auto update
   */
  export type AutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Auto.
     */
    data: XOR<AutoUpdateInput, AutoUncheckedUpdateInput>
    /**
     * Choose, which Auto to update.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto updateMany
   */
  export type AutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autos.
     */
    data: XOR<AutoUpdateManyMutationInput, AutoUncheckedUpdateManyInput>
    /**
     * Filter which Autos to update
     */
    where?: AutoWhereInput
    /**
     * Limit how many Autos to update.
     */
    limit?: number
  }

  /**
   * Auto updateManyAndReturn
   */
  export type AutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * The data used to update Autos.
     */
    data: XOR<AutoUpdateManyMutationInput, AutoUncheckedUpdateManyInput>
    /**
     * Filter which Autos to update
     */
    where?: AutoWhereInput
    /**
     * Limit how many Autos to update.
     */
    limit?: number
  }

  /**
   * Auto upsert
   */
  export type AutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Auto to update in case it exists.
     */
    where: AutoWhereUniqueInput
    /**
     * In case the Auto found by the `where` argument doesn't exist, create a new Auto with this data.
     */
    create: XOR<AutoCreateInput, AutoUncheckedCreateInput>
    /**
     * In case the Auto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutoUpdateInput, AutoUncheckedUpdateInput>
  }

  /**
   * Auto delete
   */
  export type AutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
    /**
     * Filter which Auto to delete.
     */
    where: AutoWhereUniqueInput
  }

  /**
   * Auto deleteMany
   */
  export type AutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autos to delete
     */
    where?: AutoWhereInput
    /**
     * Limit how many Autos to delete.
     */
    limit?: number
  }

  /**
   * Auto.fotos
   */
  export type Auto$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Auto without action
   */
  export type AutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto
     */
    select?: AutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auto
     */
    omit?: AutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    autoId: string | null
  }

  export type FotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    autoId: string | null
  }

  export type FotoCountAggregateOutputType = {
    id: number
    url: number
    autoId: number
    _all: number
  }


  export type FotoMinAggregateInputType = {
    id?: true
    url?: true
    autoId?: true
  }

  export type FotoMaxAggregateInputType = {
    id?: true
    url?: true
    autoId?: true
  }

  export type FotoCountAggregateInputType = {
    id?: true
    url?: true
    autoId?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    id: string
    url: string
    autoId: string
    _count: FotoCountAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    autoId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    autoId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    autoId?: boolean
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectScalar = {
    id?: boolean
    url?: boolean
    autoId?: boolean
  }

  export type FotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "autoId", ExtArgs["result"]["foto"]>
  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }
  export type FotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }
  export type FotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auto?: boolean | AutoDefaultArgs<ExtArgs>
  }

  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      auto: Prisma.$AutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      autoId: string
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }

  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoFindUniqueArgs>(args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoFindFirstArgs>(args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoWithIdOnly = await prisma.foto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoFindManyArgs>(args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
     */
    create<T extends FotoCreateArgs>(args: SelectSubset<T, FotoCreateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoCreateManyArgs>(args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fotos and returns the data saved in the database.
     * @param {FotoCreateManyAndReturnArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
     */
    delete<T extends FotoDeleteArgs>(args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoUpdateArgs>(args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoDeleteManyArgs>(args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoUpdateManyArgs>(args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos and returns the data updated in the database.
     * @param {FotoUpdateManyAndReturnArgs} args - Arguments to update many Fotos.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.updateManyAndReturn({
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
    updateManyAndReturn<T extends FotoUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
     */
    upsert<T extends FotoUpsertArgs>(args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
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
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auto<T extends AutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutoDefaultArgs<ExtArgs>>): Prisma__AutoClient<$Result.GetResult<Prisma.$AutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Foto model
   */
  interface FotoFieldRefs {
    readonly id: FieldRef<"Foto", 'String'>
    readonly url: FieldRef<"Foto", 'String'>
    readonly autoId: FieldRef<"Foto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto createManyAndReturn
   */
  export type FotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
  }

  /**
   * Foto updateManyAndReturn
   */
  export type FotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to delete.
     */
    limit?: number
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
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


  export const AutoScalarFieldEnum: {
    id: 'id',
    patente: 'patente',
    modelo: 'modelo',
    marca: 'marca',
    año: 'año',
    precio: 'precio',
    fechaBaja: 'fechaBaja',
    estado: 'estado'
  };

  export type AutoScalarFieldEnum = (typeof AutoScalarFieldEnum)[keyof typeof AutoScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    autoId: 'autoId'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoAuto'
   */
  export type EnumEstadoAutoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAuto'>
    


  /**
   * Reference to a field of type 'EstadoAuto[]'
   */
  export type ListEnumEstadoAutoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAuto[]'>
    


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


  export type AutoWhereInput = {
    AND?: AutoWhereInput | AutoWhereInput[]
    OR?: AutoWhereInput[]
    NOT?: AutoWhereInput | AutoWhereInput[]
    id?: StringFilter<"Auto"> | string
    patente?: StringFilter<"Auto"> | string
    modelo?: StringFilter<"Auto"> | string
    marca?: StringFilter<"Auto"> | string
    año?: IntFilter<"Auto"> | number
    precio?: DecimalFilter<"Auto"> | Decimal | DecimalJsLike | number | string
    fechaBaja?: DateTimeNullableFilter<"Auto"> | Date | string | null
    estado?: EnumEstadoAutoFilter<"Auto"> | $Enums.EstadoAuto
    fotos?: FotoListRelationFilter
  }

  export type AutoOrderByWithRelationInput = {
    id?: SortOrder
    patente?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    año?: SortOrder
    precio?: SortOrder
    fechaBaja?: SortOrderInput | SortOrder
    estado?: SortOrder
    fotos?: FotoOrderByRelationAggregateInput
  }

  export type AutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patente?: string
    AND?: AutoWhereInput | AutoWhereInput[]
    OR?: AutoWhereInput[]
    NOT?: AutoWhereInput | AutoWhereInput[]
    modelo?: StringFilter<"Auto"> | string
    marca?: StringFilter<"Auto"> | string
    año?: IntFilter<"Auto"> | number
    precio?: DecimalFilter<"Auto"> | Decimal | DecimalJsLike | number | string
    fechaBaja?: DateTimeNullableFilter<"Auto"> | Date | string | null
    estado?: EnumEstadoAutoFilter<"Auto"> | $Enums.EstadoAuto
    fotos?: FotoListRelationFilter
  }, "id" | "patente">

  export type AutoOrderByWithAggregationInput = {
    id?: SortOrder
    patente?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    año?: SortOrder
    precio?: SortOrder
    fechaBaja?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: AutoCountOrderByAggregateInput
    _avg?: AutoAvgOrderByAggregateInput
    _max?: AutoMaxOrderByAggregateInput
    _min?: AutoMinOrderByAggregateInput
    _sum?: AutoSumOrderByAggregateInput
  }

  export type AutoScalarWhereWithAggregatesInput = {
    AND?: AutoScalarWhereWithAggregatesInput | AutoScalarWhereWithAggregatesInput[]
    OR?: AutoScalarWhereWithAggregatesInput[]
    NOT?: AutoScalarWhereWithAggregatesInput | AutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auto"> | string
    patente?: StringWithAggregatesFilter<"Auto"> | string
    modelo?: StringWithAggregatesFilter<"Auto"> | string
    marca?: StringWithAggregatesFilter<"Auto"> | string
    año?: IntWithAggregatesFilter<"Auto"> | number
    precio?: DecimalWithAggregatesFilter<"Auto"> | Decimal | DecimalJsLike | number | string
    fechaBaja?: DateTimeNullableWithAggregatesFilter<"Auto"> | Date | string | null
    estado?: EnumEstadoAutoWithAggregatesFilter<"Auto"> | $Enums.EstadoAuto
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    id?: StringFilter<"Foto"> | string
    url?: StringFilter<"Foto"> | string
    autoId?: StringFilter<"Foto"> | string
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
  }

  export type FotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    autoId?: SortOrder
    auto?: AutoOrderByWithRelationInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    url?: StringFilter<"Foto"> | string
    autoId?: StringFilter<"Foto"> | string
    auto?: XOR<AutoScalarRelationFilter, AutoWhereInput>
  }, "id">

  export type FotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    autoId?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Foto"> | string
    url?: StringWithAggregatesFilter<"Foto"> | string
    autoId?: StringWithAggregatesFilter<"Foto"> | string
  }

  export type AutoCreateInput = {
    id?: string
    patente: string
    modelo: string
    marca: string
    año: number
    precio: Decimal | DecimalJsLike | number | string
    fechaBaja?: Date | string | null
    estado?: $Enums.EstadoAuto
    fotos?: FotoCreateNestedManyWithoutAutoInput
  }

  export type AutoUncheckedCreateInput = {
    id?: string
    patente: string
    modelo: string
    marca: string
    año: number
    precio: Decimal | DecimalJsLike | number | string
    fechaBaja?: Date | string | null
    estado?: $Enums.EstadoAuto
    fotos?: FotoUncheckedCreateNestedManyWithoutAutoInput
  }

  export type AutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoAutoFieldUpdateOperationsInput | $Enums.EstadoAuto
    fotos?: FotoUpdateManyWithoutAutoNestedInput
  }

  export type AutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoAutoFieldUpdateOperationsInput | $Enums.EstadoAuto
    fotos?: FotoUncheckedUpdateManyWithoutAutoNestedInput
  }

  export type AutoCreateManyInput = {
    id?: string
    patente: string
    modelo: string
    marca: string
    año: number
    precio: Decimal | DecimalJsLike | number | string
    fechaBaja?: Date | string | null
    estado?: $Enums.EstadoAuto
  }

  export type AutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoAutoFieldUpdateOperationsInput | $Enums.EstadoAuto
  }

  export type AutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoAutoFieldUpdateOperationsInput | $Enums.EstadoAuto
  }

  export type FotoCreateInput = {
    id?: string
    url: string
    auto: AutoCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateInput = {
    id?: string
    url: string
    autoId: string
  }

  export type FotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    auto?: AutoUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
  }

  export type FotoCreateManyInput = {
    id?: string
    url: string
    autoId: string
  }

  export type FotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    autoId?: StringFieldUpdateOperationsInput | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type EnumEstadoAutoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAuto | EnumEstadoAutoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAutoFilter<$PrismaModel> | $Enums.EstadoAuto
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutoCountOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    año?: SortOrder
    precio?: SortOrder
    fechaBaja?: SortOrder
    estado?: SortOrder
  }

  export type AutoAvgOrderByAggregateInput = {
    año?: SortOrder
    precio?: SortOrder
  }

  export type AutoMaxOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    año?: SortOrder
    precio?: SortOrder
    fechaBaja?: SortOrder
    estado?: SortOrder
  }

  export type AutoMinOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    año?: SortOrder
    precio?: SortOrder
    fechaBaja?: SortOrder
    estado?: SortOrder
  }

  export type AutoSumOrderByAggregateInput = {
    año?: SortOrder
    precio?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumEstadoAutoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAuto | EnumEstadoAutoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAutoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAuto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAutoFilter<$PrismaModel>
    _max?: NestedEnumEstadoAutoFilter<$PrismaModel>
  }

  export type AutoScalarRelationFilter = {
    is?: AutoWhereInput
    isNot?: AutoWhereInput
  }

  export type FotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    autoId?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    autoId?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    autoId?: SortOrder
  }

  export type FotoCreateNestedManyWithoutAutoInput = {
    create?: XOR<FotoCreateWithoutAutoInput, FotoUncheckedCreateWithoutAutoInput> | FotoCreateWithoutAutoInput[] | FotoUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutoInput | FotoCreateOrConnectWithoutAutoInput[]
    createMany?: FotoCreateManyAutoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutAutoInput = {
    create?: XOR<FotoCreateWithoutAutoInput, FotoUncheckedCreateWithoutAutoInput> | FotoCreateWithoutAutoInput[] | FotoUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutoInput | FotoCreateOrConnectWithoutAutoInput[]
    createMany?: FotoCreateManyAutoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEstadoAutoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAuto
  }

  export type FotoUpdateManyWithoutAutoNestedInput = {
    create?: XOR<FotoCreateWithoutAutoInput, FotoUncheckedCreateWithoutAutoInput> | FotoCreateWithoutAutoInput[] | FotoUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutoInput | FotoCreateOrConnectWithoutAutoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutAutoInput | FotoUpsertWithWhereUniqueWithoutAutoInput[]
    createMany?: FotoCreateManyAutoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutAutoInput | FotoUpdateWithWhereUniqueWithoutAutoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutAutoInput | FotoUpdateManyWithWhereWithoutAutoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutAutoNestedInput = {
    create?: XOR<FotoCreateWithoutAutoInput, FotoUncheckedCreateWithoutAutoInput> | FotoCreateWithoutAutoInput[] | FotoUncheckedCreateWithoutAutoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutoInput | FotoCreateOrConnectWithoutAutoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutAutoInput | FotoUpsertWithWhereUniqueWithoutAutoInput[]
    createMany?: FotoCreateManyAutoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutAutoInput | FotoUpdateWithWhereUniqueWithoutAutoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutAutoInput | FotoUpdateManyWithWhereWithoutAutoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type AutoCreateNestedOneWithoutFotosInput = {
    create?: XOR<AutoCreateWithoutFotosInput, AutoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: AutoCreateOrConnectWithoutFotosInput
    connect?: AutoWhereUniqueInput
  }

  export type AutoUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<AutoCreateWithoutFotosInput, AutoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: AutoCreateOrConnectWithoutFotosInput
    upsert?: AutoUpsertWithoutFotosInput
    connect?: AutoWhereUniqueInput
    update?: XOR<XOR<AutoUpdateToOneWithWhereWithoutFotosInput, AutoUpdateWithoutFotosInput>, AutoUncheckedUpdateWithoutFotosInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedEnumEstadoAutoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAuto | EnumEstadoAutoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAutoFilter<$PrismaModel> | $Enums.EstadoAuto
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumEstadoAutoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAuto | EnumEstadoAutoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAuto[] | ListEnumEstadoAutoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAutoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAuto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAutoFilter<$PrismaModel>
    _max?: NestedEnumEstadoAutoFilter<$PrismaModel>
  }

  export type FotoCreateWithoutAutoInput = {
    id?: string
    url: string
  }

  export type FotoUncheckedCreateWithoutAutoInput = {
    id?: string
    url: string
  }

  export type FotoCreateOrConnectWithoutAutoInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutAutoInput, FotoUncheckedCreateWithoutAutoInput>
  }

  export type FotoCreateManyAutoInputEnvelope = {
    data: FotoCreateManyAutoInput | FotoCreateManyAutoInput[]
    skipDuplicates?: boolean
  }

  export type FotoUpsertWithWhereUniqueWithoutAutoInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutAutoInput, FotoUncheckedUpdateWithoutAutoInput>
    create: XOR<FotoCreateWithoutAutoInput, FotoUncheckedCreateWithoutAutoInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutAutoInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutAutoInput, FotoUncheckedUpdateWithoutAutoInput>
  }

  export type FotoUpdateManyWithWhereWithoutAutoInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutAutoInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    id?: StringFilter<"Foto"> | string
    url?: StringFilter<"Foto"> | string
    autoId?: StringFilter<"Foto"> | string
  }

  export type AutoCreateWithoutFotosInput = {
    id?: string
    patente: string
    modelo: string
    marca: string
    año: number
    precio: Decimal | DecimalJsLike | number | string
    fechaBaja?: Date | string | null
    estado?: $Enums.EstadoAuto
  }

  export type AutoUncheckedCreateWithoutFotosInput = {
    id?: string
    patente: string
    modelo: string
    marca: string
    año: number
    precio: Decimal | DecimalJsLike | number | string
    fechaBaja?: Date | string | null
    estado?: $Enums.EstadoAuto
  }

  export type AutoCreateOrConnectWithoutFotosInput = {
    where: AutoWhereUniqueInput
    create: XOR<AutoCreateWithoutFotosInput, AutoUncheckedCreateWithoutFotosInput>
  }

  export type AutoUpsertWithoutFotosInput = {
    update: XOR<AutoUpdateWithoutFotosInput, AutoUncheckedUpdateWithoutFotosInput>
    create: XOR<AutoCreateWithoutFotosInput, AutoUncheckedCreateWithoutFotosInput>
    where?: AutoWhereInput
  }

  export type AutoUpdateToOneWithWhereWithoutFotosInput = {
    where?: AutoWhereInput
    data: XOR<AutoUpdateWithoutFotosInput, AutoUncheckedUpdateWithoutFotosInput>
  }

  export type AutoUpdateWithoutFotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoAutoFieldUpdateOperationsInput | $Enums.EstadoAuto
  }

  export type AutoUncheckedUpdateWithoutFotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoAutoFieldUpdateOperationsInput | $Enums.EstadoAuto
  }

  export type FotoCreateManyAutoInput = {
    id?: string
    url: string
  }

  export type FotoUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateManyWithoutAutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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