import { cn } from '../utils';
import { PlusIcon, MinusIcon } from './icons';

interface ScoreControlsProps {
  direction: 'col' | 'row';
  score: number;
  onUpvote: () => void;
  onDownvote: () => void;
}

export function ScoreControls({
  direction,
  score,
  onUpvote,
  onDownvote
}: ScoreControlsProps) {
  return (
    <div
      className={cn(
        direction === 'col'
          ? 'flex-col gap-y-2 py-1.5 px-1'
          : 'gap-x-2 px-1.5 py-1',
        'flex items-center bg-neutral-light-gray-1 rounded-md'
      )}>
      <button
        type="button"
        className="size-6 inline-flex items-center justify-center p-1 text-primary-light-gray-blue hover:text-primary-moderate-blue"
        onClick={onUpvote}>
        <span className="sr-only">Upvote</span>
        <PlusIcon aria-hidden="true" />
      </button>
      <div className="font-medium text-primary-moderate-blue text-center px-2 py-1">
        {score}
      </div>
      <button
        type="button"
        className="size-6 inline-flex items-center justify-center p-1 text-primary-light-gray-blue hover:text-primary-moderate-blue"
        onClick={onDownvote}>
        <span className="sr-only">Downvote</span>
        <MinusIcon aria-hidden="true" />
      </button>
    </div>
  );
}
