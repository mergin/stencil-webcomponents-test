import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
    tag: 'my-component-2',
    styleUrl: 'my-component-2.scss',
    shadow: true
})
export class MyComponent2 {
    /**
     * The first name
     */
    @Prop() first: string;

    /**
     * The middle name
     */
    @Prop() middle: string;

    /**
     * The last name
     */
    @Prop() last: string;

    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    render() {
        return (
            <div>
                Hello, World! I'm {this.getText()}
            </div>
        );
    }
}
