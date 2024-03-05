import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  genreId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  subgenreId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty()
  preview: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  target: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  clientId: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  terminated_description: string;
}
