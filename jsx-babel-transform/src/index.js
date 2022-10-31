import FuncComponent from './funcComponent';

/** @jsx h */

function test() {

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(ms), 0));
  }

  const es5 = async () => {
    await sleep(1000);
    console.log('1');
    console.log('2');
    await sleep(1000);
    console.log('3');
  }

  return (
    <div>
      <FuncComponent />
      <p>
        hello
      </p>
    </div>
  );
}

export default test;