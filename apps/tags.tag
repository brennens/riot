<test>
	<h1>{ opts.title }</h1>
	<form class="form-inline" onsubmit={addStarWars}>
		<div class="form-group">
			<input type="range" name="person" min="1" max="86">
		</div>
		<button class="btn btn-primary" type="submit">Add</button>
	</form>
	<list items={ data }></list>


	var self = this;
	var list = [];
	this.addStarWars = function(event) {
		var request = axios.get('http://swapi.co/api/people/' + this.person.value);
		request.then(function(response) {
			list.push({ name: response.data.name });
			self.data = list;
			self.update();
		});
		request.catch(function(info) {
			console.log(info);
		});
	}
</test>

<list>
	<ul>
		<li each={ opts.items }>{ name } <span class="glyphicon glyphicon-remove" onclick={ parent.remove }></span></li>
	</ul>

	remove(e) {
		var item = e.item
		var index = opts.items.indexOf(item)
		opts.items.splice(index, 1);
	}
</list>