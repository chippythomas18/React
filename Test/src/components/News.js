// without jsx
import React from 'react'
import react from 'react'
const News =()=>{
    // return (
    //     <div class="abc" id="hello">
    //         <h1>Hello</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'abc'},
                React.createElement('h1',null,'Hello') )
}
export default News