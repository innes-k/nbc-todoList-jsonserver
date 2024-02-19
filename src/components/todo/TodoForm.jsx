/* eslint-disable react/prop-types */
// uncontrolled component
const TodoForm = ({ onSubmitTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!title || !content) {
      return;
    }

    onSubmitTodo({
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
