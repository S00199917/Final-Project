import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCharactersListComponent } from './favorite-characters-list.component';

describe('FavoriteCharactersListComponent', () => {
  let component: FavoriteCharactersListComponent;
  let fixture: ComponentFixture<FavoriteCharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCharactersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
