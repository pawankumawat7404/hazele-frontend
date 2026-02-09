import React from 'react';
import {NavLink} from 'react-router-dom';
function My () {
  return (
    <div>

      <div
        className="mb-2"
        style={{
          minHeight: '100vh',
          background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
          position: 'relative',
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Overlap Header */}
        <header
          className=""
          style={{
            position: 'absolute',
            top: 18,
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 15px',
            paddingTop: '20px',
            background: '#043c2acf',
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white bg-dark'>ANGERA MART</h2>
          <div className='mt-3'>
                <nav>
           <a className=''
              href="www"
              style={{margin: '0 10px', color: 'white', textDecoration: 'none'}}
            >
              Home
            </a>
            <NavLink >
                Users
            </NavLink> 
            <NavLink>
                Products
            </NavLink>
             <NavLink>
                Categories
            </NavLink>
            <a
              href="ww"
              style={{margin: '0 10px', color: 'white', textDecoration: 'none'}}
            >
              About
            </a>
            <a
              href="ww#"
              style={{margin: '0 10px', color: 'white', textDecoration: 'none'}}
            >
              Contact
            </a>
            
          </nav>
          </div>
          
        </header>
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1>Welcome to My Website</h1>

        </div>
      </div>
      
    </div>
  );
}
export default My;
