//Task 1
class CssClass {
    constructor(name) {
      this.name = name;
      this.styles = {};
    }
  
    setStyle(property, value) {
      this.styles[property] = value;
    }
  
    removeStyle(property) {
      delete this.styles[property];
    }
  
    getCSS() {
      let css = `.${this.name} {\n`;
      for (let property in this.styles) {
        css += `  ${property}: ${this.styles[property]};\n`;
      }
      css += '}';
      return css;
    }

    get name() {
        return this._name;
      }
    
      set name(name) {
        this._name = name;
      }
  }
  
  const myClass = new CssClass('my-class');
  myClass.setStyle('color', 'red');
  myClass.setStyle('font-size', '18px');
  console.log(myClass.getCSS());
  console.log(myClass.name);
  myClass.name = 'new-class';
  console.log(myClass.name);

  //Task 2
  class Button {
    constructor(width, height, text) {
      this._width = width;
      this._height = height;
      this._text = text;
    }
  
    showBtn() {
      document.write(`<button style="width: ${this._width}px; height: ${this._height}px;">${this._text}</button>`);
    }
  
    get width() {
      return this._width;
    }
  
    set width(width) {
      this._width = width;
    }
  
    get height() {
      return this._height;
    }
  
    set height(height) {
      this._height = height;
    }
  
    get text() {
      return this._text;
    }
  
    set text(text) {
      this._text = text;
    }
  }
  
  class BootstrapButton extends Button {
    constructor(width, height, text, color) {
      super(width, height, text);
      this._color = color;
    }
  
    showBtn() {
      document.write(`<button class="btn" style="width: ${this._width}px; height: ${this._height}px; background-color: ${this._color};">${this._text}</button>`);
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  }
  

  const myButton = new Button(100, 50, 'Button');
  const myBootstrapButton = new BootstrapButton(100, 50, 'Button', '#ff40ff');
  myButton.showBtn();
  myBootstrapButton.showBtn();
  console.log(myButton.width);
  myButton.width = 150;
  console.log(myButton.width);
  myButton.showBtn()


//Task 3
class ExtendedDate extends Date {
    constructor(dateString) {
      super(dateString);
    }
  
    // метод для отримання дати у вигляді тексту
    get dateAsString() {
        const months = [
            'січня',
            'лютого',
            'березня',
            'квітня',
            'травня',
            'червня',
            'липня',
            'серпня',
            'вересня',
            'жовтня',
            'листопада',
            'грудня'
        ];
    
        const days = [
            `перше`,
            `друге`,
            `третє`,
            `четверте`,
            `п'яте`,
            `шосте`,
            `сьоме`,
            `восьме`,
            `дев'яте`,
            `десяте`,
            `одинадцяте`,
            `дванадцяте`,
            `тринадцяте`,
            `чотирнадцяте`,
            `п'ятнадцяте`,
            `шістнадцяте`,
            `сімнадцяте`,
            `вісімнадцяте`,
            `дев'ятнадцяте`,
            `двадцяте`,
            `двадцять перше`,
            `двадцять друге`,
            `двадцять третє`,
            `двадцять четверте`,
            `двадцять п'яте`,
            `двадцять шосте`,
            `двадцять сьоме`,
            `двадцять восьме`,
            `двадцять дев'яте`,
            `тридцяте`,
            `тридцять перше`
        ];
    
        const dayOfMonth = this.getDate();
        const month = months[this.getMonth()];
    
        return `${days[dayOfMonth - 1]} ${month}`;
      }
    
    get isFuture() {
      const today = new Date();
      return this.getTime() > today.getTime();
    }
  
    get isLeapYear() {
      const year = this.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
  
    get nextDate() {
      const tomorrow = new Date(this.getTime());
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    }
  
    set date(dateString) {
      const newDate = new Date(dateString);
      if (!isNaN(newDate.getTime())) {
        this.setTime(newDate.getTime());
      }
    }
  }
  
  let mydate = new ExtendedDate('2024-04-13');
  console.log(`Entered date is: ${mydate.dateAsString}`);
  console.log(`Is this date in the future? ${mydate.isFuture}`);
  console.log(`Is this a leap year? ${mydate.isLeapYear}`);
  console.log(`The next date is: ${new ExtendedDate(mydate.nextDate).toDateString()}`);
  
  const newDate = new ExtendedDate();
  newDate.date = '2023-05-01';
  console.log(`New date set to: ${newDate.toDateString()}`);