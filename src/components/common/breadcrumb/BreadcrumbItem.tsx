import { Link } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

interface BreadcrumbItemProps {
  crumb: React.ReactNode;
  pathname: string;
  isCurrentPage: boolean;
  isOne: boolean;
}

function BreadcrumbItem(props: BreadcrumbItemProps) {
  let liClasses = 'flex items-center';
  if (props.isCurrentPage) {
    liClasses +=
      ' text-sm font-semibold text-indigo-800 truncate dark:text-dark-200';
  }

  return (
    <li className={liClasses}>
      {!props.isCurrentPage ? (
        <>
          <Link
            className="flex items-center text-sm text-indigo-500 hover:text-indigo-800 focus:outline-none focus:text-indigo-800 dark:text-neutral-500 dark:hover:text-dark-200 dark:focus:text-dark-200"
            aria-current="page"
            to={props.pathname}>
            {props.crumb}
          </Link>
          <svg
            className="shrink-0 size-5 text-gray-600 dark:text-neutral-600 mx-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              d="M6 13L10 3"
              stroke="currentColor"
              strokeLinecap="round"></path>
          </svg>
        </>
      ) : (
        <Fragment>{props.crumb}</Fragment>
      )}
    </li>
  );
}

export default BreadcrumbItem;
