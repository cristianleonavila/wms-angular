import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export class ControlFlowComponent {

  public frameworks = signal(['Angular', 'React', 'Vue']);
  public frameworks2 = signal([]);

  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
