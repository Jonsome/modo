import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'first-component',
})
export class FirstComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
