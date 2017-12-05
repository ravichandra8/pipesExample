import { NgModule } from '@angular/core';
import { CustompipePipe } from './custompipe/custompipe';
@NgModule({
	declarations: [CustompipePipe],
	imports: [],
	exports: [CustompipePipe]
})
export class PipesModule {}
