import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'menu-link',
  styleUrl: 'menu-link.scss',
  shadow: true,
})
export class MenuLink {

  @Prop() href : string;
  @Prop() target : string;
  @Prop() active : boolean;

  getHref() : string {
    return this.href;
  }

  getTarget() : string {
    return this.target;
  }


  isActive() : boolean {
    return this.active;
  }

  getClasses() : string {
    const classes = ['nav-link'];
    if (this.isActive()) {
      classes.push('active');
    }
    return classes.join(' ');
  }

  render() {
    return (
      <Host>
        <li class="nav-item">
          <a href={this.getHref()} target={this.getTarget()} class={this.getClasses()}>
            <slot />
          </a>
        </li>
      </Host>
    );
  }

}
