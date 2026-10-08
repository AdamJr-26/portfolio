import portrait from '../../assets/me.webp';
import { profile } from '../../data/profile';
import StatusBadge from './StatusBadge';

const corner = 'absolute h-6 w-6 border-primary';

function Me() {
  return (
    <figure className='relative mx-auto w-full max-w-[22rem]'>
      {/* hexagon halo behind the portrait */}
      <div
        className='clip-hex absolute left-1/2 top-[8%] aspect-[1/1.1547] w-[88%] -translate-x-1/2 bg-line p-px'
        aria-hidden='true'
      >
        <div className='clip-hex h-full w-full bg-gradient-to-b from-[#132a0e] via-dark to-dark' />
      </div>

      <img
        src={portrait}
        alt={`Portrait of ${profile.name}`}
        width={720}
        height={857}
        fetchPriority='high'
        className='relative w-full [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]'
      />

      {/* viewfinder corners */}
      <span className={`${corner} left-0 top-0 border-l-2 border-t-2`} aria-hidden='true' />
      <span className={`${corner} right-0 top-0 border-r-2 border-t-2`} aria-hidden='true' />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} aria-hidden='true' />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} aria-hidden='true' />

      {profile.openToWork && (
        <figcaption className='absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap'>
          <StatusBadge label='Currently open to work' />
        </figcaption>
      )}
    </figure>
  );
}

export default Me;
