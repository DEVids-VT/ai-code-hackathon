import { Params, useMatches } from 'react-router';
import BreadcrumbItem from './BreadcrumbItem';

interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
}

type HandleType = {
  crumb: (param?: string) => React.ReactNode;
};

function Breadcrumb() {
  const matches: IMatches[] = useMatches();

  const filteredMatches = matches.filter((match) =>
    Boolean(match.handle && (match.handle as HandleType).crumb)
  );

  return (
    <nav className="flex-1 p-2">
      <ol className="md:flex items-center whitespace-nowrap hidden">
        {filteredMatches.map((match, i, arr) => {
          const crumb = (match.handle as HandleType).crumb(
            match.data as string | undefined
          );

          return (
            <BreadcrumbItem
              key={match.id}
              pathname={match.pathname}
              crumb={crumb}
              isCurrentPage={i === arr.length - 1}
              isOne={arr.length === 1}
            />
          );
        })}
      </ol>
    </nav>
  );
}
export default Breadcrumb;
