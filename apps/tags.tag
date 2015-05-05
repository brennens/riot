<test>
	<h1>{ opts.title }</h1>
	<form class="form-inline" onsubmit={findStarWars}>
		<div class="form-group">
			<input type="range" name="person" min="1" max="86">
		</div>
		<button class="btn btn-primary" type="submit">Search</button>
	</form>
	<list items={ data }></list>


	var self = this;
	this.findStarWars = function(event) {
		var request = axios.get('http://swapi.co/api/people/' + this.person.value);
		request.then(function(response) {
			console.log(response.data);
			self.data = response.data;
			self.update();
		});
		request.catch(function(info) {
			console.log(info);
		});
	}
</test>

<list>
	<p>{ opts.items.name }</p>
</list>

