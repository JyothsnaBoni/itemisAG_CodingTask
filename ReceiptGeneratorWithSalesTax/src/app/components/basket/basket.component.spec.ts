import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketComponent } from './basket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Item } from 'src/app/models/item';
import { Component } from '@angular/core';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ BasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.itemForm.valid).toBeFalsy();
  });

  it('submitting a form emits an item', () => {
    expect(component.itemForm.valid).toBeFalsy();
    component.itemForm.controls['name'].setValue("Chocolate");
    component.itemForm.controls['count'].setValue(1);
    component.itemForm.controls['price'].setValue(10);
    expect(component.itemForm.valid).toBeTruthy();

    let item = {
      name: component.itemForm.controls['name'].value,
      count: component.itemForm.controls['count'].value,
      price: component.itemForm.controls['price'].value
    };

    // Trigger the onSubmit function
    component.onSubmit();

    // Now we can check to make sure the emitted value is correct
    expect(item.name).toBe("Chocolate");
    expect(item.count).toBe(1);
    expect(item.price).toBe(10);

  });

});
