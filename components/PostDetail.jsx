import React, { useEffect } from 'react'
import GoogleAds from './GoogleAds';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if(obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'paragraph':
              return <p key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        //     case 'image':
        //       return (
        //         <img
        //           key={index}
        //           alt={obj.title}
        //           height={obj.height}
        //           width={obj.width}
        //           src={obj.src}
        //         />
        // );
      default:
        return modifiedText;
        }
    }
    
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
}, []);


  return (
    <>
        <h2>{post.title}</h2>
        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

            return getContentFragment(index, children, typeObj, typeObj.type)
        })}
        <GoogleAds />
        <h2>Google Ads</h2>
    </>

  )
}

export default PostDetail