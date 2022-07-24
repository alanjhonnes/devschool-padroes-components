import { FormsModule } from '@angular/forms';
import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { CounterComponent } from './counter.component';

export default {
  title: 'Counter',
  component: CounterComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta<CounterComponent>;

const Template: Story<CounterComponent> = (args: CounterComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule, FormsModule],
  },
  template: `
  <app-counter [(ngModel)]="counter"></app-counter>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  value: 30,
};
