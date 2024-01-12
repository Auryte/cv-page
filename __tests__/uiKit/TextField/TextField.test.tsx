import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { TextField } from '@/uiKit/TextField/TextField';

describe('Component: TextField.', () => {
  it('Should render properly with the standard variant.', () => {
    const testText: string = 'test-text';

    render(<TextField label={testText} />);

    const node = screen.getByLabelText(testText);

    expect(node).toBeInTheDocument();
  });
  it('Should render properly with the outlined variant', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        variant='outlined'
      />,
    );

    const node = screen.getByLabelText(testText);

    expect(node).toBeInTheDocument();
  });
  it('Should render properly with the filled variant', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        variant='filled'
      />,
    );

    const node = screen.getByLabelText(testText);

    expect(node).toBeInTheDocument();
  });
  it('Should render a OutlinedInput when the "variant" prop is set to outlined.', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        variant='outlined'
      />,
    );

    const node = screen.getByLabelText(testText);

    expect(node).toHaveClass('MuiOutlinedInput-input');
  });
  it('Should render a FilledInput when the "variant" prop is set to filled.', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        variant='filled'
      />,
    );

    const node = screen.getByLabelText(testText);

    expect(node).toHaveClass('MuiFilledInput-input');
  });
  it('Should have a value after changing the value od the textField.', () => {
    const testText: string = 'test-text';
    const testValue: string = 'test-value';

    render(<TextField label={testText} />);

    const node = screen.getByLabelText(testText) as HTMLInputElement;

    fireEvent.change(node, { target: { value: testValue } });

    expect(node.value).toBe(testValue);
  });
  it('Should have a value after changing the value od the textField with the outlined variant.', () => {
    const testText: string = 'test-text';
    const testValue: string = 'test-value';

    render(
      <TextField
        label={testText}
        variant='outlined'
      />,
    );

    const node = screen.getByLabelText(testText) as HTMLInputElement;

    fireEvent.change(node, { target: { value: testValue } });

    expect(node.value).toBe(testValue);
  });
  it('Should have a value after changing the value od the textField with the filled variant.', () => {
    const testText: string = 'test-text';
    const testValue: string = 'test-value';

    render(
      <TextField
        label={testText}
        variant='filled'
      />,
    );

    const node = screen.getByLabelText(testText) as HTMLInputElement;

    fireEvent.change(node, { target: { value: testValue } });

    expect(node.value).toBe(testValue);
  });
  it('Should correctly call a function while the input was clicked.', () => {
    const testText: string = 'test-text';
    const mockFn = jest.fn();

    render(
      <TextField
        label={testText}
        onClick={mockFn}
      />,
    );

    const node = screen.getByLabelText(testText);

    fireEvent.click(node);

    expect(mockFn).toHaveBeenCalled();
  });
  it('Should change the color when the "color" prop is used.', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        color='secondary'
      />,
    );

    const node = screen.getByText(testText);

    expect(node).toHaveClass('MuiFormLabel-colorSecondary');
  });
  it('Should render start and end icon.', () => {
    const testStartIconText = 'test-span-1';
    const testEndIconText = 'test-span-2';
    const StartIcon = () => <span>{testStartIconText}</span>;
    const EndIcon = () => <span>{testEndIconText}</span>;

    render(
      <TextField
        startelement={<StartIcon />}
        endelement={<EndIcon />}
      />,
    );

    const startIconNode = screen.getByText(testStartIconText);
    const endIconNode = screen.getByText(testEndIconText);

    expect(startIconNode).toBeInTheDocument();
    expect(endIconNode).toBeInTheDocument();
  });
  it('Should render an end icon in the filled variant.', () => {
    const testEndIconText = 'test-span-2';
    const EndIcon = () => <span>{testEndIconText}</span>;

    render(<TextField endelement={<EndIcon />} variant='filled'/>);

    const endIconNode = screen.getByText(testEndIconText);

    expect(endIconNode).toBeInTheDocument();
  });
  it('Should render start icon with the outlined variant.', () => {
    const testStartIconText = 'test-span-1';
    const StartIcon = () => <span>{testStartIconText}</span>;

    render(<TextField startelement={<StartIcon />} variant='outlined'/>);

    const startIconNode = screen.getByText(testStartIconText);

    expect(startIconNode).toBeInTheDocument();
  });
  it('Should render with default value.', () => {
    const testText: string = 'test-text';
    const testValue: string = 'test-value';

    render(
      <TextField
        label={testText}
        defaultValue={testValue}
      />,
    );

    const node = screen.getByLabelText(testText) as HTMLInputElement;

    expect(node).toHaveValue(testValue);
  });
  it('Should render without any value, but then have a value set by the "value" prop.', () => {
    const testText: string = 'test-text';
    const testValue: string = 'test-value';

    render(<TextField label={testText} />);

    const node = screen.getByLabelText(testText) as HTMLInputElement;

    expect(node).toHaveValue('');

    fireEvent.change(node, { target: { value: testValue } });

    expect(node).toHaveValue(testValue);
  });
  it('Should render a helper text.', () => {
    const testText: string = 'test-text';

    render(<TextField helperText={testText} />);

    const node = screen.getByText(testText);

    expect(node).toBeInTheDocument();
  });
  it('Should render a label.', () => {
    const testText: string = 'test-text';

    render(<TextField label={testText} />);

    const node = screen.getByText(testText);

    expect(node).toBeInTheDocument();
  });
  it('Should be disabled after the "disabled" prop is set.', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        disabled
      />,
    );

    const node = screen.getByLabelText(testText);

    expect(node).toBeDisabled();
  });
  it('Should have an error while the "error" prop is set.', () => {
    const testText: string = 'test-text';

    render(
      <TextField
        label={testText}
        error
      />,
    );

    const node = screen.getByText(testText);

    expect(node).toHaveClass('Mui-error');
  });
});
