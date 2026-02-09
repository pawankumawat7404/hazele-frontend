import {Link} from 'react-router-dom';
export default function Footer () {
  return (
    <div className='container'>
      <div className="mt-4 mb-4 row">
        <Link className="col-md-6 text-decoration-none text-dark" to="/Start">Back to home page</Link>
        <p className="col-md-6 mt-3">
          <strong>My personal faves:</strong>
          <br />
          Laru Beya
          {'/ '}
          <br />
          Kids cooking camp
          <p className="mt-3">
            <strong>Other things I do for…</strong>
            <br />
         
            
            <br />
            {' '}
            Marketing
            {' '}
            <br />
            Art Direction
            {' '}
            <br />
            Editorial
            {' '}
            <br />
            Visual Identities
          </p>

        </p>
      </div>
    </div>
  );
}
