import divideFunction from './8-try.js';

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(new Error(error.message));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}

console.log(
  guardrail(() => {
    return divideFunction(0, 0);
  })
);
