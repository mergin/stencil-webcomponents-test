import { Component, Prop, h, Method, Element, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss',
    shadow: true
})
export class MyModal {

    buttons: string[] = ['Okay', 'Cancel'];

    @State() showOptions: boolean = false;

    @Element() modalEl: HTMLElement;

    // title
    @Prop() title: string;

    // content
    @Prop() content: string;

    @Method()
    open(): void {
        this.modalEl.style.display = 'block';
    }

    @Method()
    close(): void {
        this.modalEl.style.display = 'none';
        this.showOptions = false;
    }

    showOptionsHandler(): void {
        this.showOptions = true;
    }

    openModalHandler(): void {
        this.open();
    }

    closeModalHandler(): void {
        this.close();
    }

    // private getText(): string {
    //     return format(this.first, this.middle, this.last);
    // }

    render() {

        let options = null;
        if (this.showOptions) {
            options = (
                this.buttons.map(btn => (
                    <button onClick={this.closeModalHandler.bind(this)}>
                        {btn}
                    </button>
                ))
            )
        }
        return (
            [
                <h1>{this.title}</h1>,
                <p>{this.content}</p>,
                <hr />,
                <button onClick={this.showOptionsHandler.bind(this)}>Show Options</button>,
                <hr />,
                <div>
                    {options}
                </div>
            ]
        );
    }
}
