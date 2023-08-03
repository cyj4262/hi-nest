import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies') //url의 entry point를 컨트롤
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param('id') moviesid: string) {
        return `This will return one movie with the id: ${moviesid}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete("/:id")
    remove(@Param('id') moviesid: string) {
        return `This will delete a movie with the id: ${moviesid}`;
    }
    @Patch("/:id")
    path(@Param("id") moviesid: string) {
        return `This will patch a movie with the id: ${moviesid}`;
    }

}
