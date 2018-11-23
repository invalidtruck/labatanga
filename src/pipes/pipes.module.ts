import { NgModule } from '@angular/core';
import { KeysPipe, filerCat, SearchPipe } from './pipex/pipex';
@NgModule({
	declarations: [KeysPipe, filerCat,SearchPipe],
	imports: [],
	exports: [KeysPipe, filerCat,SearchPipe]
})
export class PipesModule {
	
}
