

import { Injectable } from '@angular/core';
import { Store, } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { AppState } from '../state/app.state';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PaginationInformation } from 'src/app/calculator/models/calulator-model';
import { of } from 'rxjs';
import { RequestService } from 'src/app/request.service';
import { GetPaginator, EUPaginatorActions, GetPaginatorSuccess, GetPaginatorError } from '../actions/paginator.actions';


@Injectable()
export class PaginatorEffects {

    constructor(private actions$: Actions, private store$: Store<AppState>, public requestService: RequestService) {

    }

    @Effect()
    getPaginationInfo$ = this.actions$.pipe(
        ofType<GetPaginator>(EUPaginatorActions.GetPaginator),
        switchMap(() =>
            this.requestService.getMathOperationsList().pipe(
                map((operations: PaginationInformation) => new GetPaginatorSuccess(operations)),
                catchError(error => of(new GetPaginatorError(error))
                ))
        ),
    );
}
