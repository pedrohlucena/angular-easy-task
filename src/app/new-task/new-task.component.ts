import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../tasks/task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<undefined>();
  @Output() add = new EventEmitter<NewTaskData>();
  title = '';
  summary = '';
  dueDate = '';

  onSubmit () {
    this.add.emit({ 
      title: this.title, 
      summary: this.summary, 
      dueDate: this.dueDate 
    });
  }

  onCancel () {
    this.cancel.emit();
  }
}
