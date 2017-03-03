import { TestBed, inject } from '@angular/core/testing';
import { UploadTodoService } from './upload-todo.service';

describe('UploadTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadTodoService]
    });
  });

  it('should ...', inject([UploadTodoService], (service: UploadTodoService) => {
    expect(service).toBeTruthy();
  }));
});
