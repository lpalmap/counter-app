import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
	state = {
		counters: [{ id: 1, value: 3 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }],
	};

	handleDelete = counterId => {
		//console.log('Handle delete ', counterId);
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};

	handleReset = () => {
		console.log('Handle Reset.');
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		console.log(this.state.counters);
		console.log(counters);
		this.setState({ counters });
	};

	handleIncrement = counter => {
		//console.log('Handle increment', counter);
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		//console.log(this.state.counters);
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					<Counters
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
						counters={this.state.counters}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
