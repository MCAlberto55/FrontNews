import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RssBarComponent } from './rss-bar.component';

describe('RssBarComponent', () => {
  let component: RssBarComponent;
  let fixture: ComponentFixture<RssBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RssBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RssBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
