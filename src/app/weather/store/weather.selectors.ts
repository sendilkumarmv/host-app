import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeatherState, IAppState } from 'src/app/app.state';

export const featureKey = 'weatherState';

export const selectFeature = createFeatureSelector<IAppState, IWeatherState>(featureKey);

export const selectWeatherCities = createSelector(
  selectFeature,
  (state: IWeatherState) => state?.cities
);

export const selectLoadingStatus = createSelector(
  selectFeature,
  (state: IWeatherState) => state?.isLoading
);

export const selectError = createSelector(
  selectFeature,
  (state: IWeatherState) => state?.error
)

export const selectWeatherData = createSelector(
  selectFeature,
  (state: IWeatherState) => state?.data
)

export const selectErrorStatus = createSelector(
  selectFeature,
  (state: IWeatherState) => state?.errorOccured
)
