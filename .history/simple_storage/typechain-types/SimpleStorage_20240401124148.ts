/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface SimpleStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addPerson"
      | "getPerson"
      | "nameToFavoriteNumber"
      | "people"
      | "retrive"
      | "store"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addPerson",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPerson",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nameToFavoriteNumber",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "people",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "retrive", values?: undefined): string;
  encodeFunctionData(functionFragment: "store", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "addPerson", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPerson", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nameToFavoriteNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "people", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "retrive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
}

export interface SimpleStorage extends BaseContract {
  connect(runner?: ContractRunner | null): SimpleStorage;
  waitForDeployment(): Promise<this>;

  interface: SimpleStorageInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addPerson: TypedContractMethod<
    [_name: string, _favoriteNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  getPerson: TypedContractMethod<
    [_index: BigNumberish],
    [[bigint, string]],
    "view"
  >;

  nameToFavoriteNumber: TypedContractMethod<[arg0: string], [bigint], "view">;

  people: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { favoriteNumber: bigint; name: string }],
    "view"
  >;

  retrive: TypedContractMethod<[], [bigint], "view">;

  store: TypedContractMethod<
    [_favoriteNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addPerson"
  ): TypedContractMethod<
    [_name: string, _favoriteNumber: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getPerson"
  ): TypedContractMethod<[_index: BigNumberish], [[bigint, string]], "view">;
  getFunction(
    nameOrSignature: "nameToFavoriteNumber"
  ): TypedContractMethod<[arg0: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "people"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { favoriteNumber: bigint; name: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "retrive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "store"
  ): TypedContractMethod<[_favoriteNumber: BigNumberish], [void], "nonpayable">;

  filters: {};
}
