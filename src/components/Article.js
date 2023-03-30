import React from 'react'

function Article(props) {
  return (
    <div>
        <article>
            <h1>{props.titulo}</h1>
            <h4>{props.descricao}</h4>
        </article>
        <br/>
    </div>
  )
}

export default Article