
import './App.css';
import Graph1recharts from './MyComponents/Graph1recharts';
import { Graph2 } from './MyComponents/Graph2';


function Activites(props) {
	return (
		<>
			<div className='singleactivity'>
				<div>
					&#9989;
				</div>
				<div className='activitytxt'>
					<div className='titlesx'>{props.title}</div>
					<div className='subtitlesx'>{props.subtitle}</div>
				</div>
			</div>

		</>
	);
}

function App() {

	return (
		<div className="App">
			<div className='box1'>
				<div className='graphbox1'>
					<div className='titlebar2'>
						<div className='title2'>
							<p style={{ fontSize: "21px", color: "#161616" }}>Your company information </p>
							<p style={{ fontSize: "16px", color: "#8d8d8d", marginTop:"-18px" }}>Main metrics</p>
						</div>
						<div className='savx'>
							<div className='sandv1'>
								Total Shares
								<span style={{ color: "#2896e9" }}> 3660</span>
							</div>
							<div className='sandv2'>
								Total Value
								<span style={{ color: "#2896e9" }}> $ 3660</span>
							</div>
						</div>

					</div>
					<br /><br /><br />
					<div className='graph1box'>
						<Graph1recharts />
					</div>

				</div>

				<div className='activitybox'>
					<div>
						Past Activity
					</div>

					<div class="Rectangle-16837"></div>
					<br />
					<div >
						<Activites title="Company creation" subtitle="January 1 2022" />
						<div class="Line-127"></div>
						<br />
						<Activites title="Loans tokenized" subtitle="February 1 2022" />
						<div class="Line-127"></div>
						<br />
						<Activites title="Legal status modified" subtitle="March 1 2022" />
					</div>
				</div>
			</div>


			<div className='box2'>
				<p style={{ fontSize: "25px", color: "#161616" }}>Loans Metrics</p>
				<p style={{ fontSize: "12px", color: "#8d8d8d" }}>Loans Owners</p>
				<Graph2 />
			</div>

		</div>
	);
}

export default App;
