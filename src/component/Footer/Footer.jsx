import React from 'react';

const Footer = () => {
    return (
        <div className='mx-16'>
            <div>
                <h1 className='text-3xl font-bold mb-4'>No:1  Difference Between State and Props in React.js</h1>

                <p>React is an open-source JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.<br></br>

                    How can we access data from the previous component if the data is just being flowed from component to component? The answer is props. React uses data transmission props that we need to transfer to various components.<br></br>

                    The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.<br></br>

                    A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.</p>
            </div>
            <div className='mt-10'>
                <h1 className='text-3xl font-bold mb-4'>
                    No:2  How does useState work
                </h1>
                <p>
                    useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
                </p>
            </div>
            <div className='mt-10'>
                <h1 className='text-3xl font-bold mb-4'>NO:3 What does useEffect do other than load data?</h1>
                <p>
                    <h1 className='text-xl'>1. Side-effects</h1>
                    A functional React component uses props and/or state to calculate the output. If the component makes calculations that don't target the output value, then these calculations are named side-effects.

                    Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

                    Component rendering and the side-effect logic are independent. Performing side-effects directly in the body of the component is a mistake, because the body computes the component's output or calls hooks.

                    How often the component renders isn't something you can control — if React wants to render the component, you cannot stop it.
                </p>
                <br></br>
                <p>
                    <h1 className='text-xl'>
                        2. useEffect() arguments
                    </h1><br></br>
                    callback is a function that contains the side-effect logic. callback is executed right after the DOM update.
                    dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
                    Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().
                    The document title update is the side-effect because it doesn't directly calculate the component output. That's why the document title update is placed in a callback and supplied to useEffect().

                    Also, you don't want the document title update to run every time Greet component renders. You only want it to happen when the name prop changes — that's the reason you supplied name as a dependency to useEffect(callback, [name]).
                    <br />
                    <span className='text-lg'>2.1 Dependencies argument</span><br />
                    dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. If dependencies are:

                    A. Not provided: the side-effect runs after every rendering <br />
                    B. An empty array []: the side-effect runs once after the initial rendering.<br />
                    C. Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs once after initial rendering and then only when any dependency value changes.<br /></p>
                <p>
                    <h1 className='text-xl'>3. Component lifecycle</h1>
                    The dependencies argument of the useEffect() lets you catch certain component lifecycle events: when the component has been mounted or a specific prop or state value has changed.
                    <span className='text-lg'> 3.1 Component did mount</span>
                    Use an empty dependencies array to invoke a side-effect once after component mounting:useEffect(..., []) was supplied with an empty array as the dependencies argument. When configured in such a way, the useEffect() executes the callback just once, after initial rendering (mounting).

                    Even if the component re-renders with different name property, the side-effect runs just once after initial rendering:
                    <span className='text-lg'> 3.2 Component did updatet</span>
                    Each time the side-effect uses props or state values, you must indicate these values as dependencies:useEffect(callback, [prop, state]) invokes the callback once after mounting, and again after committing the changes to the DOM, if and only if any value in the dependencies array [prop, state] has changed.

                    By using the dependencies argument of useEffect(), you control when the side-effect is called, independently from the rendering cycles of the component. Again, that's the essence of useEffect() hook.

                    Let's improve the Greet component by using name prop in the document title:name prop is mentioned in the dependencies argument of useEffect(..., [name]). useEffect() hook runs the side-effect after initial rendering, and on later renderings only if the name value changes.
                </p>
                <p>
                    <h1></h1>
                </p>
            </div>

        </div>
    );
};

export default Footer;