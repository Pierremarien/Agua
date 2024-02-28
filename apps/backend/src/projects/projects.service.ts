import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}
  create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({ data: createProjectDto });
  }

  async findAll(page = 1, pageSize = 10) {
  
    const totalProjects = await this.prisma.project.count();
    const totalPages = Math.ceil(totalProjects / pageSize);
    const skip = (page - 1) * pageSize;
  
    const projects = await this.prisma.project.findMany({
      skip,
      take: pageSize,
      select: {
        id: true,
        title: true,
        preview: true,
        status: true,
        clientId: true,
      }
    });
  
    const projectData = await Promise.all(
      projects.map(async (project) => {
        const files = await this.prisma.file.findMany({
          where: {
            projectId: project.id,
            fileTypes: {
              some: {
                fileType: {
                  id: 3
                }
              }
            }
          },
          select: {
            id: true,
            name: true,
            path: true
          }
        });

        const clients = await this.prisma.client.findMany({
          where: {
            id: project.clientId,
          },
          select: {
            name: true,
          },
        });
  
        return {
          ...project,
          Files: files,
          client: clients,
        };
      })
    );
    
    return {
      data: projectData,
      meta: {
        totalProjects,
        totalPages,
        currentPage: page,
      },
    };
  }

  async findProjectsByGenre(genreId: number, page = 1, pageSize = 10) {

    const totalProjects = await this.prisma.project.count({
      where: { genre: { id: Number(genreId) } },
    });
    const totalPages = Math.ceil(totalProjects / pageSize);
    const skip = (page - 1) * pageSize;

    const projects = await this.prisma.project.findMany({
      skip,
      take: pageSize,
      where: { genre: { id: Number(genreId) } },
      select: {
        id: true,
        title: true,
        preview: true,
        status: true,
        clientId: true,
      },
    });
     
    

    const projectData = await Promise.all(
      projects.map(async (project) => {
        const files = await this.prisma.file.findMany({
          where: {
            projectId: project.id,
            fileTypes: {
              some: {
                fileType: {
                  id: 3,
                },
              },
            },
          },
          select: {
            id: true,
            name: true,
            path: true,
          },
        });

        const clients = await this.prisma.client.findMany({
          where: {
            id: project.clientId,
          },
          select: {
            name: true,
          },
        });

        return {
          ...project,
          Files: files,
          client: clients,
        };
      })
    );

    return {
      data: projectData,
      meta: {
        totalProjects,
        totalPages,
        currentPage: page,
      },
    };
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id: id },
      include: {
        Files: true,
        References: true,
        client: true,
      },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
