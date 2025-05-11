import { IsDefined, IsNumber, IsString } from 'class-validator'

export class AppDto {

  @IsDefined()
  @IsNumber()
  readonly now: number

  @IsDefined()
  @IsNumber()
  readonly humidity: number

  @IsDefined()
  @IsNumber()
  readonly temperature: number

  @IsDefined()
  @IsNumber()
  readonly light: number

  @IsDefined()
  @IsString()
  readonly status: string

  @IsDefined()
  @IsString()
  readonly id: string

  @IsDefined()
  @IsString()
  readonly ff: string
}