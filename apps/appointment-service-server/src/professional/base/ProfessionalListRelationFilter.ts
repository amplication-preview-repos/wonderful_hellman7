/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfessionalWhereInput } from "./ProfessionalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProfessionalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProfessionalWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfessionalWhereInput)
  @IsOptional()
  @Field(() => ProfessionalWhereInput, {
    nullable: true,
  })
  every?: ProfessionalWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfessionalWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfessionalWhereInput)
  @IsOptional()
  @Field(() => ProfessionalWhereInput, {
    nullable: true,
  })
  some?: ProfessionalWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfessionalWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfessionalWhereInput)
  @IsOptional()
  @Field(() => ProfessionalWhereInput, {
    nullable: true,
  })
  none?: ProfessionalWhereInput;
}
export { ProfessionalListRelationFilter as ProfessionalListRelationFilter };
