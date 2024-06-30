import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  @Output() close = new EventEmitter<undefined>();

  title = '';
  summary = '';
  dueDate = '';

  private tasksService = inject(TasksService);

  onSubmit () {
    const newTask = { 
      title: this.title, 
      summary: this.summary, 
      dueDate: this.dueDate 
    }

    this.tasksService.addTask(newTask, this.userId);

    this.close.emit();
  }

  onCancel () {
    this.close.emit();
  }
}
