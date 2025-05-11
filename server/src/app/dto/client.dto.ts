import { IsDefined, IsString } from 'class-validator'

export class ClientDto {

  @IsDefined()
  @IsString()
  readonly authKey: string
}