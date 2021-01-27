<template>
  <div class="calculator">
    <div class="answer">{{ this.answer }}</div>
    <div class="display">
      {{ this.currentExpression }} {{ operator }} {{ cacheNumber }}
    </div>
    <div @click="clear" id="clear" class="btn operator">C</div>
    <div @click="setOperator('+/-')" id="sign" class="btn operator">+/-</div>
    <div @click="setOperator('%')" id="percent" class="btn operator">%</div>
    <div @click="setOperator('/')" id="divide" class="btn operator">/</div>
    <div @click="append('7')" id="n7" class="btn">7</div>
    <div @click="append('8')" id="n8" class="btn">8</div>
    <div @click="append('9')" id="n9" class="btn">9</div>
    <div @click="setOperator('*')" id="times" class="btn operator">*</div>
    <div @click="append('4')" id="n4" class="btn">4</div>
    <div @click="append('5')" id="n5" class="btn">5</div>
    <div @click="append('6')" id="n6" class="btn">6</div>
    <div @click="setOperator('-')" id="minus" class="btn operator">-</div>
    <div @click="append('1')" id="n1" class="btn">1</div>
    <div @click="append('2')" id="n2" class="btn">2</div>
    <div @click="append('3')" id="n3" class="btn">3</div>
    <div @click="setOperator('+')" id="plus" class="btn operator">+</div>
    <div @click="append('0')" id="n0" class="zero">0</div>
    <div @click="dot('.')" id="dot" class="btn">.</div>
    <div @click="equal" id="equal" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [],
      currentExpression: "",
      operator: "",
      cacheNumber: "",
      answer: 0,
      operatorClicked: false,
    };
  },
  methods: {
    append(number) {
      this.entries.push(number);

      this.evaluate();
    },
    evaluate() {
      let number = "";
      if (this.entries.length > 0) {
        this.entries.forEach((item) => {
          number += item;
        });
        number = Number(number);
      } else {
        number = 0;
      }

      if (this.operatorClicked == true) {
        return (this.cacheNumber = number);
      }
      this.currentExpression = number;
    },
    equal() {
      //Displaying the first number after that set operator then display the second number.
      let equal;
      switch (this.operator) {
        case "+":
          equal = this.addExp(this.currentExpression, this.cacheNumber);
          break;
        case "-":
          equal = this.minusExp(this.currentExpression, this.cacheNumber);
          break;
        case "*":
          equal = this.mutiplyExp(this.currentExpression, this.cacheNumber);
          break;
        case "/":
          equal = this.divideExp(this.currentExpression, this.cacheNumber);
          break;
        default:
          equal = this.currentExpression;
          break;
      }
      this.answer = equal;
    },
    addExp(a, b) {
      return a + b;
    },
    minusExp(a, b) {
      return a - b;
    },
    mutiplyExp(a, b) {
      return a * b;
    },
    divideExp(a, b) {
      return a / b;
    },
    percentExp(a) {
      return a / 100;
    },
    setOperator(op) {
      console.log();

      if (!this.operator) {
        this.clearEntries();
        this.operator = op;
      }
      this.operator = op;
      this.operatorClicked = true;
    },
    clearEntries() {
      this.entries = [""];
    },

    clear() {
      this.currentExpression = "";
      if (this.currentExpression !== null) {
        this.entries = [this.currentExpression];
      } else {
        this.entries = ["0"];
      }
    },
  },
  watch: {},
};
</script>

<style lang="css" scoped>
.calculator {
  height: 36rem;
  width: 22rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: white;
  position: absolute;
  margin-top: 10rem;
  display: grid;
  grid-template-rows: repeat(7, minmax(60px, auto));
  grid-template-columns: repeat(4, 60px);
  grid-gap: 12px;
  padding: 35px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  background-color: #ffffff;
  box-shadow: 0px 3px 80px -30px rgba(13, 81, 134, 1);
}
.btn,
.zero {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #484848;
  background-color: #f4faff;
  border-radius: 5px;
}

.display,
.answer {
  grid-column: 1 / 5;
  display: flex;
  align-items: center;
}

.display {
  color: #a3a3a3;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: clip;
}

.answer {
  font-weight: 500;
  color: #146080;
  font-size: 55px;
  height: 65px;
  text-overflow: clip;
}

.zero {
  grid-column: 1 / 3;
}

.operator {
  background-color: #d9efff;
  color: #3fa9fc;
}
</style>