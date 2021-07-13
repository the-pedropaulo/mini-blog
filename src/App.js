import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {


  const [posts, setNewPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    axios.get('https://alemdocodigo.herokuapp.com/list_posts')
	.then((response) => {
		setNewPosts(response.data.posts)
		setLoading(false)
    }).catch(() => {
		console.log('deu errado')
	})
    
	}, [])


	return(
		<div className="app">

			<div className="cards">

				{ loading ? 
				
						( <div class="loadingio-spinner-rolling-ej17kcce5w5"><div class="ldio-wix3oy7gesp">
						<div></div>
						</div></div> ) :
						
						posts.map((post, key) => {
							return(
							<div className="card" key={key} >
								<div className="card-body" >
									<h1>{post.title}</h1>
									<div className="line"></div>
									<h2>{post.content}</h2>
								</div>
						</div>
						)
					})
				}

			</div>

		</div>
	)

}

export default App;