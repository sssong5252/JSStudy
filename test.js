const exid = {
    count: 42,
    up() {
      this.count++;
    },
    down() {
      this.count--;
    },
    showCount() {
      console.log(this.count);
    },
  };
  
  exid.up();
  exid.down();
  exid.up();
  exid.up();
  exid.down();
  exid.up();
  exid.down();
  exid.up();
  exid.up();
  exid.down();
  exid.showCount(); // 42가 출력됩니다.

  const exidMethodChaining = {
    count: 42,
    up() {
      this.count++;
      return this; // 메소드 체이닝을 위해 this를 반환합니다.
    },
    down() {
      this.count--;
      return this; // 메소드 체이닝을 위해 this를 반환합니다.
    },
    showCount() {
      console.log(this.count);
      return this; // 메소드 체이닝을 위해 this를 반환합니다.
    },
  };
  
  exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount(); // 42가 출력됩니다.
  