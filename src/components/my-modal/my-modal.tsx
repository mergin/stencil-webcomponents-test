import { Component, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss',
    shadow: true
})
export class MyModal {
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

    // private getText(): string {
    //     return format(this.first, this.middle, this.last);
    // }

    render() {
        return (
            <h1>This is a modal</h1>
        );
    }
}
