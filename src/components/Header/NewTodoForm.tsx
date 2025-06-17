import { memo, FC } from 'react';

type NewTodoFormProps = {
  onAddTodo: () => void;
  isAdding: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (value: string) => void;
};

export const NewTodoForm: FC<NewTodoFormProps> = memo(
  ({ onAddTodo, isAdding, inputRef, value, onChange }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onAddTodo();
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={event => onChange(event.target.value)}
          disabled={isAdding}
          autoFocus
        />
      </form>
    );
  },
);

NewTodoForm.displayName = 'NewTodoForm';
