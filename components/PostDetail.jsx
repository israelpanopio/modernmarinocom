import React from 'react'

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
        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

            return getContentFragment(index, children, typeObj, typeObj.type)
        })}
    </>

  )
}

export default PostDetail