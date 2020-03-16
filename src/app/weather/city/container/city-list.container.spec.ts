import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListContainer } from './city-list.container';

describe('CityList.ContainerComponent', () => {
  let component: CityListContainer;
  let fixture: ComponentFixture<CityListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
