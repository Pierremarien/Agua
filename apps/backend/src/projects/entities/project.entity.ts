import { File, Project, Reference } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ProjectEntity implements Project {
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    preview: string;
    @ApiProperty()
    target: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    clientId: number;
    @ApiProperty()
    genreId: number;
    @ApiProperty()
    subgenreId: number;
    @ApiProperty()
    terminated_description: string | null;
    @ApiProperty()
    Files: File[] | null;
    @ApiProperty()
    References: Reference[] | null;
}
