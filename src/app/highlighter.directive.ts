import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[highlighter]'
})
export class HighlighterDirective {

  highlightContent:boolean = false;

  constructor() { }

  @HostBinding('class.highlight')
  get shouldHighlight()
  {
    return this.highlightContent;
  }

  @HostListener('mouseover')
  onMouseOver()
  {
    this.highlightContent = true;
  }

 @HostListener('mouseout')
  onMouseOut()
  {
    this.highlightContent = false;
  }
}
