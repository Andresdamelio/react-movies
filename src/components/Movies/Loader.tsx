import ContentLoader from 'react-content-loader';
import { ListContainer } from './style';
import { nanoid } from 'nanoid';

const Loader = () => {
  return (
    <ListContainer>
      {Array.from({ length: 12 }).map(() => {
        return (
          <div key={nanoid()}>
            <ContentLoader
              width='100%'
              height='400'
              viewBox='0 0 300 400'
              backgroundColor='#bfbfbf'
              foregroundColor='#fafafa'
            >
              <rect x='0' y='0' rx='0' ry='0' width='100%' height='400' />
            </ContentLoader>
          </div>
        );
      })}
    </ListContainer>
  );
};

export default Loader;
