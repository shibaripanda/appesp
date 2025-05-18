import { IsDefined, IsNumber, IsString } from 'class-validator'

export class AuthClientDto {

  @IsDefined()
  @IsNumber()
  readonly auth_date: number

  @IsDefined()
  @IsString()
  readonly first_name: string

  @IsDefined()
  @IsString()
  readonly hash: string

  @IsDefined()
  @IsNumber()
  readonly id: number

  @IsDefined()
  @IsString()
  readonly photo_url: string

  @IsDefined()
  @IsString()
  readonly username: string
}

