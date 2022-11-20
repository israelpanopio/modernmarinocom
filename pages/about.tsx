import { useState }  from 'react'
import { GoogleAds, NavBar, Widget } from '../components';
import { ArticleImgLeft, Cntr, Col, RowArticle } from '../components/sharedstyles';
import { getPosts } from '../services';

export default function About() {  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <NavBar toggle={toggle} />
    <Cntr>
      <RowArticle>
        <AboutUsContent />
        <Widget slug={("")} categories={[]} />
      </RowArticle>
    </Cntr>
    </>
  )
}

const AboutUsContent = () => {
  return (
    <Col>
      <h2>About Us</h2>
      <p>
        Modern Marino is a social media platform for seafarers based on the
        Philippines, but also caters to a worldwide audience. We create
        content that reflects the true life of seafarers at sea without that
        sugar coated drama, and cries for pity. We believe that seafaring is
        a well-respected and rewarding profession. We started out as a page
        on Facebook, and we are currently creating content for our website
        and our Youtube channel.
      </p>
      <p>
        We believe that as seafarers, we have the right to fight the
        stereotypes associated with our profession and make the world see
        that we are more than just workers at sea. We are talented
        individuals with potentials that are not hindered by our profession.
        Most seafarer sticks to the seafaring life until old age, and some
        make it a stepping stone to another venture. It is one of our
        advocacy to provide content to sharpen the seafarer’s financial
        literacy to be able to have the freedom to live any kind of life
        that want for them and their families. seaman marino
      </p>
      <ArticleImgLeft
        src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Kwiw9EssSe2fvVy5tKg3"
        />
      <p>
        Ultimately, we are making a community where positivity towards
        seafaring is held dear. A community where one never sees
        themselves less than they are because they are seafarers. An
        online community where we can showcase the talent and wit of
        our fellow seafarers.Our online presence is wholesome and
        different. We do not associate with other seafarer pages in
        the Philippines where they only aim to gather a larger
        following, even going to the point where they post
        inappropriate content which stains the image of seafarers.
      </p>
      <p>
        Thank you for your time with us! We aim to provide you contents
        as we grow as a community. Follow us on{" "}
        <a href="https://www.facebook.com/modernmarinoako">Facebook</a>{" "}
        and{" "}
        <a href="https://www.youtube.com/channel/UCCwpHPvUZ4_MMdRbJsgQkwg/videos">
          Youtube! 
        </a>
        {" "}Mabuhay ang{" "}
        <a href="https://www.facebook.com/hashtag/modernmarino">
          #modernmarino!
        </a>
      </p>
      <GoogleAds />
    </Col>
  )
}