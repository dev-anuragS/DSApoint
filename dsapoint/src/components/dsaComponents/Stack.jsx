// Name of COmponents start with Capital

import React from 'react'
import '../sass/dsaSass/stack.scss'

const Stack = () => {
    return (
        <>
            <h2>Stack Data Structure </h2>
            <hr />
            <div id="stackcontent">
                <div id="theory">
                    <p>Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out)</p>
                    {/* insert an image */}
                    <p>There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.</p>
                    <h3>Basic Operation</h3>
                    <p>Stack operations may involve initializing the stack, using it and then de-initializing it. Apart from these basic stuffs, a stack is used for the following two primary operations −</p>
                    <ul>
                        <li><strong>push() </strong> − Pushing (storing) an element on the stack.</li>
                        <li><strong>pop() </strong> − Removing (accessing) an element from the stack.</li>
                    </ul>
                    <p>To use a stack efficiently, we need to check the status of stack as well. For the same purpose, the following functionality is added to stacks −</p>
                    <ul>
                        <li><strong>peek() </strong> − get the top data element of the stack, without removing it</li>
                        <li><strong>isFull() </strong>  − check if stack is full</li>
                        <li><strong>isEmpty() </strong> − check if stack is empty.</li>
                    </ul>
                    <p>At all times, we maintain a pointer to the last PUSHed data on the stack. As this pointer always represents the top of the stack, hence named top. The top pointer provides top value of the stack without actually removing it.</p>
                </div>
                <div id="animation">
                    <div id="infinite">
                        <div className="mainStack">
                            <div className="elem" id="firstElem">1
                                <div id="pop">pop </div>
                                <div id="push">push </div>
                            </div>
                            <div className="elem">2</div>
                            <div className="elem">3</div>
                            <div className="elem">4</div>
                        </div>
                        <p><strong>Stack</strong></p>
                    </div>

                    <div class="visualizeCard">
                        <div class="cardLogo">
                            <h1>dp</h1>
                        </div>
                        <div class="content">
                            <h2>Stack Operations</h2>
                            <ul>
                                <li>Push</li>
                                <li>Pop</li>
                                <li>Peek</li>
                                <li>Top</li>
                            </ul>
                            <button class="cardBtn">Visulaize</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stack
