import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.autosService.create(createAutoDto);
  }

  // Uso @ApiOperation y @ApiQuery porque Swagger no reconoce el ? como opcional de TypeScript. Sin esto Swagger no reconoce los parametros como opcionales.
  @ApiOperation({ summary: 'Obtener listado de autos paginado y filtrado' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'marca', required: false, type: String })
  @ApiQuery({ name: 'estado', required: false, type: String })
  @ApiQuery({ name: 'añoMin', required: false, type: Number })
  @ApiQuery({ name: 'añoMax', required: false, type: Number })
  @ApiQuery({ name: 'precioMin', required: false, type: Number })
  @ApiQuery({ name: 'precioMax', required: false, type: Number })
  //En findAll uso @Query porque se usa para parámetros de consulta. Son ideales para filtros, paginación, ordenamiento. En cambio, @Param se usa solo para operaciones que identifican un recurso específico
  @Get()
  findAll(@Query('page') page: string = "1",
  @Query('pageSize') pageSize: string = "10",
  @Query('marca') marca?: string,
  @Query('estado') estado?: string,
  @Query('añoMin') añoMin?: number,
  @Query('añoMax') añoMax?: number,
  @Query('precioMin') precioMin?: number,
  @Query('precioMax') precioMax?: number) {
    return this.autosService.findAll(parseInt(page, 10), parseInt(pageSize, 10), {
      marca,
      estado,
      añoMin: añoMin ? Number(añoMin) : undefined,
      añoMax: añoMax ? Number(añoMax) : undefined,
      precioMin: precioMin ? Number(precioMin) : undefined,
      precioMax: precioMax ? Number(precioMax) : undefined
    });
  }

  @Get(':patente')
  findOne(@Param('patente') patente: string) {
    return this.autosService.findOne(patente);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoDto: UpdateAutoDto) {
    return this.autosService.update(id, updateAutoDto);
  }

  @Delete(':patente')
  remove(@Param('patente') patente: string) {
    return this.autosService.remove(patente);
  }
}
