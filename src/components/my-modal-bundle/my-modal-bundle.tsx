import {
    Component,
    Prop,
    h,
    Method,
    Element,
    State,
    Listen
} from '@stencil/core';

@Component({
    tag: 'my-modal-bundle',
    shadow: true
})
export class myModalBundle {

    @Element() modalEl: HTMLElement;

    @State() show: boolean = false;

    // title
    @Prop() title: string;

    // content
    @Prop() content: string;

    @Method()
    open(): void {
        this.show = true;
    }

    @Method()
    close(): void {
        this.show = false;
    }

    // @Listen('my-modal:onClose') DOESN'T WORK!!!!
    @Listen('onClose')
    closeModalHandler(): void {
        this.close();
    }

    render() {

        let content = null;
        if (this.show) {
            content = [
                <my-backdrop></my-backdrop>,
                <my-modal class="rainbow"
                    title={this.title}
                    content={this.content}>
                </my-modal>
            ];
        }

        return content;
    }
}
