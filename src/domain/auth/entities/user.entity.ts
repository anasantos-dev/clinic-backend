export class UserEntity {
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string, 
  ) {}
}
