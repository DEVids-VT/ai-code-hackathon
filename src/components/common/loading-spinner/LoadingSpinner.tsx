import { ClipLoader } from 'react-spinners';

export interface ISpinnerProps {
  size?: number;
}

function LoadingSpinner(props: ISpinnerProps) {
  return (
    <div className="text-center py-10">
      <ClipLoader color="blue" size={props.size || 32} />
    </div>
  );
}

export default LoadingSpinner;
