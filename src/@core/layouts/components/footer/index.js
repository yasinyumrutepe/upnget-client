// ** Icons Import

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='http://localhost:3000/live/home' target='_blank' rel='noopener noreferrer'>
          YT
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
          Yasin Yumrutepe
      </span>
    </p>
  )
}

export default Footer
