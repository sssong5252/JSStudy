const stackCreate = () => ({
  arr: []
});

const stackEmpty = (stack) => {
  return stack.arr.length === 0;
};

const stackPush = (stack, data) => {
  stack.arr.push(data);
};

const stackPeek = (stack) => {
  if (stackEmpty(stack)) {
    return null;
  }
  return stack.arr[stack.arr.length - 1];
};

const stackPop = (stack) => {
  if (stackEmpty(stack)) {
    return null;
  }
  stack.arr.pop();
};

// 사용 예시
const myStack = stackCreate();
stackPush(myStack, 1);
stackPush(myStack, 2);
stackPush(myStack, 3);
console.log(stackPeek(myStack)); // 3
stackPop(myStack);
console.log(stackPeek(myStack)); // 2
stackPop(myStack);
console.log(stackPeek(myStack)); // 1
stackPop(myStack);
console.log(stackEmpty(myStack)); // true
  