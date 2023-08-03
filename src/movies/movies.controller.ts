import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

@Controller('movies') //url의 entry point를 컨트롤
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get(":id")
    getOne(@Param('id') moviesid: string) {
        return `This will return one movie with the id: ${moviesid}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete(":id")
    remove(@Param('id') moviesid: string) {
        return `This will delete a movie with the id: ${moviesid}`;
    }
    @Patch(":id")
    path(@Param("id") moviesid: string, @Body() updateData) {
        return {
            updateMovie: moviesid,
            ...updateData,
        };
    }

    

}
