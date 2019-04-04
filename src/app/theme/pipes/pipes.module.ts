import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        ProfilePicturePipe,
        TruncatePipe,
    ],
    exports: [
        ProfilePicturePipe,
        TruncatePipe,
    ]
})
export class PipesModule { }
