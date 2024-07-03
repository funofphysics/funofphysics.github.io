fetch('./search_index.json')
      .then(response => response.json())
      .then(data => {
        const posts = data.posts;
        const idx = lunr(function () {
          this.ref('id')
          this.field('title')
          this.field('content')
          this.field('author')
          this.field('date')

          posts.forEach(post => {
            this.add(post)
          })
        });

        document.getElementById('search').addEventListener('input', function () {
          const query = this.value;
          const results = idx.search(query);

          const resultsContainer = document.getElementById('results');
          resultsContainer.innerHTML = '';

          if (results.length) {
            results.forEach(result => {
              const post = posts.find(post => post.id === result.ref);
              const resultItem = document.createElement('div');
              resultItem.innerHTML = `
                <a href="${post.url}">${post.title}</a>
                <p>${post.author}</p>
                <p>${post.date}</p>
              `;
              resultsContainer.appendChild(resultItem);
            });
          } else {
            resultsContainer.innerHTML = '<p>No results found!</p>';
          }
        });
      });