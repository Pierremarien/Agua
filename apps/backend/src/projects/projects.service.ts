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
    });
    
    const projectData = await Promise.all(projects.map(async project => {
      const files = await this.prisma.file.findMany({
        where: {
          projectId: project.id,
        },
        include: {
          fileTypes: {
            include: {
              fileType: true
            }
          }
        }
      });
      const filesWithType3 = files.filter(file => 
        file.fileTypes.some(fileTypes => fileTypes.fileType.id === 3)
      );
      return {
        id: project.id,
        title: project.title,
        preview: project.preview,
        status: project.status,
        clientId: project.clientId,
        genreId: project.genreId,
        subgenreId: project.subgenreId,
        Files: filesWithType3,
      };
    }));
  
    return {
      data: projectData,
      meta: {
        totalProjects,
        totalPages,
        currentPage: page,
      }
    };
  }

  findProjectsByGenre(genreId: number) {
    return this.prisma.project.findMany({
      where: { genre: { id: Number(genreId) } },
    });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id: id },
      include: {
        Files: true,
        References: true,
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
