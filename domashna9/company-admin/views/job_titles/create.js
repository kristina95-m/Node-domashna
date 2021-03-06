<%- include('../partials/header') %>

<% if (typeof error !== 'undefined') { %>
  <div class="alert alert-danger" role="alert"><%= error %></div>
<% } %>

<form action="/job-titles" method="post" class="mt-5" style="width: 500px; margin: 0 auto;">
  <div class="mb-3">
    <label class="form-label">Job Title</label>
    <input type="text" name="name" class="form-control" placeholder="Web Engineer">
  </div>
  <div class="mb-3">
    <label class="form-label">Job Description</label>
    <textarea class="form-control" name="description" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Create</button>
</form>

<%- include('../partials/footer') %>