import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  genreId: number;
  @ApiProperty()
  subgenreId: number;
  @ApiProperty()
  preview: string;
  @ApiProperty()
  target: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  clientId: number;
  @ApiProperty({ required: false })
  terminated_description: string;
}
