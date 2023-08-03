import { Injectable } from '@nestjs/common';
import { Movie } from './entites/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[]= [];

    getAll(): Movie[]{
        return this.movies;
    }
    getOne(id:string): Movie{
        return this.movies.find(movie => movie.id === parseInt(id)); // 'parseInt()'는   '+id'와 같음
    } 
    deleteOne(id:string): boolean{
         this.movies.filter(movie => movie.id !== +id);
         return true ;
    }
    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ... movieData, 
        })
    }
}
