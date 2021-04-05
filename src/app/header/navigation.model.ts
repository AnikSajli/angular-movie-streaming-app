export interface Icon {
  type: 'mat-icon';
  name: string;
  color ?: string;
}

export interface Navigation {
  title: string;
  type: 'action' | 'url';
  textColor ?: string;
  textColorHover ?: string;
  icon ?: Icon;
  url ?: string;
  action ?: any;
}
