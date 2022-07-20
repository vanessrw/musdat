import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper wrapper">
        <div className="content">
          <div className="footer-about">
            <h2>ASDF</h2>
            <p className="text-detail">
              WEB LATIHAN JULY 2022
              <br />
              
            </p>
          </div>

          <div className="info">
            <FooterItem
              title=""
              link1="Instagram"
              destination1="https://www.instagram.com/vanessrw/"
              anchorTarget="_blank"
            />
            <FooterItem
              title=""
              link1="Email"
              destination1="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZPPJQFlmbnnKMDbKssBRqNbnlfxsBwVWNkSNnWqbVJCdzbPLnGGHGZnFCKGDWVPGLDpMW"
            />
            <FooterItem
              title=""
              link1="Linkedin"
              destination1="https://www.linkedin.com/in/vanessarw"
            />
          </div>
        </div>

        <div className="copy">
          <p className="text-detail">
            &copy; 2022 VANESSA REBECCA WIYONO
          </p>
        </div>
      </div>
    </div>
  );
}
