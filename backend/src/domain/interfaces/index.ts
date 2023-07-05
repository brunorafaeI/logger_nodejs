export interface IUseCase {
  execute(): Promise<any>
}

export interface IReadRepository<T> {
  find(criteria: any): Promise<T[] | null>
  findById(id: string): Promise<T | null>
}

export interface IWriteRepository<T> {
  save(data: any): Promise<T | void>
}