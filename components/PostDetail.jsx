import React from 'react'
import Script from "next/script";

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

  return (
    <>
        <h2>{post.title}</h2>
<ins class="adsbygoogle"
     style={{display: "block"}}
     data-ad-client="ca-pub-4841621324421656"
     data-ad-slot="6509252855"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<p>is this page updated?</p>

        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

            return getContentFragment(index, children, typeObj, typeObj.type)
        })}
    </>

  )
}

export default PostDetail