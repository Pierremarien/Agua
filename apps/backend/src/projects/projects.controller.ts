import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiQuery } from "@nestjs/swagger";
import { ProjectEntity } from "./entities/project.entity";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiCreatedResponse({ type: ProjectEntity })
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @ApiOkResponse({ type: [ProjectEntity] })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination', type: Number })
  findAll(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    return this.projectsService.findAll(page);
  }

  @Get("genre/:genreId")
  @ApiOkResponse({ type: [ProjectEntity] })
  findProjectsByGenre(@Param("genreId") genreId: number) {
    return this.projectsService.findProjectsByGenre(genreId);
  }

  @Get(":id")
  @ApiOkResponse({ type: ProjectEntity })
  findOne(@Param("id") id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: ProjectEntity })
  update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: ProjectEntity })
  remove(@Param("id") id: string) {
    return this.projectsService.remove(+id);
  }
}
